global.config = require("./config.json")
const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: config.token,
  prefix: ["?"]
})
 
bot.MessageEvent()
 
bot.Command({
  name: "ping",
  code: `
 $ping
  `
})

bot.Command({
  name: "say",
  code: `
 $message[]
  `
})

