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






const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
    google: process.env.KEY
  },
  channels: ["boahs"],
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


const game1 = () => {


  async function main () {

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
  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
    // can use return JSON.parse(formatName); as well need to comment out .replace() below as json parse does this
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`
    );
  })
};

const game2 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Xaledictorians ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game3 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game4 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game5 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game6 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game7 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game8 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game9 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game10 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game11 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};

const game12 = () => {


  async function main () {

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
  
    // axios.get('sheets.spreadsheets.values')

  
    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;


      // TODO: Change code below to process the `response` object:
      const formatName =  JSON.stringify(response.values[0], null, 2);
    //   console.log(formatName)
      return formatName;
      
    } catch (err) {
      console.error(err);
    }
  
  }
  main().then(value => {
    client.say(target, `The Thornwood Magnate ! Presenting : ${value
      .replace('['," ")
      .replace(']'," ")
      .replace('"'," ")
      .replace('"'," ")
      .toUpperCase()
    }`);
  })
};
// thanks hodeman couldn't of figured out the solution to resolving promise await returned without you! :) 





  switch(commandName){
    case "!commands":
      client.say(target, "!leaderboard , !{gamename} , !voyage , !deals")
      break;
    case "!pan":
      client.say(target, `${context.username} loves pancakes`) 
      break;
      case "!abc":
      game1(); 
      break;
      case "!zyx":
        game2();
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


