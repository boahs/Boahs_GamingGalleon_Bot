const sqlite3 = require('sqlite3').verbose();


const addNewTopScores = (playerName, Score, gameName) => {
    let db = new sqlite3.Database('mainDB.db', (err) => {
        if (err) {
          return console.error(err);
        }
      });
      
    return db.run(`INSERT INTO topScores (playerName, Score, gameName) VALUES (?,?,?)`, [playerName, Score, gameName])
};


module.exports = {
    addNewTopScores
  };