import * as Discord from 'discord.js'

export function abGen(message: Discord.Message): void {
  let finalmod = 0
  let mods = 0
  let abs: number[]
  do {
    abs = new Array(6).fill(0)
    mods = 0
    let m1 = 6
    let m2 = 6
    for (let i = 0; i < 6; i++) {
      console.log(`rolando habilidade ${i}`)
      m1 = 6
      m2 = 6
      for (let j = 0; j < 5; j++) {
        let roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1
        if (roll < m1) {
          if (m1 < m2) {
            m2 = m1
          }
          m1 = roll
        } else if (roll < m2) {
          m2 = roll
        }
        abs[i] += roll
      }
      abs[i] -= m1
      abs[i] -= m2
      console.log(`abs ${i} - ${abs[i]}`)
      console.log(`mod antes swithc: ${mods}`)
      switch (abs[i]) {
        case 3: {
          console.log(`case 3`)
          mods -= 4
          break
        }
        case 4:
        case 5: {
          console.log(`case 4/5`)
          mods -= 3
          break
        }
        case 6:
        case 7: {
          console.log(`case 6/7`)
          mods -= 2
          break
        }
        case 8:
        case 9: {
          console.log(`case 8/9`)
          mods -= 1
          break
        }
        case 12:
        case 13: {
          console.log(`case 12/13`)
          mods += 1
          break
        }
        case 14:
        case 15: {
          console.log(`case 14/15`)
          mods += 2
          break
        }
        case 16:
        case 17: {
          console.log(`case 16/17`)
          mods += 3
          break
        }
        case 18: {
          console.log(`case 18`)
          mods += 4
          break
        }
      }
      console.log(`mod pós swithc: ${mods}`)
    }
    console.log(`mods final: ${mods}`)
    finalmod = mods / 6
    console.log(`final mooood ${finalmod}`)
  } while (finalmod <= 2)
  message.reply(
    `valores rolados: ${abs}\no modificador final de suas habilidades é: ${finalmod}`,
  )
}
