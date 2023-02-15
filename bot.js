const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
const results = require("./commands/random");
const commandMaster = require("tmi.js/lib/commands");
const shoutOut = require("./commands/shoutout")
const sqlite3 = require('sqlite3').verbose();
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

//TWITCH_CLIENT_ID
//TWITCH_CLIENT_SECRET


//twitch pubsub socket



const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
    google: process.env.KEY,
    twitch: process.env.TWITCH_CLIENT_SECRET
  },
  channels: ["boahs", "the_gaming_galleon", "gaminggalleontv", "wakeandplay", "themorningafterkill"],
  debug: false,
  slowmode: slow,
  reconnect: true
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
client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);
});

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


const twitchApiCall = () => {

  
}

//done 2023
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
      range: `B4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `B5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has a highest final score of ${JSON.parse(formatScore)} on on Ski Ridge, Hokkaido.`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game1main().then((value) => {
    client.say(target, `Double D7 : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2023
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
      range: `C4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `C5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has the most secrets found with a total of:  ${JSON.parse(formatScore)}`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game2main().then((value) => {
    client.say(target, `The Vae Victor : ${value
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
      range: `D4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `D5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has the longest time on Surival mode with a time of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game3main().then((value) => {
    client.say(target, `The Sky Scrapper : ${value
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
      range: `E4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `E5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has reached a racing circuit of ${JSON.parse(formatScore)}`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game4main().then((value) => {
    client.say(target, `The Rocky Mountain Rotted Rasher : ${value
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
      range: `F4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `F5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} with a completion percentage of ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game5main().then((value) => {
    client.say(target, `The Purple Paragon  ! : ${value
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
      range: `G4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `G5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has ${JSON.parse(formatScore)} guardians so far! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game6main().then((value) => {
    client.say(target, `The Guardian Legend : ${value
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
      range: `H4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `H5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has acquired ${JSON.parse(formatScore)} chip `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game7main().then((value) => {
    client.say(target, `The Tycoon of Terror : ${value
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
      range: `I4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `I5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has a fastest completion time of ${JSON.parse(formatScore)} on Time Attack on normal difficulty! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game8main().then((value) => {
    client.say(target, `The Lead Tekkenican : ${value
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
      range: `J4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `J5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has the most consecutive DM victories with a total of ${JSON.parse(formatScore)} !`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game9main().then((value) => {
    client.say(target, `The Twisted Mister: ${value
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
      range: `K4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `K5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has made the furthest west by reaching ${JSON.parse(formatScore)} ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game10main().then((value) => {
    client.say(target, `The Cannonball Roller: ${value
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
      range: `L4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `L5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} has a current time of ${JSON.parse(formatScore)} in the twilight open series! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game11main().then((value) => {
    client.say(target, `The Night Rider : ${value
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
      range: `M4`, 
      valueRenderOption: 'FORMATTED_VALUE', 
      dateTimeRenderOption: 'SERIAL_NUMBER',  
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: '1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM',
      range: `M5`, 
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
      return `${JSON.parse(formatName.toUpperCase())} with  ${JSON.parse(formatScore)} damage dealt in ONE HIT! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game12main().then((value) => {
    client.say(target, `The Last Saiyan : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
// thanks hodeman couldn't of figured out the solution to resolving promise await returned without you - not to mention the in general help you spent time giving. Big ups to hodeman.

//checks if a specific message was sent in chat
const checkCharityMessage = () =>{
    const msg = ["test"];
    const filteredResult = msg.filter(word => msg.includes('Charity'))
}
 


  switch(commandName){
      //DD season 2021
      case "!jungle":
        client.say(target,"The Bane of Killbaba! SSDNINJA took this title with a whomping score of 1,293,500 points on the snow fortress level!");
      break;
      case "!shining":
        client.say(target, "The Thornwood Magnate! EX_MORTIS a masterful merchant of war who accumulated 4,206,969 gold!");
      break;
      case "!mark":
        client.say(target, "6503 score on 11/3/22 - Intellivision Happy Trails https://i.imgur.com/e5BCkrH.png, Four of a kind (9) score texas hold'em 11/9/22 - PS4 Red Dead Redemption 2 https://i.imgur.com/gqTknqy.png ")
        break;
      case "!xmen":
        client.say(target, "The Xaledictorians! FOEDUB and TORRABELLE took this prized title by completing 7 missions collectively! (Foedub: 4 missions solo, torrabelle 3 missions coop)");
      break;
      case "!crueball":
        client.say(target, "The Bangin' Baller Richsocash managed to hit volume level 9 with a score of 37,402,500 points! Watch out!");
      break;
      case "!bio":
        client.say(target, "The Sword of Odysseus! SSDNINJA took this battle to the next level with a total score of 295,150 points on normal mode!");
      break;
      case "!nhl":
        client.say(target, "The High-Stickin' Hoser! Richsocash played a breath taking game! Almost shutting out the rangers entirely! With a score of 23 GOALS as Boston vs the Rangers!");
      break;
      case "!chakan":
        client.say(target, "The forever man... SSDNINJA managed to seal 4 portals! A score to remember forever... ");
      break;
      case "!carnage":
        client.say(target, "The city savior! SSDNINJA delievered maximum carnage with an impressive final score of 999,999 points and 91% FA!");
      break;
      case "!champions":
        client.say(target, "The Eternal Champion, FOEDUB! With 8 impressive consecutive wins, FOEDUB took this prize home!")
      break;
      case "!sonic":
        client.say(target, "The Blast Processor, SSDNINJA! A deserved win with a completion time of 1:27 on mushroom Act 2 and a score of 38,1000!");
      break;
      case "!light":
        client.say(target, "The Green Row Guardian, SSDNINJA! A impressive health level of 200HP and 22 Gear set SsdNinja on a path of victory");
      break;
      case "!mercs":
        client.say(target, "The UniMERcial  soldier! EX_MORTIS achieved a total score of 1,818,300 points on original mode!");
        //DD season 2022
      case "!wario":
          client.say(target,`The World Warrioer! Worlds_of_Rogue took this title with a deceived his way to victory with a time of 1:54 in "Out of the Woods!" map!`);
      break;
      case "!pinball":
        client.say(target, "The Head Shot Skiller! Foedub had a final score on Cemetery of 312,371,000 points! Ho-ho-holy shit!");
      break;
      case "!roadrash":
        client.say(target, "Foedub the Rocky Mountain Rotted Rashertook no prisoners when they reached the score of $10,900 on level 2.")
      break;
      case "!spyro":
        client.say(target, "The Purple Paragon - A tie between Milten and Worlds_Of_Rogue - They share the purple crown both having a 100% completion percentage.");
        break;
      case "!yugioh":
        client.say(target, "The Ruling Duelist Ex-Mortis earned a duelist level of 255");
      break;
      case "!mariotennis":
        client.say(target, "The Grand Slammin' Grand Stander! Foedub the merciless takes another win home by having 23 score!");
      break;
      case "!dejavu":
        client.say(target, `World_of_Rogue - The Ace of Sam Spades snoops his way to victory while having $4,702 dollars to spend at his leisure!`);
      break;
      case "!tmnt":
        client.say(target, "Splinter's Successor AKA : FoeDub ... again?! You might know him by three other titles or four...or five! He takes another! with 2,618,600 20/20 crystals...woah!");
      break;
      case "!grinch":
        client.say(target, "Whoville's Nightmare also known as Worlds_of_Rogue not only stole Christmas but also scored a high score of 190,200 points.");
      break;
      case "!dbz":
        client.say(target, "FoeDub - The Last Saiyan saves the planet by having 5238 damage done in ONE hit whilst playing Vegeta!")
      break;
      case "!thps":
        client.say(target, "FoeDub! The Suburbian Scourge; skates his way through the Suburia and manages to achieve a score of 1,318,2623!");
      break;
      case "!tekken":
        client.say(target, `TheMorningAfterKill also known as The Lead Tekkenican holds his title with the fastest competion time of time attack with 3'49"21!`);
      break;
      case "!007": //today : Change string for each function to represent actual dirty dozen designiation(title)
        game1()
      break;
      case "!blood":
        game2()
      break;
      case "!spiderman":
        game3()
      break;
      case "!xfiles":
        game4()
      break;
      case "!specops":
        game5()
      break;
      case "!final":
        game6()
      break;
      case "!echo":
        game7()
      break;
      case "!medievil":
        game8()
      break;
      case "!tm4":
        game9()
      break;
      case "!bigrace":
        game10()
      break;
      case "!needspeed":
        game11()
      break;
      case "!jampack":
        game12()
      break;
      case "!commands":
        client.say(target, "My commands can be viewed by selecting the dropdown option here => https://boahsbot.netlify.app/ Note: They are not case sensitive")
        break;
      case "!huzzah":
        client.say(target, `HUZZAH TO ${context.username}! HUZZAH!`)
        break;
      case "!gun":
        client.say(target, "L & SHIFT + T to fix the gun");
        break;
      case "!jupiter":
        client.say(target, `"ok I finally fucking delved into the whole nasa rape movie" -JupiterOil [Jul 17 2022 06:02:57 PM] `);
        break;
      case "!slowrunning":
        client.say(target, "https://clips.twitch.tv/BovineSingleStorkSeemsGood-ZzuSUrQdWcSBqqjO")
        break;
      case "!reveal":
        client.say(target, `${context.username} - The final sunday of this month the 29th at 7PM EST will be the dirty dozen reveal!`)
        break;
        case "!pan":
        client.say(target, `${context.username} loves pancakes`) 
        break;
      case "!nelly":
        client.say(target, `Batter up ${context.username}`)
      break;
      case "!voyage": 
        client.say(target, `${context.username} wants a random voyage! As promised, here you go : Your random voyage MrDestructoid : ${results.randomVoyage()}`);
        break;
      case "!dirtydozen":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=1670222973");
        break;
      case "!dd":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=1670222973");
        break;
      case "!dozen":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=1670222973");
        break;
      case "!dirty":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=1670222973");
        break;
      case "!echo":
        client.say(target, `@${context.username}, you said: "${args.join(' ')}"`)
        break;
      case "!ggtv": 
        client.say(target, "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel!");
        break;
      case "!deals":
        client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
        break;
      case "!tooth":
        client.say(target, "One of my molar teeth has a crack going up one side. :) Not using mic until it's repaired hopefully this week. Thanks for using my command.");
        break;
  }
  

}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`*Greetings, Boahs! Boahs Bot is Connected to ${addr}:${port}`);
}


