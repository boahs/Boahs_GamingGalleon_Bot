///////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS & REQUIRES
///////////////////////////////////////////////////////////////////////////////////////////
const tmi = require("tmi.js");
require("dotenv").config();
const result = require("./index");
const results = require("./commands/random");
const commandMaster = require("tmi.js/lib/commands");
const shoutOut = require("./commands/shoutout");
const sqlite3 = require('sqlite3').verbose();
// const newScore = require("./commands/addHighScore");
// const fetchTop10 = require("./commands/fetchTop10");
// const topPlayer = require("./commands/topPlayer");
// const clearDB = require("./commands/clearDB");
const getRandomNumber = require("./commands/getRandomNumber");
const { slow } = require("tmi.js/lib/commands");
// const sqlite3 = require("sqlite3").verbose();
const randomGester = require("./commands/randomGester");
const path = require('path');
const util = require('util');
const axios = require('axios');
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const dirtyDozenGGQUOTE = require('./commands/dirtyDozenCongratsRandom');
const { format } = require("path");

///////////////////////////////////////////////////////////////////////////////////////////
// 1) Define the Dirty Dozen commands array as the single source for 2021–2024
//    (Add more for 2025+ as needed.)
///////////////////////////////////////////////////////////////////////////////////////////
const ddCommands = [
  // ─────────────────────────────────────────
  // DIRTY DOZEN 2021
  // ─────────────────────────────────────────
  {
    command: "!jungle",
    ddSeason: "2021",
    message: "The Bane of Killbaba! SSDNINJA took this title with a whomping score of 1,293,500 points on the snow fortress level!",
  },
  {
    command: "!shining",
    ddSeason: "2021",
    message: "The Thornwood Magnate! EX_MORTIS a masterful merchant of war who accumulated 4,206,969 gold!",
  },
  {
    command: "!xmen",
    ddSeason: "2021",
    message: "The Xaledictorians! FOEDUB and TORRABELLE took this prized title by completing 7 missions collectively! (Foedub: 4 missions solo, torrabelle 3 missions coop)",
  },
  {
    command: "!crueball",
    ddSeason: "2021",
    message: "The Bangin' Baller Richsocash managed to hit volume level 9 with a score of 37,402,500 points! Watch out!",
  },
  {
    command: "!bio",
    ddSeason: "2021",
    message: "The Sword of Odysseus! SSDNINJA took this battle to the next level with a total score of 295,150 points on normal mode!",
  },
  {
    command: "!nhl",
    ddSeason: "2021",
    message: "The High-Stickin' Hoser! Richsocash played a breath taking game! Almost shutting out the rangers entirely with 23 GOALS as Boston!",
  },
  {
    command: "!chakan",
    ddSeason: "2021",
    message: "The forever man... SSDNINJA managed to seal 4 portals! A score to remember forever...",
  },
  {
    command: "!carnage",
    ddSeason: "2021",
    message: "The city savior! SSDNINJA delivered maximum carnage with an impressive final score of 999,999 points and 91% FA!",
  },
  {
    command: "!champions",
    ddSeason: "2021",
    message: "The Eternal Champion, FOEDUB! With 8 impressive consecutive wins, FOEDUB took this prize home!",
  },
  {
    command: "!sonic",
    ddSeason: "2021",
    message: "The Blast Processor, SSDNINJA! A deserved win with a completion time of 1:27 on Mushroom Act 2 and a score of 38,1000!",
  },
  {
    command: "!light",
    ddSeason: "2021",
    message: "The Green Row Guardian, SSDNINJA! An impressive 200HP and 22 Gear set him on a path of victory!",
  },
  {
    command: "!mercs",
    ddSeason: "2021",
    message: "The UniMERcial soldier! EX_MORTIS achieved a total score of 1,818,300 points on original mode!",
  },

  // ─────────────────────────────────────────
  // DIRTY DOZEN 2022
  // ─────────────────────────────────────────
  {
    command: "!wario",
    ddSeason: "2022",
    message: "The World Warrioer! Worlds_of_Rogue took this title, deceiving his way to victory with a time of 1:54 in 'Out of the Woods!'",
  },
  {
    command: "!potd",
    ddSeason: "2022",
    message: "The Head Shot Skiller! Foedub had a final score on Cemetery of 312,371,000 points! Ho-ho-holy shit!",
  },
  {
    command: "!roadrash",
    ddSeason: "2022",
    message: "Foedub the Rocky Mountain Rotted Rashed took no prisoners, hitting $10,900 on Level 2!",
  },
  {
    command: "!spyro",
    ddSeason: "2022",
    message: "The Purple Paragon - A tie between Milten and Worlds_Of_Rogue, both hitting 100% completion.",
  },
  {
    command: "!yugioh",
    ddSeason: "2022",
    message: "The Ruling Duelist Ex-Mortis earned a duelist level of 255!",
  },
  {
    command: "!mariotennis",
    ddSeason: "2022",
    message: "The Grand Slammin' Grand Stander! Foedub the merciless scores 23!",
  },
  {
    command: "!dejavu",
    ddSeason: "2022",
    message: "World_of_Rogue - The Ace of Sam Spades snoops his way to victory with $4,702 to spend!",
  },
  {
    command: "!tmnt",
    ddSeason: "2022",
    message: "Splinter's Successor (FoeDub) took another title with 2,618,600 20/20 crystals...woah!",
  },
  {
    command: "!grinch",
    ddSeason: "2022",
    message: "Whoville's Nightmare, Worlds_of_Rogue, not only stole Christmas but also scored 190,200 points.",
  },
  {
    command: "!dbz",
    ddSeason: "2022",
    message: "FoeDub - The Last Saiyan - delivered 5238 damage in ONE hit with Vegeta!",
  },
  {
    command: "!thps",
    ddSeason: "2022",
    message: "FoeDub! The Suburbian Scourge soared through Suburbia with a score of 1,318,2623!",
  },
  {
    command: "!tekken",
    ddSeason: "2022",
    message: "TheMorningAfterKill, The Lead Tekkenican, set a fastest Time Attack of 3'49\"21!",
  },

  // ─────────────────────────────────────────
  // DIRTY DOZEN 2023
  // ─────────────────────────────────────────
  {
    command: "!007",
    ddSeason: "2023",
    message: "Conqueror__Worm became the Double D7 with a high score of 116,400 on Ski Ridge, Hokkaido!",
  },
  {
    command: "!blood",
    ddSeason: "2023",
    message: "The Vae Victor - Count Pupper - found 85 secrets in Nosgoth!",
  },
  {
    command: "!spiderman",
    ddSeason: "2023",
    message: "GhostsDon'tWalk (The Skyscraper) survived 1h40m34s in Survival at the Building Top!",
  },
  {
    command: "!xfiles",
    ddSeason: "2023",
    message: "Worlds_of_Rogue (The Rational Enquirer) discovered 17 crucial pages in his cryptic investigations!",
  },
  {
    command: "!specops",
    ddSeason: "2023",
    message: "GhostDon'tWalk & Conqueror Worm (The Twin Towers) finished Mission 1: Sicily on Hard with 16,642 and 16,616!",
  },
  {
    command: "!ff8",
    ddSeason: "2023",
    message: "Bowtai1 managed to obtain 10 guardians and now forever holds the divine title: The Guardian Legend !",
  },
  {
    command: "!echo",
    ddSeason: "2023",
    message: "World_of_Rogue - The Tycoon of Terror - ended with 4401 poker chips acquired!",
  },
  {
    command: "!medievil",
    ddSeason: "2023",
    message: "StarmanJSP bested the Iron Slugger with 200HP left, crowning him The Square Mile Socker!",
  },
  {
    command: "!tm4",
    ddSeason: "2023",
    message: "TheMorningAfterKill (The Twisted Mister) racked up 44 consecutive Deathmatch victories!",
  },
  {
    command: "!bigrace",
    ddSeason: "2023",
    message: "RichsoCash (The Cannonball Roller) tore through Seattle with 142,879,950 points!",
  },
  {
    command: "!needforspeed",
    ddSeason: "2023",
    message: "RichsoCash had a best final-track time of 3'36\"62, earning the title The Night Rider!",
  },
  {
    command: "!jampack",
    ddSeason: "2023",
    message: "RichSoCash, The Underground Astounder, topped the triathlon with a score of 291!",
  },

  // ─────────────────────────────────────────
  // DIRTY DOZEN 2024
  // ─────────────────────────────────────────
  {
    command: "!psychopinball",
    ddSeason: "2024",
    message: "StarmanJSP ('The Flipped Freak') scored 67,728,600 on the Wild West table!",
  },
  {
    command: "!psychomotor",
    ddSeason: "2024",
    message: "StarmanJSP (The Psycle Killer) had a final high score of 717,260 on the green track!",
  },
  {
    command: "!fightershistory",
    ddSeason: "2024",
    message: "Karnov's Kumite Conqueror AKA: StarmanJSP adds another gold trophy to his collection with 950,700 points on hardest, using Ray!",
  },
  {
    command: "!stones",
    ddSeason: "2024",
    message: "Ex-Mortis took the title The Smistonian in a tie breaker with a single appraisal of 100,000,000!",
  },
  {
    command: "!dizzy",
    ddSeason: "2024",
    message: "Worlds_of_Rogue is now Patron Bloke of The Yolk Folk, clearing 0 stars!",
  },
  {
    command: "!solaris",
    ddSeason: "2024",
    message: "The Salvator Solaris! Conqueror Worm ended with a high score of 147,620! Congrats!",
  },
  {
    command: "!hunter",
    ddSeason: "2024",
    message: "The Cullinan Man (Worlds_of_Rogue) found 160 diamonds with 8 lives remaining!",
  },
  {
    command: "!ignition",
    ddSeason: "2024",
    message: "StarmanJSP is The Towering Inferno with a highest final score of 4,441!",
  },
  {
    command: "!worms",
    ddSeason: "2024",
    message: "CordCutter (The Imperial Invertebrate) unlocked 3 secret characters in Worms Blast!",
  },
  {
    command: "!streetchallenge",
    ddSeason: "2024",
    message: "New champion Jefferson (Springhill State Champion) with a final triathlon sum of 14/6/49 69!",
  },
  {
    command: "!earthwormjim",
    ddSeason: "2024",
    message: "The Cestodan Hoarder... StarmanJSP got 5,000 ammo in Earthworm Jim! YEEHAW!",
  },
  {
    command: "!cybattler",
    ddSeason: "2024",
    message: "Conqueror Worm (CyBattass) ended with a total of 532,670! Well done, soldier.",
  },
];

