const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/system-info", (req, res) => {
  res.json({
    platform: os.platform(),
    userinfo: os.userInfo(),
    freemem: os.freemem(),
    totalmem: os.totalmem()
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

