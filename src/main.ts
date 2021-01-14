//paranauês pra conectar e config bot
import * as Discord from 'discord.js'
import * as config from '../config.json'

const client = new Discord.Client()


// RECURSIVE FUNCTION FOR DEEP CLONE
const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== 'object' || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}

/*//  OUTRA FUNCTION PARA CLONAR OBJETO
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
*/

// ######## ######## ######## ######## ######## ######## ######## ######## ######## ########
// ######## ########    AQUI COMEÇA A FUNÇÃO PARA O BOT LER A MENSAGEM     ######## ########
// ######## ######## ######## ######## ######## ######## ######## ######## ######## ########

const prefix = '!' // define prefixo

client.on('message', function (message: any) {
  if (message.author.bot) return // verifica se msg nao é de bot (autor da msg)
  if (!message.content.startsWith(prefix)) return // verifica se msg começa com prefixo (!)

  const commandBody = message.content.slice(prefix.length) // tira prefixo do corpo de comando
  const args = commandBody.split(' ') // separa os argumentos (comando incluso)
  const command = args.shift().toLowerCase() // separa comando dos argumentos. deixa comando em caixa baixa

  const result = new Discord.MessageEmbed()

  // ######## ######## ######## ######## ######## ######## ######## ######## ########
  // ######## ########    AQUI COMEÇA AS PARADAS DE VERDADE    ######## ########
  // ######## ######## ######## ######## ######## ######## ######## ######## ########

  if (command == "") {

  }
})

client.login(config.BOT_TOKEN)