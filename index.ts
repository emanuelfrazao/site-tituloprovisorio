import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

app
    .get("/hello", (_ctx) => {
        return "Hello, Abc!";
    })
    .static("/", "./public")
    .start({ port: 8000 });