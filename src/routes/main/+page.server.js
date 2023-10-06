import { sendApp } from "$lib/server/bot"
import { redirect } from '@sveltejs/kit'

export const actions = {
    sendApp: async ({request}) => {
        const data = await request.formData();

        const fio = data.get('fio')
        const phone = data.get('phone')
        const type = data.get('type')

        await sendApp(type, {fio, phone})
      
        throw redirect(302, '/')  
    }
}