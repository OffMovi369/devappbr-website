<script >
    import "../app.css"
    import logo from "$lib/assets/logo.svg"
    import Icon from '@iconify/svelte';
    import { Hamburger } from 'svelte-hamburgers';
    import Menu from "./main/menu.svelte";
    

    import {onMount} from 'svelte'

    import own_sm_1 from "$lib/assets/own_sm_1.png"
    import own_sm_2 from "$lib/assets/own_sm_2.png"
   
    import up_logo from "$lib/assets/up_logo.svg" 

    import modalsStore from "$lib/client/modalsStore";
    import CalcModalWindow from "./main/CalcModalWindow.svelte";
    import AplicModalWindow from "./main/AplicModalWindow.svelte";
    let innerWidth;


    let open;

    let tube_hover = false
    let tg_hover = false
    let vk_hover  = false

    function tubeOverTrue(e){
        tube_hover = true
    }
    function tubeOverFalse(e){
        tube_hover = false
    }

    function tgOverTrue(e){
        tg_hover = true
    }
    function tgOverFalse(e){
        tg_hover = false
    }

    function vkOverTrue(e){
        vk_hover = true
    }
    function vkOverFalse(e){
        vk_hover = false
    }
    

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
            el.scrollIntoView({
            behavior: 'smooth'
        });
    }

    
    