///////////////////////////////////////////////////////////////////////////////////////////
// 2) Helper function to get the message for a typed Dirty Dozen command
///////////////////////////////////////////////////////////////////////////////////////////
function getDDMessage(commandName) {
  const found = ddCommands.find(
    (entry) => entry.command.toLowerCase() === commandName.toLowerCase()
  );
  return found ? found.message : null;
}

///////////////////////////////////////////////////////////////////////////////////////////
// 3) Helper function to pick a random announcement from ddCommands
///////////////////////////////////////////////////////////////////////////////////////////
function getRandomDDAnnouncement() {
  const index = Math.floor(Math.random() * ddCommands.length);
  const pick = ddCommands[index];
  return `(DDSeason ${pick.ddSeason}) - ${pick.message}`;
}

///////////////////////////////////////////////////////////////////////////////////////////
// TMI CONFIG
///////////////////////////////////////////////////////////////////////////////////////////
//"gaminggalleontv" "the_gaming_galleon"
const opts = {
  identity: {
    username: process.env.USER_NAME,
    password: process.env.OAUTH,
    google: process.env.KEY,
    twitch: process.env.TWITCH_CLIENT_SECRET,
    youtube: process.env.YOUTUBE_API_KEY_V3,
  },
  channels: ["boahs", "The_Gaming_Galleon", "dkdw"],
  debug: false,
  slowmode: slow,
  reconnect: true,
};

