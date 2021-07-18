const sqlite3 = require('sqlite3').verbose();

const fetchTop10 = () => {
    let db = new sqlite3.Database('mainDB.db', (err) => {
        if (err) {
          return console.error(err);
        }
        db.each(`SELECT * FROM topScores ORDER BY Score DESC LIMIT 10`) , 
        (error, row) => {
    //   let payloadSend = JSON.stringify({name: row.playerName, score: row.Score, game: row.gameName});
    //   console.log(`HEY HEY HEY : ${payloadSend}`);
     console.log(`${row.playerName} is a top player`)
 }
}
    )};

      



module.exports = {
    fetchTop10
  };