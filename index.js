const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
require("dotenv").config();

const opts = process.env.API_KEY;

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), listSonic);
  authorize(JSON.parse(content), listLightCrusader);
  authorize(JSON.parse(content), listMaximumCarnage);
  authorize(JSON.parse(content), listMercs);
  authorize(JSON.parse(content), listEternalChampions);
  authorize(JSON.parse(content), listJungleStrike);
  authorize(JSON.parse(content), listShiningDarkness);
  authorize(JSON.parse(content), listXmen);
  authorize(JSON.parse(content), listBiohazard);
  authorize(JSON.parse(content), listNHL);
  authorize(JSON.parse(content), listChakan);
  authorize(JSON.parse(content), listCrueBall);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          "Error while trying to retrieve access token",
          err
        );
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

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

const listSonic = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "B5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Sonic & Knuckles leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listLightCrusader(auth) {
//   const sheets = google.sheets({ version: "v4", auth });

//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "C5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log(`Light Crusader highscores: `);
//         // Print columns A and E, which correspond to indices 0 and 4.
//         rows.map((row) => {
//           return console.log(`${row[0]}`);
//         });
//       } else {
//         console.log("No data found.");
//       }
//     }
//   );
// }

const listLightCrusader = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "C5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Light Crusader leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listMaximumCarnage(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "D5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Maximum Carnage highscores: ");
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

const listMaximumCarnage = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "D5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Maximum Carnage leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listMercs(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "E5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Mercs highscores: ");
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

const listMercs = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "E5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Mercs leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listEternalChampions(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "F5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Ternal Champions highscores: ");
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

const listEternalChampions = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "F5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Eternal Champions leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listJungleStrike(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "G5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Jungle Strike highscores: ");
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

const listJungleStrike = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "G5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Jungle Strike leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listShiningDarkness(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "H5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Shining Darkness highscores: ");
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

const getLeader = (game) => {};

const listShiningDarkness = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "H5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        // console.table(res.data);
        console.log(`Shining Darkness leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listShiningDarkness(opts) {
//   const sheets = google.sheets({ version: "v4", auth: opts });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "H5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       if (res.data.values === undefined) {
//         return "No Data";
//       } else {
//         console.log(res.data.values[0]);
//         return res.data.values[0];
//       }
//     }
//   );
// }

// function listXmen(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "I5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Xmen highscores: ");
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

const listXmen = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "I5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Xmen leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listBiohazard(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "J5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Biohazard battle highscores: ");
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

const listBiohazard = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "J5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Biohazard Battle leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listNHL(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "K5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("NHL highscores: ");
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

const listNHL = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "K5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`NHL leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listChakan(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "L5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("Chakan highscores: ");
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

const listChakan = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "L5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`Chakan leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

// function listCrueBall(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   sheets.spreadsheets.values.get(
//     {
//       spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
//       range: "M5",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const rows = res.data.values;
//       if (rows.length) {
//         console.log("CrueBall highscores: ");
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

const listCrueBall = (auth) => {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1_BHrMDFsL9Vnkmk_3gyoZUtl9zh7zSK83_XEwnkKaGM",
      range: "M5",
    },
    (err, res) => {
      if (err) return console.log("API returned an error: " + err);
      if (res.data.values === undefined) {
        return "No Data";
      } else {
        console.log(`CrueBall leader: ${res.data.values[0]}`);
        return res.data.values[0];
      }
    }
  );
};

const bullshit = "fuck";

function bullShitter() {
  return "Fucking FUCK";
}

module.exports = {
  listSonic,
  listLightCrusader,
  listMaximumCarnage,
  listMercs,
  listEternalChampions,
  listJungleStrike,
  listShiningDarkness,
  listXmen,
  listBiohazard,
  listNHL,
  listChakan,
  listCrueBall,
  bullshit,
  bullShitter,
};
