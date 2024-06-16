// Code for proxying requests to the backend server
const PROXY_CONFIG = [
      {
        context: [
          "/api/"
        ],
        target: "https://staging.duo-gradus.de",
        changeOrigin: true,
        secure: false,


      }
    ];

    module.exports = PROXY_CONFIG;
