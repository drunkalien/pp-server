const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "*",
  })
);

// Serve static files from the 'files' directory
app.use("/files", express.static(path.join(__dirname, "files")));

// Serve specific files
app.get("/content", (req, res) => {
  res.sendFile(path.join(__dirname, "files", "Content Template.pptx"));
});

app.get("/title", (req, res) => {
  res.sendFile(path.join(__dirname, "files", "Title Template.pptx"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
