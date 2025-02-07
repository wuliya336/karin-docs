// server.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts"
import { readFileSync } from "node:fs"

const handler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url)
  const filePath = url.pathname === "/" ? "docs/.vitepress/dist/index.html" : `docs/.vitepress/dist${url.pathname}`

  try {
    const fileContent = readFileSync(filePath)
    return new Response(fileContent, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("404 Not Found", { status: 404 })
    }
    return new Response("Internal Server Error", { status: 500 })
  }
}

serve(handler, { port: 8000 })