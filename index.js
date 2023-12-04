const express = require("express");
const dbo = require("./db/db");
const bodyParser = require('body-parser');
const sha1 = require('js-sha1');
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

/*------------- GET USER --------------*/
app.get("/user", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM user WHERE ID = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- INSERT USER --------------*/
app.post('/user/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body;
    console.log('Got body:', body);
    dbConnect
            .query("INSERT INTO user (Last_name          , \
                                      First_name         , \
                                      Pseudo             , \
                                      Birthday           , \
                                      Country            , \
                                      Email              , \
                                      Password           , \
                                      Picture            , \
                                      X                  , \
                                      Y                  , \
                                      Z                  , \
                                      Type               , \
                                      Level              , \
                                      Money              , \
                                      XP                 , \
                                      Streak             , \
                                      Streak_progress    , \
                                      Banner             , \
                                      Title              ) \
                    VALUES (\"" + body.last_name      + "\" , \
                            \"" + body.first_name     + "\" , \
                            \"" + body.pseudo         + "\" , \
                            \"" + body.birthday       + "\" , \
                            \"" + body.country        + "\" , \
                            \"" + body.email          + "\" , \
                            \"" + sha1(body.password) + "\" , \
                              " + body.picture        + "   , \
                              " + body.x              + "   , \
                              " + body.y              + "   , \
                              " + body.z              + "   , \
                            \"" + body.type           + "\" , \
                                    0                       , \
                                    0                       , \
                                    0                       , \
                                    0                       , \
                                    0                       , \
                              " + body.banner         + "   , \
                              " + body.title          + ")", 
            
            function (err, result) {
                if (err){
                throw err;
                }
                console.log(result);     
            })
    res.json(body);
});

/*------------- UPDATE Personal Data USER --------------*/
app.post('/user/update/personal_data', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body;
    console.log('Got body:', body);
    dbConnect
            .query("UPDATE user SET Last_name  = \"" + body.last_name      + "\" , \
                                    First_name = \"" + body.first_name     + "\" , \
                                    Pseudo     = \"" + body.pseudo         + "\" , \
                                    Email      = \"" + body.email          + "\" , \
                                    Password   = \"" + sha1(body.password) + "\" , \
                                    Picture    =   " + body.picture        + "   , \
                                    X          =   " + body.x              + "   , \
                                    Y          =   " + body.y              + "   , \
                                    Z          =   " + body.z              + "   , \
                                    Banner     =   " + body.banner         + "   , \
                                    Title      =   " + body.title          + "     \
                    WHERE ID = " + body.id,
            function (err, result) {
              if (err){
                throw err;
              }
              console.log(result);     
            })
    res.json(body);
});

/*------------- DELETE USER --------------*/
app.delete('/user/delete', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect
          .query("DELETE FROM user WHERE ID = " + body.id,
          function (err, result) {
            if (err){
              throw err;
            }
            console.log(result);     
          })
  res.json(body);
});