</script>
<svelte:window bind:innerWidth/>
{#if $modalsStore.modalWindow}
	<svelte:component this={$modalsStore.modalWindow}/>
{/if}

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <title>DA&BR — Разработка мобильных приложений</title>
</svelte:head>




<header>
    <div class="header_content">
        <div class="header_logo">
            <a href="/main" draggable="false"><img src="{ up_logo }" alt="" draggable="false"></a >
        </div>
        
        <div class="drop_menu">
            <a href="https://www.youtube.com/@devappbroseph" class="dd" target="_blank"><Icon icon="mdi:youtube" color="white" width="24" height="24" /></a>
            <a href="https://t.me/devappbroseph" class="dd" target="_blank" ><Icon icon="mingcute:telegram-fill" color="white" width="24" height="24"/></a>   
            <Hamburger
            bind:open
            color="white" />

            <Menu bind:open />

        </div>
        

    </div>
</header>

    


<slot/>


<footer>
    <div class="ft_block_1">
        <div class="end_content">
            <div class="fast_links">
                <div class="logo">
                    <a href="/main"><img src="{ up_logo }" alt=""></a>
                </div>
                <div class="links_block">
                    <div class="sns">
                        <a class="sns_link tube" href="https://www.youtube.com/@devappbroseph" on:mouseenter={ tubeOverTrue } on:mouseout={ tubeOverFalse } target=»_blank»>
                            Youtube
                            <Icon icon="mdi:youtube"  color="{ (tube_hover == true) ? 'red' : 'white' }" />
                        </a>
                        <a class="sns_link tg" href="https://t.me/devappbroseph" on:mouseenter={ tgOverTrue } on:mouseout={ tgOverFalse } target=»_blank»>
                            Telegram
                            <Icon icon="mingcute:telegram-fill" color="{ tg_hover ? 'rgba(89, 168, 215, 1)' : 'white' }"/>
                        </a>
                        <a class="sns_link vk" href="https://vk.com/devbroseph" on:mouseenter={ vkOverTrue } on:mouseout={ vkOverFalse } target=»_blank»>
                            Вконтакте
                            <Icon icon="uil:vk"  color="{ vk_hover ? 'rgba(51, 117, 246, 1)' : 'white' }"/>
                        </a>
                    </div>
                    <div class="map">
                        <div class="mao_ul">
                            <p class="main_sm">Разработка</p>
                            <ul>
                                <li><a href="#project" on:click|preventDefault={scrollIntoView}>Кейсы</a></li>
                                <li><a href="#core_values" on:click|preventDefault={scrollIntoView}>Ключевая ценность компании</a></li>
                                <li><a href="#" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow ; $modalsStore.showModal=true}}} on:click={()=> open= false}>Разработка минимального продукта</a></li>
                                <li><a href="#" on:click={() => {{$modalsStore.modalWindow = CalcModalWindow ; $modalsStore.showModal=true}}} on:click={()=> open= false}>Расчёт стоимости</a></li>
                            </ul>
                        </div>
                        <div class="mao_ul">
                            <p class="main_sm">Обучение</p>
                            <ul>
                                <li><a href="https://t.me/devappbroseph" target=»_blank»>Блог в Telegram</a></li>
                                <li><a href="https://www.youtube.com/@devappbroseph" target=»_blank»>Разбор кейсов на Youtube</a></li>
                                <li><a href="https://vc.ru/u/1636322-pavel-kalashnikov" target=»_blank»>Блог со свежими мыслями на Vc.ru</a></li>
                                <li><a href="https://www.behance.net/appdevelopbroseph" target=»_blank»>Портфолио на Behance</a></li>
                            </ul>
                        </div>
                        <div class="mao_ul">
                            <p class="main_sm">Другое</p>
                            <ul>
                                <li><a href="https://rarible.com/user/0x740b21ff585747f3bea017662a29bb840dfff28c/owned" target=»_blank»>Вакансии</a></li>
                                <li><a href="#comrads" on:click|preventDefault={scrollIntoView}>Команда</a></li>
                                <li><a href="#project" on:click|preventDefault={scrollIntoView}>Проекты</a></li>
                                <li><a href="#owners" on:click|preventDefault={scrollIntoView}>Подход</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ft_block_2">
        <div class="contacts">
            <div class="own_contact_div">
                <div class="own_contact">
                    <div class="">
                        <div class="cont_img">
                            <img src="{ own_sm_1 }" alt="">
                        </div>
                    </div>
                    <div class="">
                        <p class="contact_name">Павел Калашников</p>
                        <p class="contact_link">8 985 166 16-35</p>
                    </div>
                </div>
                <div class="own_contact">
                    <div class="">
                        <div class="cont_img">
                            <img src="{ own_sm_2 }" alt="">
                        </div>
                    </div>
                    <div class="">
                        <p class="contact_name">Максим Яковлев</p>
                        <p class="contact_link">8 993 900 96-46</p>
                    </div>
                </div>
                
            </div>
            <div class="quest_link">
                <div class="">
                    <p class="contact_name">По всем вопросам:</p>
                    <a class="contact_link" href="#">info@devappbroseph.ru</a>
                </div>
                <div class="">
                    <p class="contact_name">По вопросам стажировок:</p>
                    <a class="contact_link" href="#">Telegram: @paull_gideon</a>
                </div>
            </div>
        </div>
    </div>
</footer>
 


