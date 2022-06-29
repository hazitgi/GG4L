const express = require("express");
const app = express();
const axios = require("axios");
const base64 = require("nodejs-base64-converter");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{res.status(200).send('server running')})
app.get("/test", async (req, res) => {
  try {
    console.log("get");
    // console.log(req.params);
    console.log(req.query);
    const { code } = req.query;
    console.log("Hi");
    console.log("response code ", code);
    const base_uri = "https://schoolpassport.gg4l.com";
    // const redirect_uri = "https://757b-171-49-198-145.in.ngrok.io/access_token";
    const redirect_uri = "https://e4c0-171-49-198-145.in.ngrok.io/access_token";
    const client_id = `PTRYAHHKZX`;
    const client_Secret = `OP8Afvqc1TwpFAxY7PnPbA3f+QHQsWifnzrVao0BzLg=`;

    const baseData = base64.encode(`${client_id}:${client_Secret}`);
    console.log({ baseData });
    const data = {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri,
    };
    const config = {
      headers: {
        Authorization: `Basic ${baseData}`,
      },
    };

    console.log(config);

    // await axios
    // .post(`${base_uri}/oauth/token`, data, config)
    // .then((data) => {
    //   console.log("success");
    // })
    // .catch((err) => {
    //   console.log(err);
    //   console.log("err");
    // });
    // console.log(token.data);
    // let token = await axios.post(`${base_uri}/oauth/token`, data, config);
    // console.log(token.data);

    // implicit grant

    let implicit = await axios.get(`${base_uri}/oauth/auth?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`)
    console.log(implicit);


  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
});

app.get("/access_token", async (req, res) => {
  try {
    console.log("access_token");
    console.log("=================================");
    console.log({ "req.params": req.params });
    console.log({ "req.query": req.query });
    console.log("=================================");
  } catch (err) {
    console.log(err);
  }
});
app.post("/access_token", async (req, res) => {
  try {
    console.log("access_token");
    console.log("=================================");
    console.log({ "req.params": req.params });
    console.log({ "req.query": req.query });
    console.log("=================================");
  } catch (err) {
    console.log(err);
  }
});

// app.post("/test", (req, res) => {
//   console.log("post");
//   // console.log(req);
//   console.log(req.body);
//   console.log("Hi");
// });

app.listen(8000, () => {
  console.log("server running");
});
