const sqlite3 = require('sqlite3').verbose();

const topPlayer = () => {
    const db = new sqlite3.Database('mainDB.db', (err) =>{
        if(err){
          return console.error(err);
        }
      })
      console.log(db.run(`SELECT playerName, Score FROM topScores ORDER BY Score DESC LIMIT 1 OFFSET 1 `))
    return db.run(`SELECT playerName, Score FROM topScores ORDER BY Score DESC LIMIT 1 OFFSET 1 `);
}

module.exports = {
    topPlayer
  };
  