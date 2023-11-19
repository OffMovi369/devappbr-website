import BotApi from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import config from './config.json';


dotenv.config()
const BOT_TOKEN = process.env.BOT_TOKEN
const bot = new BotApi(BOT_TOKEN, {polling: true})

export async function sendApp(type, data={}) {

    let fio = data.fio ? data.fio : ""
    let phone = data.phone ? data.phone : ""
    let slides = data.slides ? data.slides : ""
    let utm = data.utm ? data.utm : ""

    let answers = ''
    let utms = ''

    if (slides) {
        slides.forEach(slide => {
            answers += `\nQ: ${slide.que}\nA: ${slide.value}\n`
        });
    }

    if (utm) {
        for (let key of Object.keys(utm)) {
            if (utm[key]) {
                utms += `${key}: ${utm[key]}\n`
            }
          }
    }

    let text = `Вид: ${type}\n-\nИмя Фамилия: ${fio}\nТелефон: ${phone}\n-\n${answers}\n-\nUTM\n${utms}`

    for (const i in config.adminsId) {
        try {
            await bot.sendMessage(config.adminsId[i], text)
        } catch {Error} {
            continue
        }
    }
}
