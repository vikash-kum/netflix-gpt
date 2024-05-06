const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://localhost:8080", // Change to match your Spring Boot backend URL
      changeOrigin: true,
    })
  );
};
