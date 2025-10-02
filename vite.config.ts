import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  // .env fayldagi o'zgaruvchilarni yuklaymiz
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],
    server: {
      port: env.DEV_PORT || 5100,
      host: true, 
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
