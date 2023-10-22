// import BotApi from 'node-telegram-bot-api'
// import dotenv from 'dotenv'
// import config from './config.json';


// dotenv.config()
// const BOT_TOKEN = process.env.BOT_TOKEN
// const bot = new BotApi(BOT_TOKEN, {polling: true})

// export async function sendApp(type, data={}) {

//     let fio = "fio" in data ? data.fio : ""
//     let phone = "phone" in data ? data.phone : ""

//     let text = `Вид: ${type}\n-\nИмя Фамилия: ${fio}\nТелефон: ${phone}\n-\nUTM`

//     for (const i in config.adminsId) {
//         try {
//             await bot.sendMessage(config.adminsId[i], text)
//         } catch {Error} {
//             continue
//         }
//     }
// }
