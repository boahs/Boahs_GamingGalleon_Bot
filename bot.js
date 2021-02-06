const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
console.log(result.bullshit);
console.log(result.bullShitter());

const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
  },
  channels: ["boahs", "gaminggalleontv", "the_gaming_galleon"],
};

const API_KEY = process.env.API_KEY;
//"gaminggalleontv" "the_gaming_galleon"
const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // gets username
  const username = client.getUsername();

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

  //announce();

  // If the command is known, let's execute it
  if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(userReturn);
  } else if (commandName === "!pan") {
    client.say(target, `Pancakes`);
    console.log(userReturn);
  } else if (commandName === "!dirtydozen") {
    client.say(
      target,
      "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
    );
    console.log(userReturn);
  } else if (commandName === "!DirtyDozen") {
    client.say(
      target,
      " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
    );
    console.log(userReturn);
  } else if (commandName === "!leaderboard") {
    client.say(
      target,
      " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
    );
    console.log(userReturn);
  } else if (commandName === "!LeaderBoard") {
    client.say(
      target,
      "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
    );
    console.log(userReturn);
  } else if (commandName === "hi") {
    client.say(target, `Ahoy ! thegamJollyroger`);
    console.log(userReturn);
  } else if (commandName === "hi boahs") {
    client.say(target, `hi fgsHeartB `);
    console.log(userReturn);
  } else if (commandName === "@boahs <3") {
    client.say(target, " fgsHeartB ");
    console.log(userReturn);
  } else if (commandName === "thegamCapnRAZlol") {
    client.say(target, " thegamCapnRAZlol ");
    console.log(userReturn);
  } else if (commandName === "thegamCapnshock") {
    client.say(target, "thegamCapnshock");
    console.log(userReturn);
  } else if (commandName === "!sonic") {
    client.say(target, `Sonic leader: ${result.listSonic(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!light") {
    client.say(
      target,
      `Light Crusader leader: ${result.listLightCrusader(API_KEY)}`
    );
    console.log(userReturn);
  } else if (commandName === "!maximum") {
    client.say(
      target,
      ` Maximum Carnage leader:  ${result.listMaximumCarnage(API_KEY)}`
    );
    console.log(userReturn);
  } else if (commandName === "!mercs") {
    client.say(target, ` Mercs leader: ${result.listMercs(API_KEY)} `);
    console.log(userReturn);
  } else if (commandName === "!eternal") {
    client.say(
      target,
      ` Eternal Champions leader: ${result.listEternalChampions(API_KEY)} `
    );
    console.log(userReturn);
  } else if (commandName === "!junglestrike") {
    client.say(
      target,
      ` Jungle Strike leader: ${result.listJungleStrike(API_KEY)}`
    );
    console.log(userReturn);
  } else if (commandName === "!shining") {
    client.say(
      target,
      ` Shining Darkness Leader : ${result.listShiningDarkness(API_KEY)}`
    );
    console.log(userReturn);
  } else if (commandName === "!xmen") {
    client.say(target, `Xmen leader: ${result.listXmen(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!biohazard") {
    client.say(
      target,
      ` BioHazard Battle leader: ${result.listBiohazard(API_KEY)}`
    );
    console.log(userReturn);
  } else if (commandName === "!nhl") {
    client.say(target, `NHL leader: ${result.listNHL(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!chakan") {
    client.say(target, `Chakan leader: ${result.listChakan(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!crueball") {
    client.say(target, `Crüe Ball leader: ${result.listCrueBall(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "thegamRazTWiz") {
    client.say(target, " thegamRazTWiz ");
    console.log(userReturn);
  } else if (commandName === "OhMyDog") {
    client.say(target, "CorgiDerp");
    console.log(userReturn);
  } else if (commandName === "CoolCat") {
    client.say(target, "GlitchCat");
    console.log(userReturn);
  } else if (commandName === "!youtube") {
    client.say(target, "https://www.youtube.com/c/TheGamingGalleon/videos");
  } else if (commandName === "!commands") {
    client.say(
      target,
      `https://pastebin.com/CLAxPSUN An updated list of commands can be found here`
    );
    console.log(userReturn);
  } else {
    //extremely hacky way to track chat from cli
    console.log(`*: ${commandName}`);
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
