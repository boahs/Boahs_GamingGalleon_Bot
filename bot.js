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
    twitch: process.env.TWITCH_CLIENT_SECRET,
    youtube: process.env.YOUTUBE_API_KEY_V3
  },
  channels: ["boahs", "The_Gaming_Galleon"],
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



//   async function handleTTSCommand(message) {
//   if (message.startsWith('!tts')) {
//     const voice = message.split(' ')[1];
//     const text = message.substring(message.indexOf(' ') + 1 + voice.length + 1);

//     try {
//       const response = await axios.post(
//         'https://api.11labs.ai/v1/tts',
//         {
//           text,
//           voice,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: process.env.LABS_API_KEY,
//           },
//           responseType: 'stream',
//         }
//       );

//       response.data.pipe(process.stdout);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }
// }

// // Call the async function somewhere in your code
// handleTTSCommand('!tts Some voice Text to convert to speech');


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


const youtubeApi =() => {
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(opts.YOUTUBE_API_KEY_V3);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "channelId": "UCDIQWHSMuF28CIJsvRFi84g",
      "channelType": "any",
      "eventType": "none",
      "order": "date"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
}


function getCurrentTimeString() {
  return new Date().toTimeString().split(' ')[0];
}

//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has a highest score of ${JSON.parse(formatScore)} on Psycho Pinball!`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game1main().then((value) => {
    client.say(target, `Inlane of The Membrane : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} had a final score of ${JSON.parse(formatScore)} on Green Track`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game2main().then((value) => {
    client.say(target, `The Psycle Killer : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has earned the most Earnest totaling ${JSON.parse(formatScore)} on hardest diff! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game3main().then((value) => {
    client.say(target, `Karnov's Kumite Conqueror : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has the highest single appraisal with a value of ${JSON.parse(formatScore)}`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game4main().then((value) => {
    client.say(target, `The Smistonian : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has a total of ${JSON.parse(formatScore)} stars on dizzy ! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game5main().then((value) => {
    client.say(target, `Patron Bloke of The Yolk Folk : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has a score of ${JSON.parse(formatScore)} on Solaris! Wow!! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game6main().then((value) => {
    client.say(target, `Salvator Solaris : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has ${JSON.parse(formatScore)} diamonds collected!`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game7main().then((value) => {
    client.say(target, `The Cullinan Man: ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has a score of ${JSON.parse(formatScore)} in 🔥The Ignition Factor!🔥`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game8main().then((value) => {
    client.say(target, `The Towering Inferno: ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} unlocked ${JSON.parse(formatScore)} secret characters in Worms Blast!`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game9main().then((value) => {
    client.say(target, `The Imperial Invertebrate: ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024

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
      return `${JSON.parse(formatName.toUpperCase())} has a score of ${JSON.parse(formatScore)} on Crash 'n' the boys street challenge! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game10main().then((value) => {
    client.say(target, `The Springhill Smasher: ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} had ${JSON.parse(formatScore)} ammo in earthworm jim! `;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game11main().then((value) => {
    client.say(target, `The Cestodan Hoarder : ${value
    }`
    );
  })
  .catch((err) =>{
    console.log(err)
  })

};
//done 2024
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
      return `${JSON.parse(formatName.toUpperCase())} has a score of  ${JSON.parse(formatScore)} on cybattler!`;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  }
  game12main().then((value) => {
    client.say(target, `CyBattass : ${value
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


//song request shit

//const { getNumberByUsername } = require('./database/twitchUsersSongRequests');

//const requestedUsername = "andreikirilenko47";
//const number = getNumberByUsername(requestedUsername);
 

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
      case "!potd":
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
      //DD season 2023
      case "!007": //today : Change string for each function to represent actual dirty dozen designiation(title)
        (target, `Conqueror__Worm became the Double D7 by having a high score of 116,400 on Ski Ridge, Hokkaido!`)
      break;
      case "!blood":
        client.say(target, `The Vae Victor - Count Pupper took this score by finding 85 secrets in Nosgoth...`)
      break;
      case "!spiderman":
        client.say(target,`GhostsDon'tWalk AKA: The Sky Scrapper managed to have a time of 1 hour 40 minutes and 34 seconds fighting on survival mode on the Building Top!`);
      break;
      case "!xfiles":
        client.say(target,`Worlds_of_Rogue also known as The Rational Enquirer had a page count of 17 during their cryptic investigations!`)
      break;
      case "!specops":
        client.say(target,`GhostDon'tWalk and Conqueror Worm also known as The Twin Towers barreled their way through mission 1 : Sicily on hard with a final score of 16,642 and 16,616!`)
      break;
      case "!ff8":
        client.say(target,`Bowtai1 managed to obtain 10 guardians and now forever holds the divine title: The Guardian Legend !`)
      break;
      case "!echo":
        client.say(target,`World_of_Rogue - A multi title holder now adds another to his collect! The Tycoon of Terror with 4401 chips aquired.`)
      break;
      case "!medievil":
        client.say(target,`StarmanJSP squaring off with the Iron Slugger had 200HP left when knocking his block off earning him the title The Square Mile Socker!`)
      break;
      case "!tm4":
        client.say(target,`Our good friend TheMorningAfterKill also known as The Twisted Mister managed to aquire 44 death consecutive deathmatch victories!`)
      break;
      case "!bigrace":
        client.say(target,`RichsoCash also known as The Cannonball Roller rolling his way to Seattle with a score of 142,879,950!`)
      break;
      case "!needforspeed":
        client.say(target,`RichsoCash had a best time on the final track of 3'36"62 and landed a new title : The Night Rider`)
      break;
      case "!jampack":
        client.say(target,`RichSoCash AKA: The Underground Astounder topping the triathlon with a score of 291!`)
      break;
      //DD season 2024 - reminder for 2025, check comments for client say current timestring for early dozen commands. also add in function names game1() etc game2()
     case "!psychopinball": //today : Change string for each function to represent actual dirty dozen designiation(title)
     client.say(target, `StarmanJSP otherwise known as 'The Flipped Freak' retained a psycho score of 67,728,600 on the Wild West table`);
     break;
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     case "!psychomotor":
      client.say(target, `StarmanJSP AKA: The Psycle Killer! had a final high score on green track of 717,260! `);
      break;
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!fightershistory":
      client.say(target, `Karnov's Kumite Conqueror AKA: StarmanJSP adds another gold trophy to his collection for scoring the most points on hardest for Fighters History - He scored 950,700 playing Ray! `);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!stones":
      client.say(target, `Ex-Mortis winning his title The Smistonian in an epic tie breaker with a final single appraisal score of 100,000,000! `);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!dizzy":
      client.say(target, `Worlds_of_Rogue! Forever known now as Patron Bloke of The Yolk Folk! Clearing 0 number of stars.`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!solaris":
      client.say(target, `The Salvator Solaris! A title known across the stars - Our hero Conqueror Worm had a final high score of 147,620! Congrats!`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!hunter":
      client.say(target, `The Cullinan Man or if you're his friend you may known them as Worlds_of_Rogue - A brilliant display of aptitude for finding diamonds! He found a total of 160 with 8 lives remaining.`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!ignition":
      client.say(target, `StarmanJSP collects another gold trophy taking the title The Towering Inferno! With a highest final score of 4,441`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!worms":
      client.say(target, `CordCutter - The Imperial Invertebrate - unlocked 3 secret characters in worms blast! Cordy adds a notch to his dozen belt!`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!streetchallenge":
      client.say(target, `Bringing in their first gold trophy! Springhill State Champion is a new title Jefferson earned! Having a lowest sum of some crazy cool algorithm captain raz came up with that totaled to 14/6/49 69!`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!earthwormjim":
      client.say(target, `The cestodan Hoarder...StarmanJSP worms his way into another title by collecting 5,000 AMMO on Earnworm Jim! YEEHAW!`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
     case "!cybattler":
      client.say(target, `Conqueror Worm also known as CyBattass ends his high score with a total of 532,670! Well done, soldier.`);
       //client.say(target, `${getCurrentTimeString()}:Check back on this command when the destination goal and scores are printed on the document`)
     break;
      case "!commands":
        client.say(target, "My commands can be viewed by selecting the dropdown option here => https://dirtydozengames.com/ Note: They are not case sensitive")
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
      case "!pan":
        client.say(target, `${context.username} loves pancakes`) 
        break;
      case "!voyage": 
        client.say(target, `${context.username} wants a random voyage! As promised, here you go : Your random voyage MrDestructoid : ${results.randomVoyage()}`);
        break;
      case "!dirtydozen":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM");
        break;
      case "!dd":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM");
        break;
      case "!dozen":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM");
        break;
      case "!dirty":
        client.say(target, "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM");
        break;
      case "!ggtv": 
        client.say(target, "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel!");
        break;
      case "!deals":
        client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
        break;
      case "!sr": 
      client.say(target, `${number}`)
      break;
      // case "!admin":
      //   adminTest();
      //   break
      case "!rip":
       client.say(target, "Juicy 53 necro - https://i.imgur.com/5JmrlcH.jpg I died by having the new widget window for emotes in game open taking over my screen. I began to panic as this was on my screen and couldn't get it off in time before dying. That's the way she goes. But I've since then rebinded this shit to my page up key. So hopefully it never happens again : ^ )")
      break;
      case "Fish Taco":
        client.say(target, "Casablanca, Morocco")
       break;
      }
  

}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`*Greetings, Boahs! Boahs Bot is Connected to ${addr}:${port}`);
}


