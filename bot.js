const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
const results = require("./commands/random");
const commandMaster = require("tmi.js/lib/commands");
const shoutOut = require("./commands/shoutout")
// const newScore = require("./commands/addHighScore");
// const fetchTop10 = require("./commands/fetchTop10")
// const topPlayer = require("./commands/topPlayer")
// const clearDB = require("./commands/clearDB")
const getRandomNumber = require("./commands/getRandomNumber")
const { slow } = require("tmi.js/lib/commands");
// const sqlite3 = require("sqlite3").verbose();
const randomGester = require("./commands/randomGester")
const path = require('path');
const util = require('util');
const axios = require('axios');
const {google} = require('googleapis');
const sheets = google.sheets('v4');
const dirtyDozenGGQUOTE = require('./commands/dirtyDozenCongratsRandom');
const { format } = require("path");





const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
    google: process.env.KEY
  },
  channels: ["boahs","the_gaming_galleon"],
  debug: false,
  slowmode: slow,
};
// channels: ["boahs", "gaminggalleontv", "the_gaming_galleon", "ex_mortis"],

// const db = new sqlite3.Database('mainDB.db', (err) =>{
//   if(err){
//     return console.error(err);
//   }
// })
//defines SQLite mainDB database 

//"gaminggalleontv" "the_gaming_galleon"
const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.connect();

// const bullShit = fetchTop10.fetchTop10();
// console.log(`Sha: ${JSON.stringify(bullShit)}`)

// const topPlayerString = topPlayer.topPlayer();
// console.log(`Boahs: ${JSON.stringify(topPlayerString)}`)


// console.log(shoutOut.shoutOut())
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const args = msg.slice(0).split(' ');
  const commandName = args.shift().toLowerCase();

  const testStuff = (data) => {
    console.log(data);
  };
  

  // gets username
  const username = context.username;

  //Returns username for command used
  const userReturn = `${username} Executed ${commandName} command`;

  //says message every 15 minutes
  const announce = () =>
    setInterval(() => {
      client.say(
        target,
        "View Dirty Dozen information => https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
      );
    }, 900000);
  //console.log(`TEST RESULTS FOR SHA: ${results.randomVoyage()}`);


  // score tracking is removed. it works but not needed until spreadsheet is updated with current top score cell.





const game1 = () => {


  async function game1main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `C4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `C9`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game1main().then((value) => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game2 = () => {


  async function game2main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game2main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game3 = () => {


  async function game3main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game3main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game4 = () => {


  async function game4main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game4main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game5 = () => {


  async function game5main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game5main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game6 = () => {


  async function game6main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game6main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game7 = () => {


  async function game7main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game7main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game8 = () => {


  async function game8main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game8main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game9 = () => {


  async function game9main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game9main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game10 = () => {


  async function game10main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game10main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game11 = () => {


  async function game11main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game11main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};

const game12 = () => {


  async function game12main () {

    const opts = {
        identity: {
          google: process.env.KEY
        }
      };

    const authClient = opts.identity.google
  
    const request = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B6`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore =  JSON.stringify(response2.values[0], null, 2);
      
    //   console.log(formatName)
      return `${JSON.parse(formatName.toUpperCase())} with a objective score of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game12main().then((value) => {
    client.say(target, `The Bane of Killbaba ! Presenting : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
// thanks hodeman couldn't of figured out the solution to resolving promise await returned without you - not to mention the in general help you spent time giving. Big ups to hodeman.




  switch(commandName){
    case "!commands":
      client.say(target, "!leaderboard , !{gamename} , !voyage , !deals")
      break;
      case "!pan":
      client.say(target, `${context.username} loves pancakes`) 
      break;
      case "!jungle":
        client.say(target,"The Bane of Killbaba! SSDNINJA took this title with a whomping score of 1,293,500 points on the snow fortress level!");
      break;
      case "!shining":
        client.say(target, "The Thornwood Magnate! EX_MORTIS a masterful merchant of war who accumulated 4,206,969 gold!");
      break;
      case "!xmen":
        client.say(target, "The Xaledictorians! FOEDUB and TORRABELLE took this prized title by completing 7 missions collectively! (Foedub: 4 missions solo, torrabelle 3 missions coop)");
      break;
      case "!crueball":
        client.say(target, "The Bangin' Baller RICHSOCASH managed to hit volume level 9 with a score of 37,402,500 points! Watch out!");
      break;
      case "!bio":
        client.say(target, "The Sword of Odysseus! SSDNINA took this battle to the next level with a total score of 295,150 points on normal mode!");
      break;
      case "!nhl":
        client.say(target, "The High-Stickin' Hoser! RICHSOCASH played a breath taking game of scoring almost shutting out the rangers entirely! With a score of 23 GOALS as Boston vs the Rangers!");
      break;
      case "!chakan":
        client.say(target, "The forever man... SSDNINJA managed to seal 4 portals! A score to remember forever... ");
      break;
      case "!carnage":
        client.say(target, "The city savior! SSDNINJA delievered maximum carnage with an impressive final score of 999,999 points and 91% FA!");
      break;
      case "!champions":
        client.say(target, "The Eternal Champion, FOEDUB! With 8 impressive consecutive wins the foedub took this prize home!")
      break;
      case "!sonic":
        client.say(target, "The Blast Processor, SSDNINJA! A deserved win with a completion time of 1:27 on mushroom Act 2 and a score of 38,1000!");
      break;
      case "!light":
        client.say(target, "The Green Row Guardian, SSDNINJA! A impressive health level of 200HP and 22 Gear set SsdNinja on a path of victory");
      break;
      case "!mercs":
        client.say(target, "The UniMERcial soldier! EX_MORTIS achieved a total score of 1,818,300 points on original mode!");
      break;
      case "!abc":
        game1()
      break;
      case "!zyx":
        game2()
      break;
    case "!dice":
    const num = rollDice();
      client.say(target, `${context.username} rolled a ${num}`)
      break;
    case "!voyage": 
      client.say(target, `${context.username} wants a random voyage! As promised, here you go : Your random voyage MrDestructoid : ${results.randomVoyage()}`);
      break;
    case "!dirtydozen":
      client.say(target, " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0");
      break;
    case "!echo":
      client.say(target, `@${context.username}, you said: "${args.join(' ')}"`)
      break;
    case "!ggtv": 
      client.say(target, "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel!");
      break;
    case "!leaderboard":
      client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0");
      break;
    case "!deals":
      client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
      break;
  }
  

}


// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}


