<script>
    import BaseModal from "$lib/client/BaseModal.svelte";
    import { imask } from '@imask/svelte';

    function accept({ detail: maskRef }) {
        value = maskRef.value;
    }
    const options = { 
		mask: '+{0}(000)000-00-00',
        lazy: true,
	};
    let tel = '';

    
</script>
<BaseModal title="Настройка платежной системы">
    <form action="" class="apl_form">
        <label for="" class="input_row">
            <p class="main_sm">Имя Фамилия</p>
            <input type="text" required placeholder="Введите имя">
        </label>
        <label for="" class="input_row">
            <p class="main_sm">Номер телефона</p>
            <input type="tel" required {tel}
            use:imask={options}
            on:accept={accept} placeholder="+7 000 00 00 ">
        </label>
        <button class="main_wt_btn">Оставить заявку</button>
        <span class="apl_agr">Отправляя заявку, вы соглашаетесь с <a href=""> Политикой Конфиденциальности</a></span>
    </form>
</BaseModal>

<style>
    .apl_form{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
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
        margin-top: 40px;
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
