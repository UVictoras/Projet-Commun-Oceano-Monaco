const mysql = require('mysql');

const client = mysql.createConnection({   host: "localhost",   user: "root",   password: "root", database : "maw" });

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err) {
      if (err) {
        throw err;
      }
      
      console.log("Connecté à la base de données MySQL!");
    });
  },

  getDb: function () {
    return client;
  },
};