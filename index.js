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
          .query("SELECT * FROM User WHERE id = " + body.id, 
          
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
            .query("INSERT INTO User (last_name          , \
                                      first_name         , \
                                      pseudo             , \
                                      email              , \
                                      password           , \
                                      picture            , \
                                      x                  , \
                                      y                  , \
                                      z                  , \
                                      type               , \
                                      level              , \
                                      money              , \
                                      xp             , \
                                      streak_max         , \
                                      streak_in_progress , \
                                      banner             , \
                                      title              ) \
                    VALUES (\"" + body.last_name      + "\" , \
                            \"" + body.first_name     + "\" , \
                            \"" + body.pseudo         + "\" , \
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
            .query("UPDATE User SET last_name  = \"" + body.last_name      + "\" , \
                                    first_name = \"" + body.first_name     + "\" , \
                                    pseudo     = \"" + body.pseudo         + "\" , \
                                    email      = \"" + body.email          + "\" , \
                                    password   = \"" + sha1(body.password) + "\" , \
                                    picture    =   " + body.picture        + "   , \
                                    x          =   " + body.x              + "   , \
                                    y          =   " + body.y              + "   , \
                                    z          =   " + body.z              + "   , \
                                    banner     =   " + body.banner         + "   , \
                                    title      =   " + body.title          + "     \
                    WHERE id = " + body.id,
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
          .query("DELETE FROM User WHERE id = " + body.id,
          function (err, result) {
            if (err){
              throw err;
            }
            console.log(result);     
          })
  res.json(body);
});



/*------------- GET Banner --------------*/
app.get("/banner", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Banner" , 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Animal  --------------*/
app.get("/animal", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Animal ", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Accessories  --------------*/
app.get("/accessories", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Accessories", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET  rarety Accessories  --------------*/
app.get("/accessories", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT Rarity FROM Accessories", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Type Accessories  --------------*/
app.get("/accessories", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT Type FROM Accessories", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});


/*------------- GET Emote  --------------*/
app.get("/emote", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Emote ", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET  rarety Emote  --------------*/
app.get("/emote", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT Rarity FROM Emote", 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- GET Region  --------------*/
app.get("/region", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Region" , 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- UPDATE Region --------------*/
app.post('/user/update', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect
          .query("UPDATE User SET Rate  = \"" + body.Rate +  "\" \
                  WHERE id = " + body.id,
          function (err, result) {
            if (err){
              throw err;
            }
            console.log(result);     
          })
  res.json(body);
});


/*------------- GET Badges  --------------*/
app.get("/badges", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Badges" , 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});


/*------------- GET Event  --------------*/
app.get("/event", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT  e.ID                   , \
                          e.Title                , \
                          e.Description          , \
                          e.Start_date           , \
                          e.End_date             , \
                          e.Type                 , \
                          pp.Image AS Picture    , \
                          e.X                    , \
                          e.Y                    , \
                          e.Z                    , \
                          r.Region               , \
                          e.Feedback             , \
                          t.Thread               , \
                          u.Organizator          , \
                          u.Money                , \
                          u.XP                   , \
                  FROM event e INNER JOIN User u ON e.Organisator = u.ID               \
                          INNER JOIN User u ON e.Money = u.Money             \
                          INNER JOIN User u ON e.XP = u.XP               \
                          INNER JOIN profil_picture pp ON e.Picture = pp.ID  \
              WHERE u.ID = " + body.id, 
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});

/*------------- INSERT Event --------------*/
app.post('/event/insert', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect
          .query("INSERT INTO Event (title          ,\
                                     description    ,\
                                     start_date     ,\
                                     end_date       ,\
                                     type           ,\
                                     image          ,\
                                     x              ,\
                                     y              ,\
                                     z              ,\
                                     region         ,\
                                     feedback       ,\
                                     thread         ,\
                                     organizartor   ,\
                                     money          ,\
                                     xp             ,\
                  VALUES (\"" + body.title          + "\" , \
                          \"" + body.description    + "\" , \
                          \"" + body.start_date       + "\" , \
                          \"" + body.end_date       + "\" , \
                          \"" + body.type           + "\" , \
                          \"" + body.image          + "\" , \
                            " + body.x              + "   , \
                            " + body.y              + "   , \
                            " + body.z              + "   , \
                            1                       , \
                            0                       , \
                          \"" + body.thread         + "\" , \
                          0                       , \
                          0                       , \
                          0                       , \)",   
          function (err, result) {
              if (err){
              throw err;
              }
              console.log(result);     
          })
  res.json(body);
});

// /*------------- UPDATE Personal Data Event --------------*/
// app.post('/event/update/personal_data', jsonParser, (req, res) => {
//   const dbConnect = dbo.getDb();
//   const body = req.body;
//   console.log('Got body:', body);
//   dbConnect
//           .query("UPDATE User SET title       = \""         + body.title          + "\" , \
//                                   description = \""     + body.description    + "\" , \
//                                   start_date  = \""     + body.start_date     + "\" , \
//                                   end_date    = \""     + body.end_date       + "\" , \
//                                   type        = \""     + body.type           + "\" , \
//                                   image       =   "     + body.image          + "   , \
//                                   x           =   "     + body.x              + "   , \
//                                   y           =   "     + body.y              + "   , \
//                                   z           =   "     + body.z              + "   , \
//                                   region      =   "     + body.region         + "   , \
//                                   title       =   "     + body.title          + "     \
//                   WHERE id = " + body.id,
//           function (err, result) {
//             if (err){
//               throw err;
//             }
//             console.log(result);     
//           })
//   res.json(body);
// });

/*------------- DELETE Event --------------*/
app.delete('/event/delete', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect
          .query("DELETE FROM Event WHERE id = " + body.id,
          function (err, result) {
            if (err){
              throw err;
            }
            console.log(result);     
          })
  res.json(body);
});


/*------------- GET thread  --------------*/
app.get("/thread", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM thread WHERE id = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});


/*------------- GET message  --------------*/
app.get("/messaage", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM message WHERE id = " + body.id, 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});


/*------------- GET level  --------------*/
app.get("/level", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
          .query("SELECT * FROM Level" , 
          
          function (err, result) {
            if (err){
              throw err;
            }
            res.json(result);
            console.log(result);     
          })
});


