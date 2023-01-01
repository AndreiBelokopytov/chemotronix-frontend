import { Config } from "./config.types";

export const config: Config = {
  appName: process.env.APP_NAME!,
  alchemyApiKey: process.env.ALCHEMY_APY_KEY!,
};
