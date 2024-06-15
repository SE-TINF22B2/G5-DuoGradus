// Code for proxying requests to the backend server
const PROXY_CONFIG = [
      {
        context: [
          "/api/"
        ],
        target: "https://staging.duo-gradus.de/api",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            "^/api": ""
        }

      }
    ];

    module.exports = PROXY_CONFIG;
