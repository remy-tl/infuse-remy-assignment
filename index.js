const express = require("express");
const { api: dataApi } = require("./src/components/data");

const PORT = 3005;

const app = express();

// "data" component endpoint
app.use("/", dataApi);

// assets
app.use("/app", express.static("assets"));

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
