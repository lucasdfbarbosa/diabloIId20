//paranauês pra conectar e config bot
import * as Discord from 'discord.js'
import * as config from '../config.json'
import { abGen } from './commands/genab'

const bot = new Discord.Client()
const prefix = '\\' // define prefixo

bot.once('ready', () => {
  console.log('BOT logou x')
})

bot.on('message', function (message: Discord.Message) {
  try {
    if (message.author.bot) return // verifica se msg nao é de bot (autor da msg)
    if (!message.content.startsWith(prefix)) return // verifica se msg começa com prefixo (!)
  
    const commandBody = message.content.slice(prefix.length) // tira prefixo do corpo de comando
    const args = commandBody.split(' ') // separa os argumentos (comando incluso)
    const command = args.shift().toLowerCase() // separa comando dos argumentos. deixa comando em caixa baixa

    if (command == 'genab') {
      abGen(message)
    }
  } catch (e) {
    console.log(e)
    message.reply('Sem quebrar o bot amiginho...')
  }
})

bot.login(config.BOT_TOKEN)
