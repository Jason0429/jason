import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import suidPlugin from "@suid/vite-plugin";
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [tsconfigPaths(), solid({
    ssr: false,
    adapter: vercel()
  }), suidPlugin(), solidPlugin()],
  build: {
    target: "esnext"
  }
});
