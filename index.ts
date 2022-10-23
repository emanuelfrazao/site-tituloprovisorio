import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "Desculpa, não deu";
  }
});

await app.listen({ port: 8000 });