<script>
    import BaseModal from "$lib/client/BaseModal.svelte";
    import { imask } from '@imask/svelte';
    import modalsStore from "$lib/client/modalsStore";
    import rectangle from "$lib/assets/rectangle.png"

    function accept({ detail: maskRef }) {
        value = maskRef.value;
    }
    const options = { 
		mask: '+{0}(000)000-00-00',
        lazy: true,
	};
    let tel = '';

    let type = ""
    let utm;

    $: type = $modalsStore.data.type
    $: utm = $modalsStore.data.utm

    
</script>
<BaseModal title="Настройка платежной системы">
    <div class="apl_modal_img">
        <img src="{rectangle}" alt="">
    </div>
    <form action="?/sendApp" method="post" class="apl_form">
        
        <div class="apl_modal_text">
            <p class="main_sm">Разработаем приложение с минимальным функционалом бесплатно</p>
            <p class="sm">Составим техническое задание и разработаем минимальный продукт, на основании которого проведем оценку стоимости работ</p>
        </div>
        <label for="" class="input_row">
            <p class="main_sm">Номер телефона</p>
            <input name="phone" type="tel" id="" required {tel}
            use:imask={options}
            on:accept={accept} placeholder="+7 000 00 00 ">
        </label>
        <input type="hidden" name="type" bind:value={type}>
        <input type="hidden" name="utm" value={JSON.stringify(utm)}>
        <button class="main_wt_btn">Разработать MVP</button>
        <span class="apl_agr">Отправляя заявку, вы соглашаетесь с <a href=""> Политикой Конфиденциальности</a></span>
    </form>
</BaseModal>

<style>
    .apl_modal_text .main_sm{
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    .apl_modal_text{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .sm{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    .apl_form{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        padding: 24px;
    }
    .input_row input{
        height: 50px;
        border-radius: 36px ;
        border: 2px solid var(--brightgray-color);
        color: var(--white-color);
        width: 100%;
        padding: 10px 25px;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
    }
    .input_row{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    form .main_wt_btn{
        justify-content: center;
    }
    .apl_agr{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--graywhite-color);
    }
    .apl_agr a{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--graywhite-color);
        text-decoration: underline;
    }
</style>
