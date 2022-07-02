const WebSocket = require('ws');
const socket = new WebSocket('wss://pubsub-edge.twitch.tv');
require("dotenv").config();

// socket.addEventListener('open', function (event) {
//     socket.send(JSON.stringify(
//         {
//         "type": "PING"
//         }
//     ));
    
//     console.log(event)
// });

//auth url
let scope = 'user_read+chat_login+bits:read'

const nounce = (length) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }  //end nounce
    return text;
};

const heartbeat = () => {
    socket.send(JSON.stringify(
        {
        "type": "PING"
        }
    ));
};

// const listen = (topic) => {
//     message = {
//         type: 'LISTEN',
//         nounce: nounce(15),
//         data: {
//             topics: [topic],
//             auth_token: sessionStorage.twitchOauthToken
//         }
//     };
//     socket.send(JSON.stringify(message));
// }




const authUrl = () => {
    // sessionStorage.twitchOauthState = nounce(15);
    let url = 'https://api.twitch.tv/kraken/oauth2/authorize' + 
    '?response_type=token' +
    '&client_id=' + process.env.CLIENT_ID +
    '&redirect_uri=' + process.env.REDIRECT_URI +
     '&scope=' + scope //+
    // '&state=' + sessionStorage.twitchOauthState;
    return url;
}
// Connection opened
socket.addEventListener('open', function (event) {
    // socket.send(JSON.stringify({
    //     "type": "PING"
    //   }));
    socket.send(JSON.stringify({
        "type": "LISTEN",
        "nonce": "abc123",
        "data": {
          "topics": ["channel-bits-events-v1.49225169"],
          "auth_token": '4jh8qrxwfb3hxngrld0qi6ltatwfpj'
}}))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});