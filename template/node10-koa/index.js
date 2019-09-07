"use strict";
const Koa = require("koa");
const app = new Koa();

const middlewares = require("./function/middlewares").default;

// response

for (const middleware of middlewares) {
  app.use(middleware);
}

app.listen(3000);
