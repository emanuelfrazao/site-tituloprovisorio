import { serve } from "https://deno.land/std@0.160.0/http/server.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

const serveFiles = (req: Request) => staticFiles('static')({ 
    request: req, 
    respondWith: (r: Response) => r 
})

serve((req) => serveFiles(req), { port: 3000 });