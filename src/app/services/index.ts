// register all services here
import winstonService from "./logger/winstonService";
import { ServiceContainer as sc}  from "../container";

async function initServices() {
  sc.register("winston", winstonService);
}

export default initServices;