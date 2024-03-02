// let twitchUserList = {
//     //user:"andreikirilenko47",
//     //songRequests: 13
//     andreikirilenko47 : {name: 'andreikirilenko47', songRequests: 13},
//     Krebstar_Hero : {name: 'Krebstar_Hero', songRequests: 1},
//     Hodeman : {name: 'Hodeman', songRequests: 4}
// }

// const twitchUserList = {
//     andreikirilenko47: 13
// };


// const username1 = Object.keys(twitchUserList)[0];

// returnUser = (name) => {
//     return name in twitchUserList;
// }



// returnUser("toString");

// returnUserSongs = (song) => {
//     return twitchUserList[]
// }

//export default twitchUserList;

const twitchUserList = {
    andreikirilenko47: 13,
    boahs: 420,
    hodeman: 4,
    krebster_hero: 1
};

function getNumberByUsername(username) {
    if (username in twitchUserList) {
        return twitchUserList[username];
    } else {
        return "Username not found";
    }
}

module.exports = {
    getNumberByUsername
};


module.exports = {
    getNumberByUsername
};