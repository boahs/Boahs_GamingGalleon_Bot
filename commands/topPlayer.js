const sqlite3 = require('sqlite3').verbose();

const topPlayer = () => {
    const db = new sqlite3.Database('mainDB.db', (err) =>{
        if(err){
          return console.error(err);
        }
      })
    return db.run(`SELECT * FROM topScores ORDER BY Score DESC LIMIT 1 `);
}

module.exports = {
    topPlayer
  };
  