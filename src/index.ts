//paranauês pra conectar e config bot
import * as Discord from 'discord.js'
import * as config from '../config.json'
import { MONGODB_URI } from './db-config'
import { COMMANDS } from './helpers/commands'
import mongoose from 'mongoose'

const bot = new Discord.Client()
const prefix = '\\' // define prefixo

bot.once('ready', () => {
  console.log('BOT logou', new Date().toLocaleString())
})
mongoose.set('useCreateIndex', true) // stops annoying warning
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))

mongoose.connection.once('open', () => {
  console.log('Connected to FUCKING DATABASE')
})

bot.on('message', function (message: Discord.Message) {
  try {
    if (message.author.bot) return // verifica se msg nao é de bot (autor da msg)
    if (!message.content.startsWith(prefix)) return // verifica se msg começa com prefixo (!)
  
    const commandBody = message.content.slice(prefix.length) // tira prefixo do corpo de comando
    const args = commandBody.split(' ') // separa os argumentos (comando incluso)
    const command = args.shift().toLowerCase() // separa comando dos argumentos. deixa comando em caixa baixa

    COMMANDS[command] ? COMMANDS[command](message) : message.reply('Comando Inválido')

  } catch (e) {
    console.log(e)
    message.reply('Sem quebrar o bot amiguinho...')
  }
})

bot.login(config.BOT_TOKEN)
