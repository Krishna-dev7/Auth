interface ILogger {
  info(message: string): void;
  error(error: any): void;
  warn(message: string): void;
  debug(message: string): void;
}

export default ILogger;