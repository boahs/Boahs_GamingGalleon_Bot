const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
const results = require("./commands/random");
const commandMaster = require("tmi.js/lib/commands");
const shoutOut = require("./commands/shoutout")
const newScore = require("./commands/addHighScore");
const fetchTop10 = require("./commands/fetchTop10")
const topPlayer = require("./commands/topPlayer")
const clearDB = require("./commands/clearDB")
const { slow } = require("tmi.js/lib/commands");
const sqlite3 = require('sqlite3').verbose();



const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
  },
  channels: ["boahs"],
  debug: false,
  slowmode: slow,
};
// channels: ["boahs", "gaminggalleontv", "the_gaming_galleon", "ex_mortis"],

const db = new sqlite3.Database('mainDB.db', (err) =>{
  if(err){
    return console.error(err);
  }
})
//defines SQLite mainDB database 

const API_KEY = process.env.API_KEY;
//"gaminggalleontv" "the_gaming_galleon"
const client = new tmi.client(opts);
// console.table(result.listBiohazard(API_KEY));

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.connect();

const bullShit = fetchTop10.fetchTop10();
console.log(`Sha: ${JSON.stringify(bullShit)}`)

const topPlayerString = topPlayer.topPlayer();
console.log(`Boahs: ${JSON.stringify(topPlayerString)}`)


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


  switch(commandName){
    case "!commands":
      client.say(target, "https://pastebin.com/BFatN6qL An updated list of commands can be found here")
      break;
    case "!clear":
      clearDB.clearDB();
      break;
    case "!pan":
      client.say(target, `${context.username} loves pancakes`)
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
    case "!addscore": 
      args.length === 3 ? newScore.addNewTopScores(args[0], args[1],args[2]) : client.say(target, "Please enter the correct format");
      break;
    case "!top10":
     client.say(target, `The top 10 scores are ${fetchTop10.fetchTop10()}`)
      break;
    case "!top":
      client.say(target, `The top player is `)
      break;
    case "!deals":
      client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
      break;
    default: 
    commandName.startsWith("!") ? client.say(target, `${context.username} it doesn't look like you posted a command I can understand. Have you checked out the command list typing "!commands" ?`) : null;
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

// if (commandName === "!galleon") {
//   client.say(target, `, gaming`);
// }
// anon connection
// const client = new tmi.Client({
//   connection: { reconnect: true },
//   channels: ["boahs"],
// });

// client.connect();

// client.on("message", (channel, tags, message, self) => {
//   // "Alca: Hello, World!"
//   console.log(`${tags["display-name"]}: ${message} on ${channel}`);
// });
//anon connection
