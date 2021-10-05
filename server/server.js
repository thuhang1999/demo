const express = require("express");
const mysql = require("mysql");
const app = express();
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "pnj_db",
});
connection.connect(function (err) {
  err ? console.log(err) : console.log("connection===", connection);
});
connection.on("error", function (err) {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    // Connection to the MySQL server is usually
    // handleDisconnect(); // lost due to either server restart, or a
  } else {
    // connnection idle timeout (the wait_timeout
    throw err; // server variable configures this)
  }
});

connection.on("connection", (stream) => {
  console.log("connected");
});

// products control
app.get("/api/get_products", (req, res) => {
  var sql = "SELECT * FROM `danh_muc_hang`";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

// sort products by some field
app.get("/api/products", (req, res) => {
  res.json({ query: req.query });
});

// get detail of a product
app.get("/api/product/:id", (req, res) => {
  res.json({ query: req.query, params: req.params });
});

// get all orders
app.get("/api/get_orders", (req, res) => {
  var sql = "SELECT * FROM `don_hang`";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

app.get("/api/order?a=b&c=d", (req, res) => {
  res.json({ id: req });
});

// user control
//sign up
app.get("/api/user/sign_up", (req, res) => {
  res.json({ query: req.query });
});

// login
app.get("/api/user/login", (req, res) => {
  res.json({ query: req.query });
});

//get user detail
app.get("api/user/detail", (req, res) => {
  res.json({ query: req.query });
});



app.listen(4000, () => console.log("App listening on port 4000"));
