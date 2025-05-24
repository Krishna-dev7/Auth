import * as dotEnv from "dotenv";
import createContainer, { ServiceContainer }  from "./app/container";
import env from "./env";
import appConfig from "./app/config";
import http from "http";
import createExpressApplication from "./app";

dotEnv.config();

async function init() {
  const container: ServiceContainer = await createContainer();
  const { logger } = container;

  try {
    const PORT: number = +(env.PORT || appConfig.PORT)
    const server = http.createServer(createExpressApplication(container).server);

    server.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    })
  } catch (err:any) {
    logger.error(err) 
  }
}

init();