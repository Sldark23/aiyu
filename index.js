const aiyu = require("aoi.js")

const bot = new Aoijs.Bot({
  mobile: false,
  token: "",
  prefix: ['!'],
  autoUpdade: false})
  
  bot.onMessage()
  bot.loadCommands(`./Comandos/`)
