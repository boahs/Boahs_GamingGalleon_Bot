const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
console.log(result.bullshit);
console.log(result.bullShitter());
const results = require("./commands/random");

const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
  },
  channels: ["boahs", "gaminggalleontv", "the_gaming_galleon", "ex_mortis"],
};

const API_KEY = process.env.API_KEY;
//"gaminggalleontv" "the_gaming_galleon"
const client = new tmi.client(opts);
console.table(result.listBiohazard(API_KEY));

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  const testStuff = (data) => {
    console.log(data);
  };

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
  //console.log(`TEST RESULTS FOR SHA: ${results.randomVoyage()}`);

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
  } else if (commandName === "!voyage") {
    client.say(
      target,
      `Your random voyage MrDestructoid : ${results.randomVoyage()}`
    );
  } else if (commandName === "!DirtyDozen") {
    client.say(
      target,
      " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
    );
    console.log(userReturn);
  } else if (commandName === "!ggtv") {
    client.say(
      target,
      "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel! "
    );
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
  } else if (commandName === "!deals") {
    client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
    console.log(userReturn);
  } else if (commandName === "!sonic") {
    client.say(target, "Sonic & Knuckles leader: ssdNinja");
    // client.say(target, `Sonic leader: ${result.listSonic(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!light") {
    client.say(target, "Light Crusader leader: ex_mortis");
    // client.say(
    //   target,
    //   `Light Crusader leader: ${result.listLightCrusader(API_KEY)}`
    // );
    console.log(userReturn);
  } else if (commandName === "!maximum") {
    client.say(target, "Maximum carnage leader: gunst4r");
    // client.say(
    //   target,
    //   ` Maximum Carnage leader:  ${result.listMaximumCarnage(API_KEY)}`
    // );
    console.log(userReturn);
  } else if (commandName === "!mercs") {
    client.say(target, "Mercs Champions leader: ex_mortis");
    // client.say(target, ` Mercs leader: ${result.listMercs(API_KEY)} `);
    console.log(userReturn);
  } else if (commandName === "!eternal") {
    client.say(target, "Eternal Champions leader: Foedub");
    // client.say(
    //   target,
    //   ` Eternal Champions leader: ${result.listEternalChampions(API_KEY)} `
    // );
    console.log(userReturn);
  } else if (commandName === "!junglestrike") {
    client.say(target, " Jungle Strike leader : ssdNinja");
    // client.say(
    //   target,
    //   ` Jungle Strike leader: ${result.listJungleStrike(API_KEY)}`
    // );
    console.log(userReturn);
  } else if (commandName === "!shining") {
    client.say(target, "Shining Darkness Leader: ex_mortis");
    // client.say(
    //   target,
    //   ` Shining Darkness Leader : ${result.listShiningDarkness(API_KEY)}`
    // );
    console.log(userReturn);
  } else if (commandName === "!xmen") {
    client.say(target, "xmen leader: Foedub & Torrabelle ");
    // client.say(target, `Xmen leader: ${result.listXmen(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!biohazard") {
    client.say(target, "biohazard battle leader: Ex_Mortis");
    // client.say(
    //   target,
    //   ` BioHazard Battle leader: ${result.listBiohazard(API_KEY)}`
    // );
    console.log(userReturn);
  } else if (commandName === "!nhl") {
    client.say(target, "NHL leader: RichSoCash");
    // client.say(target, `NHL leader: ${result.listNHL(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!chakan") {
    client.say(target, "chakan leader: Foedub");
    // client.say(target, `Chakan leader: ${result.listChakan(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!crueball") {
    client.say(target, "crueball leader: TheMorningAfterKill");
    // client.say(target, `Crüe Ball leader: ${result.listCrueBall(API_KEY)}`);
    console.log(userReturn);
  } else if (commandName === "!youtube") {
    client.say(target, "https://www.youtube.com/c/TheGamingGalleon/videos");
  } else if (commandName === "!commands") {
    client.say(
      target,
      `https://pastebin.com/DVAuxeVN An updated list of commands can be found here`
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
