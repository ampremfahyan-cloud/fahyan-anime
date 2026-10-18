
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Fahyan Anime"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Fahyan Anime berjalan di port ${PORT}`);
});
