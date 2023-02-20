import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const ssyoutube = async (url) => {
  const res = await axios.post("https://ssyoutube.com/api/convert", {
    url: url,
  });
  return res.data;
};

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/api/youtube", async (req, res) => {
  const url = req.query.url;
  try {
  const data = await ssyoutube(url);
  res.json({
    "status": true,
    "result": data
})
  } catch{
    res.json({
      "status": false,
  })
  }
});
app.get("/api/tiktok", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/twitter", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/facebook", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/instagram", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});

app.listen(port);
console.log(`Server running on port ${port}`);
