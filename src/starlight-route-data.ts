import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { globalRouteSidebar, isProjectDocsPath, projectRouteSidebar } from "./docs-nav.mjs";

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const pathname = context.url.pathname;

  route.sidebar = isProjectDocsPath(pathname)
    ? projectRouteSidebar(pathname)
    : globalRouteSidebar(pathname);
});
