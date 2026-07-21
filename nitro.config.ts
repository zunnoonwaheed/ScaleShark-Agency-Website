import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  serveStatic: true,
  future: {
    nativeFetch: true,
  },
});
