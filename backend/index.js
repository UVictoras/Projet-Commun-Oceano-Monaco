const express = require("express");
const session = require('express-session');
const multer = require('multer');
const path = require('path');
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

dbo.connectToServer();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.resolve(__dirname, '..'), 'oceano', 'public', 'img', 'event'));
//     console.log("ppppppppppppp")
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//     console.log("oooooooooooo")
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single("img"), (req, res) => {
//   res.send('Fichier téléchargé avec succès.');
//   console.log("hhhhhhhhhhh")
// });

/*------------- GET ALL USERS --------------*/
app.get("/user/all", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT  u.ID                  , \
                          u.Pseudo              , \
                          u.Email               , \
                          pp.Image AS Picture   , \
                          u.Password            , \
                          t.Name AS Title         \
                  FROM user u INNER JOIN Title t ON u.Title = t.ID \
                              INNER JOIN profil_picture pp ON u.Picture = pp.ID",
          
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
          .query("SELECT  u.ID                                                                       , \
                          u.Last_name                                                                , \
                          u.First_name                                                               , \
                          CONCAT(UCASE(SUBSTRING(u.Pseudo, 1, 1)), SUBSTRING(u.Pseudo, 2)) AS Pseudo , \
                          u.Birthday                                                                 , \
                          u.Country                                                                  , \
                          u.Email                                                                    , \
                          u.Password                                                                 , \
                          pp.ID AS Picture_ID                                                        , \
                          pp.Image AS Picture                                                        , \
                          u.X                                                                        , \
                          u.Y                                                                        , \
                          u.Z                                                                        , \
                          u.Type                                                                     , \
                          l.Number                                                                   , \
                          u.Money                                                                    , \
                          u.XP                                                                       , \
                          l.XP AS XPLevel                                                            , \
                          ROUND((u.XP / l.XP) * 100) AS PctXP                                        , \
                          u.Streak                                                                   , \
                          u.Streak_progress                                                          , \
                          b.Image AS Banner                                                          , \
                          t.Name AS Title                                                             \
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

/*------------- SET SESSION ID EVENT --------------*/
app.post('/setIDEventSession', jsonParser, (req, res) => {
  const body = req.body;
  req.session.idEvent = body;
  req.session.save();
  res.send('Variable de session définie');
});

/*------------- GET SESSION ID EVENT --------------*/
app.get('/getIDEventSession', (req, res) => {
const myVariable = req.session.idEvent || "";
res.json(myVariable);
});

/*------------- GET EVENT --------------*/
app.post("/event", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  const body = req.body;
  dbConnect
          .query("SELECT  e.Title                                                                           , \
                          e.Description                                                                     , \
                          e.Start_date                                                                      , \
                          e.End_date                                                                        , \
                          e.Link                                                                            , \
                          t.Name                                                                            , \
                          t.Color                                                                           , \
                          t.Logo                                                                            , \
                          e.Image AS ImageEvent                                                             , \
                          u.Pseudo                                                                          , \
                          u.Last_name                                                                       , \
                          u.First_name                                                                      , \
                          u.Email                                                                           , \
                          l.Number                                                                          , \
                          tt.Name AS TitleName                                                              , \
                          pp.Image AS ImageProfil                                                           , \
                          (SELECT COUNT(*) FROM users_in_event WHERE ID_Event = " + body.id + ") AS NbUsers   \
                  FROM event e  INNER JOIN user u ON e.Organizator = u.ID           \
                                INNER JOIN type_event t ON e.Type = t.ID            \
                                INNER JOIN level l ON u.Level = l.ID                \
                                INNER JOIN profil_picture pp ON u.Picture = pp.ID   \
                                INNER JOIN title tt ON l.Title = tt.ID              \
                  WHERE e.ID = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET ALL EVENT --------------*/
app.get("/event/all", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT e.ID,                                                           \
                        t.Logo,                                                          \
                  (SELECT COUNT(*) FROM users_in_event WHERE ID_Event = e.ID) AS NbUsers \
                  FROM event e INNER JOIN type_event t ON e.Type = t.ID", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET LAST EVENT --------------*/
app.post("/last/event", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  const body = req.body;
  dbConnect
          .query("SELECT  e.Image       , \
                          e.Title       , \
                          e.Description , \
                          e.End_date    , \
                          u.Pseudo      , \
                          te.Name       , \
                          te.Logo       , \
                          te.Color        \
                  FROM users_in_event ue  INNER JOIN event e ON e.ID = ue.ID_Event    \
                                          INNER JOIN type_event te ON te.ID = e.Type  \
                                          INNER JOIN user u ON e.Organizator = u.ID   \
                  WHERE ue.ID_User = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET FAVORITE EVENT --------------*/
app.post("/favorite/event", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  const body = req.body;
  dbConnect
          .query("SELECT  e.ID                                                             , \
                          e.Title                                                          , \
                          CONCAT(SUBSTRING(e.Description, 1, 100), \"...\") AS Description , \
                          e.End_date                                                       , \
                          te.Name                                                          , \
                          te.Color                                                         , \
                          te.Logo                                                          , \
                          e.Image                                                            \
                  FROM favorite f INNER JOIN event e ON f.ID_Event = e.ID     \
                                  INNER JOIN type_event te ON e.Type = te.ID  \
                  WHERE ID_User = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET TYPE EVENT BY USER --------------*/
app.post("/type/event/user", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  const body = req.body;
  dbConnect
          .query("SELECT  t.Name                        , \
                          t.Color                       , \
                          t.Logo                        , \
                          COUNT(ue.ID_User) AS NbEvents   \
                  FROM type_event t LEFT JOIN event e ON t.ID = e.Type                                                  \
                                    LEFT JOIN users_in_event ue ON e.ID = ue.ID_Event AND ue.ID_User = " + body.id + "  \
                  GROUP BY t.Name \
                  ORDER BY NbEvents DESC", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET TYPE EVENT --------------*/
app.get("/type/event", jsonParser, function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM type_event", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- INSERT EVENT --------------*/
app.post('/event/insert', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect
          .query("INSERT INTO event (Title      , \
                                    Description , \
                                    Start_date  , \
                                    End_date    , \
                                    Type        , \
                                    Image       , \
                                    Link        , \
                                    X           , \
                                    Y           , \
                                    Z           , \
                                    Region      , \
                                    Feedback    , \
                                    Thread      , \
                                    Organizator , \
                                    Money       , \
                                    XP          ) \
                  VALUES (\"" + body.title       + "\" , \
                          \"" + body.description + "\" , \
                          \"" + body.Start_date  + "\" , \
                          \"" + body.End_date    + "\" , \
                            " + body.type        + "   , \
                          \"" + body.Image       + "\" , \
                          \"" + body.link        + "\" , \
                            " + body.x           + "   , \
                            " + body.y           + "   , \
                            " + body.z           + "   , \
                            " + body.region      + "   , \
                          \"" + body.feedback    + "\" , \
                            " + body.thread      + "   , \
                            " + body.user        + "   , \
                            " + body.money       + "   , \
                            " + body.XP          + ")", 
          
          function (err, result) {
              if (err){
                throw err;
              }
              console.log(result);     
          })
  res.json(body);
});

/*------------- GET Equip Accessories --------------*/
app.post("/equip/accessories", jsonParser, function (req, res) {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT a.* , r.Color, r.price \
                  FROM profil_picture pp                               \
                  INNER JOIN accessories a ON pp.ID_Animal = a.ID \
                  OR pp.ID_Chapeau = a.ID                         \
                  OR pp.ID_Lunettes = a.ID                         \
                  OR pp.ID_Cravate = a.ID                         \
                  INNER JOIN rarity_accessories r ON r.ID = a.Rarity \
                  WHERE pp.ID = " + body.id +
                  " ORDER BY a.Type", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Accessories --------------*/
app.get("/accessories", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT a.*, r.Color, r.price \
                  FROM accessories a \
                  INNER JOIN rarity_accessories r ON r.ID = a.Rarity \
                  ORDER BY a.Type", 
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Badges --------------*/
app.post("/badges", jsonParser, function (req, res) {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM badges b INNER JOIN badges_by_users bu ON bu.ID_Badge = b.ID WHERE bu.ID_User = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});