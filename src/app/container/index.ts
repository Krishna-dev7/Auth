import initServices from "../services";
import ILogger from "../services/loggerService/ILogger";

class ServiceContainer {

  public _multer;
  public _logger: ILogger;
  private static services: Map<string, any>;
  private static instance: ServiceContainer;


  private constructor() {
    initServices();
    this._multer = ServiceContainer.getService("multer");
    this._logger = ServiceContainer.getService("logger");
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


const serviceContainer = ServiceContainer.getInstance();
export default serviceContainer;
export {
  ServiceContainer
}