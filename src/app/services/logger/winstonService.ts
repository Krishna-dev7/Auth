import winston from "winston";
import ILogger from "./ILogger";

class WinstonService implements ILogger {

  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    })
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(error:any): void {
    this.logger.error(error.message || error);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }
}


const winstonService = new WinstonService();
export default winstonService;
export { WinstonService };