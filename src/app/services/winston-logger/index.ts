import winston from "winston";

function createWinstonLogger(): winston.Logger {

  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File()
    ]
  })

  return logger;
}

export default createWinstonLogger;