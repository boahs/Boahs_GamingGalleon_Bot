const {google} = require('googleapis');
const sheets = google.sheets('v4');
const axios = require('axios');
require('dotenv').config();
const tmi = require("tmi.js");

async function main () {

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
    client.say(target,value);
  })
  //thanks hodeman
  
  module.exports = {
    main
  };