// RUN: deno run --allow-net 001-helloworld.ts

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "<html><body><h1 style='background-color:beige;display:flex;align-items:center;justify-content:center;height:100%;'>Hello World\n</h1></body></html>" });
}
