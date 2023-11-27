import { sendApp } from "$lib/server/bot"
import { redirect } from '@sveltejs/kit'

export const actions = {
    sendApp: async ({request}) => {
        const data = await request.formData();


        const fio = data.get('fio')
        const phone = data.get('phone')
        const type = data.get('type')
        const slides = JSON.parse(data.get('slides'))
        const utm = JSON.parse(data.get('utm'))

        await sendApp(type, {fio, phone, slides, utm})
        
        throw redirect(302, '/postapplication')  
    }
}