<style>
    .tube{
        margin-right: 20px !important;
    }
    .own_contact_div{
        display: flex;
        align-items: center;
        column-gap: 25px;        
    }
    .cont_img{
        width: 42px;
        height: 42px;
        overflow: hidden;
        border-radius: 36px;
    }
    .own_contact{
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .contacts{
        max-width: 1120px;
        margin: auto;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 32px 0px;
    }
    .quest_link{
        display: flex;
        align-items: center;
        column-gap: 35px;
    }
    .contact_name{
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    .contact_link{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--gray-color);
    }
    header{
        border-bottom: 1px solid var(--brightgray-color);
    }

    .header_content{
        max-width: 1120px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        
    }
    .drop_menu{
        position: relative;
    }
    .drop_menu a{
        margin-right: 20px;
    }
    .header_content:first-child{
        display: flex;
        align-items: center;
    }
    .nav_menu{
        display: flex;
        align-items: center;
        column-gap: 32px;
    }
    .nav_link{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--white-color);
        transition: all .2s ease-out;
    }
    .nav_link:hover{
        color: var(--gray-color);
    }
    .end_content{
        max-width: 1120px;
        margin: auto;
        padding: 40px 0px;
    }
    .ft_block_1{
        width: 100%;
        border-top: 2px solid var(--brightgray-color);
        border-bottom: 2px solid var(--brightgray-color);
    }
    .fast_links{
        display: flex;
        flex-direction: column;
        row-gap: 32px;

    }
    .links_block{
        display: flex;
        justify-content: space-between;
    }
    .map{
        display: flex;
        justify-content: space-between;
        
    }
    .mao_ul{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        max-width: 33%;
    }
    .mao_ul a {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--white-color);
        transition: all .2s ease-out;
    }
    .mao_ul a:hover{
        color: var(--gray-color);
    }
    .sns{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 256px;
    }
    .sns_link {
        width: 100%;
        height: 48px;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        padding: 10px 25px;
        color: var(--white-color);
        border-radius: 36px;
        transition: all .2s ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tube{
        border: 2px solid rgba(215, 49, 32, 1);
    }
    .tg{
        border: 2px solid rgba(89, 168, 215, 1);
    }
    .vk{
        border: 2px solid rgba(51, 117, 246, 1);
    }
    .sns_link:hover{
        background-color: var(--white-color);
    }
    .tube:hover{
        border: 2px solid transparent;
        color: rgba(215, 49, 32, 1);
    }
    .tg:hover{
        border: 2px solid transparent;
        color: rgba(89, 168, 215, 1);
    }
    .vk:hover{
        border: 2px solid transparent;
        color: rgba(51, 117, 246, 1);
    }
    .contants{
        height: 100px;
    }

   
    @media(max-width:1180px){
        .header_content{
            padding: 10px 30px;
        }
        .ft_block_1{
            padding: 0 32px;
        }
        .ft_block_2{
            padding: 0 32px;
        }
    }
    @media(max-width:1000px){
        .links_block{
            flex-direction: column-reverse;
            row-gap: 32px;
        }
        .sns{
            row-gap: 12px;
        }
        .contacts{
            padding: 20px;
        }
    
    }
    @media(max-width:850px){
        header .nav_menu{
            display: none;
        }
        .contacts{
            flex-direction: column;
            row-gap: 20px;
        }
    }
    @media(max-width:800px){
        .header_content{
            padding: 10px 30px;
        }
        
    }
    
    @media(max-width:600px){
        .sns{
            width: 100%;
        }
        .ft_block_2{
            padding: 0px;
        }
        .contacts{
            width: 100%;
        }
        .own_contact_div{
            width: 100%;
            justify-content: space-around;
        }
        .quest_link{
            width: 100%;
            justify-content: space-around;
        }
    }
    @media(max-width:550px){

        .ft_block_1{
            padding: 0  32px;
        }
    }
    @media(max-width:428px){
        
        
        .contacts{
            flex-direction: column;
        }
        .links_block{
            flex-direction: column-reverse;
            row-gap: 32px;
        }
        .map{
            flex-wrap: wrap;
            row-gap: 32px;
            column-gap: 15px;
        }
        .mao_ul{
            max-width: unset;
            width: 100%;
            flex-wrap: wrap;
        }
        .sns{
            width: 100%;
            row-gap: 12px;
        }
        .contacts{
            row-gap: 32px;
        }
        .dd{
            display: none;
        }
        
        
    }
    @media(max-width:400px){
        .quest_link{
            flex-direction: column;
            row-gap: 20px;
        }
        .own_contact{
            flex-direction: column;
            row-gap: 12px;
        }
        .own_contact_div{
            flex-direction: column;
            row-gap: 20px;
        }
        .contact_link{
            text-align: center;
            width: 100%;
        }
        .contact_name{
            text-align: center;
        }
        .nav_menu{
            column-gap: 10px;
        }
    }
    
</style>
