/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */

// function listSonic(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "B5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Sonic & Knuckles highscores: ");
//         // Print columns A and E, which correspond to indices 0 and 4.
//         rows.map((row) => {
//           console.log(`${row[0]}`);
//         });
//       } else {
//         console.log("No data found.");
//       }
//     }
//   );
// }




// const listSonic = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "B5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Sonic & Knuckles leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listLightCrusader(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });

// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "C5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log(`Light Crusader highscores: `);
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           return console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listLightCrusader = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "C5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Light Crusader leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listMaximumCarnage(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "D5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Maximum Carnage highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listMaximumCarnage = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "D5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Maximum Carnage leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listMercs(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "E5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Mercs highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listMercs = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "E5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         // console.table(res.data.values[0]);
//         console.log(`Mercs leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };
// console.log(`DATA DATA DATA DATA 34234234234 ${listMercs(opts)}`);
// // function listEternalChampions(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "F5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Ternal Champions highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listEternalChampions = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "F5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Eternal Champions leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listJungleStrike(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "G5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Jungle Strike highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listJungleStrike = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "G5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Jungle Strike leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listShiningDarkness(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "H5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Shining Darkness highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const getLeader = (game) => {};

// const listShiningDarkness = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "H5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         // console.table(res.data);
//         console.log(`Shining Darkness leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listShiningDarkness(opts) {
// //   const sheets = google.sheets({ version: "v4", auth: opts });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "H5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       if (res.data.values === undefined) {
// //         return "No Data";
// //       } else {
// //         console.log(res.data.values[0]);
// //         return res.data.values[0];
// //       }
// //     }
// //   );
// // }

