const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const CLIENT_ID = "01647b81c184ee135279";
const CLIENT_SECRET = "d241c5d4bca7689a2c9d8a8e1a01ca8c2214982b";

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});


//get access token

app.get("/getAccessToken", async function (req, res) {
  req.query.code;

  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET +
    "&code=" +
    req.query.code +
    "&scope=repo%20repo"; 

  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    res.json(data);
  });
});


//getUserData

app.get('/getUserData', async function(req, res) {
  req.get("Authorization"); //Bearer ACCESSTOKEN
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      "Authorization" : req.get("Authorization")//Bearer ACCESSTOKEN
    },
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    res.json(data);
  });
})

app.patch('/updateUserData', async function(req, res) {
  const accessToken = req.get("Authorization");
  const updatedData = req.body;

  await fetch("https://api.github.com/user", {
    method: "PATCH",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json"
    },
    body: JSON.stringify(updatedData),
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Updated user data:", data);
    res.json(data);
  })
  .catch((error) => {
    console.error("Error updating user data:", error);
    res.status(500).send("Failed to update user data");
  });
});

app.listen(4000, function () {
  console.log("CORS server start on 4000 port");
});
