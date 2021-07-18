const sqlite3 = require('sqlite3').verbose();


  const clearDB = () => {
    const db = new sqlite3.Database('mainDB.db', (err) =>{
        if(err){
          return console.error(err);
        }
      })
    return db.run(`DELETE FROM "topScores"`);
  }
  //Clear DB command - Admin only!!!

  module.exports = {
    clearDB
  };