// // function listXmen(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "I5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Xmen highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listXmen = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "I5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Xmen leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listBiohazard(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "J5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Biohazard battle highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listBiohazard = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "J5",
//     },
//     (err, res) => {
//       const dataTest = [];
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Biohazard Battle leader: ${res.data.values[0]}`);
//         dataTest.push(res.data.values[0]);
//         return dataTest;
//       }
//     }
//   );
// };
// listBiohazard(opts);

// // function listNHL(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "K5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("NHL highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listNHL = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "K5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`NHL leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listChakan(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "L5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("Chakan highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listChakan = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "L5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`Chakan leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// // function listCrueBall(auth) {
// //   const sheets = google.sheets({ version: "v4", auth });
// //   sheets.spreadsheets.values.get(
// //     {
// //       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
// //       range: "M5",
// //     },
// //     (err, res) => {
// //       if (err) return console.log("The API returned an error: " + err);
// //       const rows = res.data.values;
// //       if (rows.length) {
// //         console.log("CrueBall highscores: ");
// //         // Print columns A and E, which correspond to indices 0 and 4.
// //         rows.map((row) => {
// //           console.log(`${row[0]}`);
// //         });
// //       } else {
// //         console.log("No data found.");
// //       }
// //     }
// //   );
// // }

// const listCrueBall = (auth) => {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "M5",
//     },
//     (err, res) => {
//       if (err) return console.log("API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(`CrueBall leader: ${res.data.values[0]}`);
//         return res.data.values[0];
//       }
//     }
//   );
// };

// const bullshit = "fuck";

// function bullShitter() {
//   return "Fucking FUCK";
// }

// module.exports = {
//   listSonic,
//   listLightCrusader,
//   listMaximumCarnage,
//   listMercs,
//   listEternalChampions,
//   listJungleStrike,
//   listShiningDarkness,
//   listXmen,
//   listBiohazard,
//   listNHL,
//   listChakan,
//   listCrueBall,
//   bullshit,
//   bullShitter,
// };


// commands for API reference above and bot commands for twitchjs api below

// } else if (commandName === "!sonic") {
//     client.say(target, "Sonic & Knuckles leader: ssdNinja");
//     // client.say(target, `Sonic leader: ${result.listSonic(API_KEY)}`);
//     console.log(userReturn);
//   } else if (commandName === "!light") {
//     client.say(target, "Light Crusader leader: ssdNinja");
//     // client.say(
//     //   target,
//     //   `Light Crusader leader: ${result.listLightCrusader(API_KEY)}`
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!maximum") {
//     client.say(target, "Maximum carnage leader: ssdninja");
//     // client.say(
//     //   target,
//     //   ` Maximum Carnage leader:  ${result.listMaximumCarnage(API_KEY)}`
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!mercs") {
//     client.say(target, "Mercs Champions leader: ex_mortis");
//     // client.say(target, ` Mercs leader: ${result.listMercs(API_KEY)} `);
//     console.log(userReturn);
//   } else if (commandName === "!eternal") {
//     client.say(target, "Eternal Champions leader: Foedub");
//     // client.say(
//     //   target,
//     //   ` Eternal Champions leader: ${result.listEternalChampions(API_KEY)} `
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!junglestrike") {
//     client.say(target, " Jungle Strike leader : ssdNinja");
//     // client.say(
//     //   target,
//     //   ` Jungle Strike leader: ${result.listJungleStrike(API_KEY)}`
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!shining") {
//     client.say(target, "Shining Darkness Leader: ex_mortis");
//     // client.say(
//     //   target,
//     //   ` Shining Darkness Leader : ${result.listShiningDarkness(API_KEY)}`
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!xmen") {
//     client.say(target, "xmen leader: Foedub & Torrabelle ");
//     // client.say(target, `Xmen leader: ${result.listXmen(API_KEY)}`);
//     console.log(userReturn);
//   } else if (commandName === "!biohazard") {
//     client.say(target, "biohazard battle leader: ssdNinja");
//     // client.say(
//     //   target,
//     //   ` BioHazard Battle leader: ${result.listBiohazard(API_KEY)}`
//     // );
//     console.log(userReturn);
//   } else if (commandName === "!nhl") {
//     client.say(target, "NHL leader: RichSoCash");
//     // client.say(target, `NHL leader: ${result.listNHL(API_KEY)}`);
//     console.log(userReturn);
//   } else if (commandName === "!chakan") {
//     client.say(target, "chakan leader: ssdNinja");
//     // client.say(target, `Chakan leader: ${result.listChakan(API_KEY)}`);
//     console.log(userReturn);
//   } else if (commandName === "!crueball") {
//     client.say(target, "crueball leader: RichSoCash");
//     // client.say(target, `Crüe Ball leader: ${result.listCrueBall(API_KEY)}`);
//     console.log(userReturn);
//   } else if (commandName === "!youtube") {
//     client.say(target, "https://www.youtube.com/c/TheGamingGalleon/videos");
//   }

  //announce();
  //refactor if/else into switch
  // If the command is known, let's execute it
  // if (commandName === "!dice") {
  //   const num = rollDice();
  //   client.say(target, `You rolled a ${num}`);
  //   console.log(userReturn);
  // } else if (msg.toLowerCase() === "star"){
  //   client.say(target, `@${context.username}, you just said the secret word. You've won $50000!`)
  // }
  
  // else if (commandName === "!pan") {
  //   client.say(target, `Pancakes`);
  //   console.log(userReturn);
  // } else if (commandName === "!dirtydozen") {
  //   client.say(
  //     target,
  //     "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
  //   );
  //   console.log(userReturn);
  // } else if (commandName === "!emoteOnly") {
  // } else if (commandName === "!voyage") {
  //   client.say(
  //     target,
  //     `Your random voyage MrDestructoid : ${results.randomVoyage()}`
  //   );
  // } else if (commandName === "!DirtyDozen") {
  //   client.say(
  //     target,
  //     " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
  //   );
  //   console.log(userReturn);
  // } else if (commandName === "!echo"){
  //   client.say(target, `@${context.username}, you said: "${args.join(' ')}"`)

  // } else if (commandName === "!ggtv") {
  //   client.say(
  //     target,
  //     "https://www.twitch.tv/gaminggalleontv Catch up on all the voyages at the 24/7 channel! "
  //   );
  // } else if (commandName === "!leaderboard") {
  //   client.say(
  //     target,
  //     " https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
  //   );
  //   console.log(userReturn);
  // } else if (commandName === "!LeaderBoard") {
  //   client.say(
  //     target,
  //     "https://docs.google.com/spreadsheets/d/1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM/edit#gid=0"
  //   );
  //   console.log(userReturn);
  // } else if(commandName === "!addScore") {
  //   client.say(
  //     target,
  //     "Please enter a new entry for the top scores. Example: Boahs, 500, RType"
  //   );
  //   newScore.addNewTopScores(playerName, Score, gameName);
  // } else if (commandName === "!deals") {
  //   client.say(target, "https://clips.twitch.tv/GleamingLittleOcelotWTRuck");
  //   console.log(userReturn);
  // } else if (commandName === "!test1") {
  //   client.say(
  //   target, `${slow()}`
  //   );


  //   }else if (commandName === "!commands") {
  //   client.say(
  //     target,
  //     `https://pastebin.com/BFatN6qL An updated list of commands can be found here`
  //   );
  //   console.log(userReturn);
  // } else {
  //   console.log(`${context.username} : ${twitchUserName}`);
  // }