const client = new tmi.client(opts);
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.connect();

client.on("message", (channel, tags, message, self) => {
  console.log(`${tags["display-name"]}: ${message}`);
});

///////////////////////////////////////////////////////////////////////////////////////////
// 4) AUTO-ANNOUNCEMENT: every 20 minutes, post a random Dirty Dozen to "dkdw"
///////////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  const announcement = getRandomDDAnnouncement();
  client.say("the_gaming_galleon", announcement);
}, 15 * 60 * 1000); // 15 minutes;
// for testing at 1 minute:  (60 * 1000)
//15 * 60 * 1000); // 15 minutes

///////////////////////////////////////////////////////////////////////////////////////////
// 5) Google Sheets "gameX" functions, TTS logic, etc. remain untouched
//    Keep them if you need them (some are used, some are commented out).
///////////////////////////////////////////////////////////////////////////////////////////

function twitchApiCall() {
  // example placeholder
}

function youtubeApi() {
  function authenticate() {
    return gapi
      .auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
      .then(
        function () {
          console.log("Sign-in successful");
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
  }
  function loadClient() {
    gapi.client.setApiKey(opts.YOUTUBE_API_KEY_V3);
    return gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
        function () {
          console.log("GAPI client loaded for API");
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }
  function execute() {
    return gapi.client.youtube.search
      .list({
        part: ["snippet"],
        channelId: "UCDIQWHSMuF28CIJsvRFi84g",
        channelType: "any",
        eventType: "none",
        order: "date",
      })
      .then(
        function (response) {
          console.log("Response", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
  });
}

function getCurrentTimeString() {
  return new Date().toTimeString().split(" ")[0];
}

// sample "game1" function (others remain similar)...

const game1 = () => {
  async function game1main() {
    const opts = {
      identity: {
        google: process.env.KEY,
      },
    };

    const authClient = opts.identity.google;

    const request = {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: `B4`,
      valueRenderOption: "FORMATTED_VALUE",
      dateTimeRenderOption: "SERIAL_NUMBER",
      auth: authClient,
    };
    const requestTest = {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: `B5`,
      valueRenderOption: "FORMATTED_VALUE",
      dateTimeRenderOption: "SERIAL_NUMBER",
      auth: authClient,
    };

    try {
      const response = (await sheets.spreadsheets.values.get(request)).data;
      const formatName = JSON.stringify(response.values[0], null, 2);

      const response2 = (await sheets.spreadsheets.values.get(requestTest)).data;
      const formatScore = JSON.stringify(response2.values[0], null, 2);

      return `${JSON.parse(formatName.toUpperCase())} has a highest score of ${JSON.parse(
        formatScore
      )} on Psycho Pinball!`;
    } catch (err) {
      console.error(err);
    }
  }
  game1main()
    .then((value) => {
      client.say(
        "#boahs", // or whichever channel
        `Inlane of The Membrane : ${value}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

// ... game2(), game3() ... game12() etc. remain unchanged if you still use them ...

// checks if a specific message was sent in chat (unused example)
function checkCharityMessage() {
  const msg = ["test"];
  const filteredResult = msg.filter((word) => msg.includes("Charity"));
}

///////////////////////////////////////////////////////////////////////////////////////////
// 6) onMessageHandler: first check if it's a Dirty Dozen command. If so, respond using
//    ddCommands. If not, go to your other commands (switch).
///////////////////////////////////////////////////////////////////////////////////////////
function onMessageHandler(target, context, msg, self) {
  if (self) return; // ignore messages from the bot

  // parse the command
  const args = msg.trim().split(" ");
  const commandName = args.shift().toLowerCase();

  // 6A) If it's one of the Dirty Dozen commands, respond from ddCommands
  const ddMsg = getDDMessage(commandName);
  if (ddMsg) {
    client.say(target, ddMsg);
    return;
  }

  // 6B) Otherwise, handle your other commands here
  switch (commandName) {
    case "!commands":
      client.say(
        target,
        "My commands can be viewed by selecting the dropdown option here => https://dirtydozengames.com/ Note: They are not case sensitive"
      );
      break;
    case "!huzzah":
      client.say(target, `HUZZAH TO ${context.username}! HUZZAH!`);
      break;
    case "!gun":
      client.say(target, "L & SHIFT + T to fix the gun");
      break;
    case "!jupiter":
      client.say(
        target,
        `"ok I finally fucking delved into the whole nasa rape movie" -JupiterOil [Jul 17 2022 06:02:57 PM]`
      );
      break;
    case "!slowrunning":
      client.say(
        target,
        "https://clips.twitch.tv/BovineSingleStorkSeemsGood-ZzuSUrQdWcSBqqjO"
      );
      break;
    case "!pan":
      client.say(target, `${context.username} loves pancakes`);
      break;
    case "!voyage":
      client.say(
        target,
        `${context.username} wants a random voyage! As promised, here you go: ${results.randomVoyage()}`
      );
      break;
    case "!dirtydozen":
    case "!dd":
    case "!dozen":
    case "!dirty":
      client.say(
        target,
        "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM"
      );
      break;
    case "!ggtv":
      client.say(
        target,
        "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel!"
      );
      break;
    case "!deals":
      client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
      break;
    case "!sr":
      // references "number" from DB if you ever re-implement
      // client.say(target, `${number}`);
      client.say(target, "Song request code not implemented!");
      break;
    case "!rip":
      client.say(
        target,
        "Juicy 53 necro - https://i.imgur.com/5JmrlcH.jpg I died by having the new widget window for emotes in game open taking over my screen. I began to panic. I've since rebound the key so hopefully it never happens again."
      );
      break;
    case "Fish Taco":
      client.say(target, "Casablanca, Morocco");
      break;

    // If you want to call your "gameX()" function from a command, do it here:
    case "!game1":
      // example: triggers the function
      game1(); 
      break;

    default:
      // fallback if command not recognized
      break;
  }
}

function onConnectedHandler(addr, port) {
  console.log(`*Greetings, Boahs! Boahs Bot is Connected to ${addr}:${port}`);
}
