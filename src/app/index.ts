import express, { Application } from 'express';
import cors from "cors";
import { ServiceContainer } from './container';

class App {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public getApp(): Application {
    return this.app;
  }
}


function createExpressApplication(container:ServiceContainer): ServiceContainer {
  const app: App = new App(express());
  const server = app.getApp();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cors());

  container.server = server;
  return container;
}

export default createExpressApplication;