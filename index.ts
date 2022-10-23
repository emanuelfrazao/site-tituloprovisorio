// import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";


const reqHandler = async (_req: Request) => {
    const html_contents = await Deno.readFile("./index.html");
    return new Response(html_contents);
};
serve(reqHandler, { port: 8080 });

// const app = new Application();

// app
//     .get("/hello", (_ctx) => {
//         return "Hello, Abc!";
//     })
//     .static("/", "./public")
//     .start({ port: 8000 });