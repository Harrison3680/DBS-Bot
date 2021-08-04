global.config = require("./config.json")
const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: config.TOKEN,
  prefix: ["F!"]
})
bot.MessageEvent()

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Loaded: ${command.name} | ${files}`);
    }
}

bot.Variables({
  cash:"0",
  bank:"0"
})

bot.Status({
    0: {
        description:"Fable 2 with harrison", 
        type: "PLAYING" 
    }, 
    1: {
        description: "porn with ricky", 
        type: "WATCHING" 
    }
}, 12000)
 
bot.ReadyCommand({
name: "858387930703724564",
code: `
$client[tag] has been started at $client[readyat]!
$exec[git pull origin main]`

})
