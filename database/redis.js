import { createClient } from "redis";
import config from "../config/server";

export default function initClient() {
  const client = createClient({
    socket: {
      ...config.redis,
    },
  });

  client.on("error", (err) => {
    console.log("redis connect error", err);
    process.exit(0);
  });
  client.connect();

  return client;
}

export const client = initClient();
