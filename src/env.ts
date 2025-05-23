import zod from "zod";

const envSchema = zod.object({
  PORT: zod.string(),
  MONGODB_URI: zod.string().url(),
  ORIGIN: zod.string().url()
})

function createEnv(env: NodeJS.ProcessEnv) {
  const envValidationResult = envSchema.safeParse(env);
  if (!envValidationResult.success) {
    throw new Error(envValidationResult.error.message);
  }

  return envValidationResult.data;
}

const env = createEnv(process.env);
export default env;
export {
  createEnv
}