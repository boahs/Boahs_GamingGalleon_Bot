const commands = require("tmi.js/lib/utils");


const followersOnly = (channel, minutes) {
    channel = commands.channel(channel);
    minutes = commands.get(minutes, 30);
}