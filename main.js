const { createApp } = require("./src/consent-manager.js");

const main = () => {
  const PORT = 8080;
  const app = createApp();
  app.listen(PORT, () => console.log("Consent Manager started on port", PORT));
};

main();
