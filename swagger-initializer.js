window.onload = function() {
  fetch("./swagger-config.json")
    .then(response => response.json())
    .then(config => {
      const ui = SwaggerUIBundle({
        urls: config.urls,
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    })
    .catch(error => console.error("Error loading Swagger config:", error));
};
