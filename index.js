const exec = require('child_process').exec;
global.config = require("./config.json")
const Dlang = require('discordbot-script')
const { processes } = require('systeminformation')
const bot = new Dlang({
token: config.TOKEN,
prefix: ["F!"]
})

  setInterval(() => {
        exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    //console.log('Bot already up to date. No changes since last pull')
                } else {
                    client.channels.cache.get('871915599788380230').send('**[AUTOMATIC]** \nNew update on GitHub. Pulling. \n\nLogs: \n```' + response + "```" + "\n\n\n**Restarting bot**")
                    setTimeout(() => {
                        process.exit();
                    }, 1000)
                }
            }
        })
    }, 60000)

bot.MessageEvent()

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Loaded: ${command.name} | ${files} `);
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
 

