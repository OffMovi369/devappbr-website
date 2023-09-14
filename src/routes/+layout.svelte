<script>
    import "../app.css"
    import logo from "$lib/assets/logo.svg"
    import Icon from '@iconify/svelte';


    import own_sm_1 from "$lib/assets/own_sm_1.png"
    import own_sm_2 from "$lib/assets/own_sm_2.png"

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


</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>




<header>
    <div class="header_content">
        <div class="">
            <a href="#" draggable="false"><img src="{ logo }" alt="" draggable="false"></a >
        </div>
        <div class="nav_menu">
            <a href="" class="nav_link">О нас</a>
            <a href="" class="nav_link">Этапы </a>
            <a href="" class="nav_link">Проекты</a>
            <a href="" class="nav_link">Команда</a>
        </div>
        <div class="calc">
            <button class="main_wt_btn">Калькулятор продаж</button>
        </div>
    </div>
</header>
<slot />

<footer>
    <div class="ft_block_1">
        <div class="end_content">
            <div class="fast_links">
                <div class="logo">
                    <a href=""><img src="{ logo }" alt=""></a>
                </div>
                <div class="links_block">
                    <div class="sns">
                        <a class="sns_link tube" href="#" on:mouseenter={ tubeOverTrue } on:mouseout={ tubeOverFalse }>
                            Youtube
                            <Icon icon="mdi:youtube"  color="{ (tube_hover == true) ? 'red' : 'white' }" />
                        </a>
                        <a class="sns_link tg" href="#" on:mouseenter={ tgOverTrue } on:mouseout={ tgOverFalse }>
                            Telegram
                            <Icon icon="mingcute:telegram-fill" color="{ tg_hover ? 'rgba(89, 168, 215, 1)' : 'white' }"/>
                        </a>
                        <a class="sns_link vk" href="#" on:mouseenter={ vkOverTrue } on:mouseout={ vkOverFalse }>
                            Вконтакте
                            <Icon icon="uil:vk"  color="{ vk_hover ? 'rgba(51, 117, 246, 1)' : 'white' }"/>
                        </a>
                    </div>
                    <div class="map">
                        <div class="mao_ul">
                            <p class="main_sm">Разработка</p>
                            <ul>
                                <li><a href="">Кейсы</a></li>
                                <li><a href="">Ключевая ценность компании</a></li>
                                <li><a href="">Разработка минимального продукта</a></li>
                                <li><a href="">Расчёт стоимости</a></li>
                            </ul>
                        </div>
                        <div class="mao_ul">
                            <p class="main_sm">Обучение</p>
                            <ul>
                                <li><a href="">Блог в Telegram</a></li>
                                <li><a href="">Разбор кейсов на Youtube</a></li>
                                <li><a href="">Блог со свежими мыслями на Vc.ru</a></li>
                                <li><a href="">Портфолио на Behance</a></li>
                            </ul>
                        </div>
                        <div class="mao_ul">
                            <p class="main_sm">Другое</p>
                            <ul>
                                <li><a href="">Вакансии</a></li>
                                <li><a href="">Команда</a></li>
                                <li><a href="">Проекты</a></li>
                                <li><a href="">Подход</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contacts">

            </div>
        </div>'
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
        padding: 20px 0;
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
</style>
