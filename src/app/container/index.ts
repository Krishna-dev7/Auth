import multer from "multer";
import initServices from "../services";
import ILogger from "../services/logger/ILogger";
import { Application } from "express";

interface IServiceContainer {
  logger: ILogger;
  multer: multer.Multer;
  server?: Application;
}

class ServiceContainer implements IServiceContainer{

  public multer: multer.Multer;
  public logger: ILogger;
  public server?: Application;
  private static services: Map<string, any>;
  private static instance: ServiceContainer;


  private constructor() {
    this.multer = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB
      }
    })
    this.logger = ServiceContainer.getService("logger");
  }

  public static getInstance(): ServiceContainer {
    if(!this.instance) 
      this.instance = new ServiceContainer();

    return this.instance;
  }
  
  public static getService(name:string) {
    if(!this.services)
      this.services = new Map<string, any>();

    if(this.services.has(name)) 
      return this.services.get(name);
    else 
      throw new Error(`Service ${name} not found`);
  }

  public static register(
    name: string,
    service: any
  ): boolean {
      if(!this.services) 
        this.services = new Map<string, any>();

      this.services.set(name, service);
      return true;
  }
}

async function createContainer() {
  await initServices();
  return ServiceContainer.getInstance();
}

export default createContainer;
export {
  ServiceContainer
}