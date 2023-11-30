const express = require("express");
const dbo = require("./db/db");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4444;
const jsonParser = bodyParser.json();

dbo.connectToServer();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.get("/pokemon/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM User", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

app.post('/pokemon/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body;
    console.log('Got body:', body);
    dbConnect
            .query("INSERT INTO `user`(`last_name`, `first_name`, `pseudo`) VALUES (\"" + body.last_name + "\",\"" + body.first_name + "\",\"" + body.pseudo + "\")", 
            
            function (err, result) {
                if (err){
                throw err;
                }
                console.log(result);     
            })
    res.json(body);
});

app.post('/pokemon/update', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body;
    console.log('Got body:', body);
    dbConnect
            .query("UPDATE `user` SET `last_name`= \"" + body.last_name + "\" WHERE `id`= " + body.id,
            function (err, result) {
              if (err){
                throw err;
              }
              console.log(result);     
            })
    res.json(body);
});

app.delete('/pokemon/delete', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body;
    console.log('Got body:', body);
    dbConnect
            .query("DELETE FROM `user` WHERE `id` = " + body.id,
            function (err, result) {
              if (err){
                throw err;
              }
              console.log(result);     
            })
    res.json(body);
});