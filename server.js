const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://assistant.voiceflow.com",
    changeOrigin: true,
    pathRewrite: { "^/proxy": "" }
  })
);

app.listen(3000, () => {
  console.log("Proxy running on port 3000");
});
