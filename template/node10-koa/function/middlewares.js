exports.default = [
  async ctx => {
    ctx.body = "Hello World from " + new Date().toString();
  }
];
