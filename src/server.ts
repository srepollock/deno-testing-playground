import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import * as log from "https://deno.land/std/log/mod.ts";

for await (let req of serve({ port: 8000 })) {
  log.info(`Request: ${req.body}`);
  req.respond({ body: "Hello Deno Land" });
}
