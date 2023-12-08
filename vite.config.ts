import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [tsconfigPaths(), solid(), suidPlugin(), solidPlugin()],
  build: {
    target: "esnext"
  }
});
