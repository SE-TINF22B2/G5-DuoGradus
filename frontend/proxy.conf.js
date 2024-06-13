// Code for proxying requests to the backend server
const PROXY_CONFIG = [
      {
        context: [
          "/api/"
        ],
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            "^/api": ""
        }

      }
    ];

    module.exports = PROXY_CONFIG;
