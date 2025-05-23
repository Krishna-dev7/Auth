// register all services here
import winstonService from "./loggerService/winstonService";
import { ServiceContainer as sc}  from "../container";
import createMulter from "./multer";

function initServices() {
  sc.register("winston", winstonService);
  sc.register("multer", createMulter());
}

export default initServices;