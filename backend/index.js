const express = require("express");
const session = require('express-session');
const app = express();

const dbo = require("./db/db");
const bodyParser = require('body-parser');
var cors = require('cors');
const sha1 = require('js-sha1');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({resave: false, saveUninitialized: false, secret: 'jsopki', cookie: {httpOnly: false,},},));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const jsonParser = bodyParser.json();
const port = 4444;


// /*------------- CREATE SESSION USER --------------*/
// app.use((req, res, next) => {
//   req.session.user = [];
//   next();
// });

dbo.connectToServer();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

/*------------- GET ALL USERS --------------*/
app.get("/user/all", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT  ID        , \
                          Pseudo    , \
                          Email     , \
                          Password    \
                  FROM user u ",
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET USER --------------*/
app.post("/user", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  const body = req.body;
  dbConnect
          .query("SELECT  u.ID                , \
                          u.Last_name         , \
                          u.First_name        , \
                          u.Pseudo            , \
                          u.Birthday          , \
                          u.Country           , \
                          u.Email             , \
                          u.Password          , \
                          pp.Image AS Picture , \
                          u.X                 , \
                          u.Y                 , \
                          u.Z                 , \
                          u.Type              , \
                          l.Number            , \
                          u.Money             , \
                          u.XP                , \
                          u.Streak            , \
                          u.Streak_progress   , \
                          b.Image AS Banner   , \
                          t.Image AS Title      \
                  FROM user u INNER JOIN level l ON u.Level = l.ID               \
                              INNER JOIN Banner b ON u.Banner = b.ID             \
                              INNER JOIN Title t ON u.Title = t.ID               \
                              INNER JOIN profil_picture pp ON u.Picture = pp.ID  \
                  WHERE u.ID = " + body.id, 
          
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
                                    1                       , \
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
                                    Birthday   = \"" + body.birthday       + "\" , \
                                    Country    = \"" + body.country        + "\" , \
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

/*------------- SET SESSION USER --------------*/
app.post('/setUserSession', jsonParser, (req, res) => {
    const body = req.body;
    req.session.user = body;
    req.session.save();
    res.send('Variable de session définie');
});

/*------------- GET SESSION USER --------------*/
app.get('/getUserSession', (req, res) => {
  const myVariable = req.session.user || "";
  res.json(myVariable);
});