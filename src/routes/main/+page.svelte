<script>
    import Icon from '@iconify/svelte'
    import block_bg from "$lib/assets/block_bg.png"
    import owners from "$lib/assets/owners.png"
    import { afterUpdate } from 'svelte';
    import { fly } from 'svelte/transition'
    import stars from "$lib/assets/stars.png"
    import dna_bg from "$lib/assets/dna_bg.png"
    import core_value_bg from "$lib/assets/core_value.png"
    import process from "$lib/assets/process.png"
    import designer_bg from "$lib/assets/designer.png"
    import verst_bg from "$lib/assets/verst.png"
    import function_bg from "$lib/assets/function.png"
    import test_bg from "$lib/assets/test.png"
    import mini_logo from "$lib/assets/mini_logo.png"
    import apl_bg from "$lib/assets/apl_bg.png"
    import ImageCompare from 'svelte-image-compare';
    import test_bg_sm from "$lib/assets/test_bg_sm.png"
    import test_sm from "$lib/assets/test_sm.png"

    import modalsStore from "$lib/client/modalsStore";
    import AplicModalWindow from './AplicModalWindow.svelte';
    import CalcModalWindow from './CalcModalWindow.svelte';

    import person_test from "$lib/assets/personal_test.png"

    import Project from './project.svelte';
    import Slider from './slider.svelte';

    import { imask } from '@imask/svelte';
    import slide_img_1 from "$lib/assets/slide_img_1.png"
    import slide_img_2 from "$lib/assets/slide_img_2.png"


    function accept({ detail: maskRef }) {
        value = maskRef.value;
    }
    const options = { 
		mask: '+{0}(000)000-00-00',
        lazy: true,
	};
    let tel = '';
    let test_bg_value;
    let test_value;
    $:{
        if(innerWidth<600){
            test_bg_value = test_bg_sm
        }
        else{
            test_bg_value = dna_bg
        }
    }
    $:{
        if(innerWidth<428){
            test_value = test_sm
        }
        else{
            test_bg_value = dna_bg
        }
    }
    
    let mapContainer;
	let map_offset;
    let oh;
    let flag= false
    let innerHeight

    let devContainer;
    let dev;
    let flag2 = false
    let flag3 = false

    let miniHeaderContainer;
    let visib;
    let miniHeaderFlag = false
    let hhh;

    let devlast;
    let miniClose;

    let innerWidth;

    afterUpdate(() => {
		map_offset = mapContainer.offsetTop - innerHeight / 2  ;
        dev = (devContainer.offsetTop - innerHeight / 2) - 100;
        visib = (miniHeaderContainer.offsetTop - innerHeight / 2 + (hhh / 2)  + 100);
        miniClose = devlast.offsetTop - innerHeight / 2  + 300;
	});

    $:{
        if(  map_offset <= oh){
            flag = true
        }
        else{
            flag = false
        }
    }

    $:{
        if(  dev <= oh ){
            flag2 = true
        }
        else{
            flag2 = false
        }
        if ( (dev + 600) <= oh){
            flag3 = true
        }
        else{
            flag3 = false
        }
    }

    $:{
        if (visib <= oh){
            miniHeaderFlag = true
        }
        if ( visib > oh  || miniClose <= oh ){
            miniHeaderFlag = false
        }
    }
    let hh = false
    setTimeout(() => {
        setTimeout(() => {
            hh = true
        }, "200");

    }, "200");
    
    let personal = [
        {
            id:1,
            name:"Павел Калашников",
            func:"Сооснователь DA&BR, Коммерческий директор",
            sity:"г.Москва, Россия"
            
        },
        {
            id:2,
            name:"Максим Яковлев",
            func:"Сооснователь DA&BR,Технический директор",
            sity:"г.Будва, Черногория"
        },
        {
            id:3,
            name:"Иван Киселев",
            func:"Front-end разработчик",
            sity:"г.Москва, Россия"
        },
        {
            id:4,
            name:"Виталий Яковлев",
            func:"Front-end разработчик",
            sity:"Калифорния, США"
        },
        {
            id:5,
            name:"Олег Бочко",
            func:"Front-end разработчик",
            sity:"г.Волковыск, Беларусь"
        },
        {
            id:6,
            name:"Валерий Степаненко",
            func:"Back-end разработчик",
            sity:"г.Санкт-Петербург, Россия"
        },
        {
            id:7,
            name:"Никита Корчагин",
            func:"Продуктовый дизайнер",
            sity:"г.Сланцы, Россия"
        },
        {
            id:8,
            name:"Дамир Багжанов",
            func:"Project-manager",
            sity:"г.Москва, Россия"
        },

    ]

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
            el.scrollIntoView({
            behavior: 'smooth'
        });
    }
    

    
</script>
<svelte:window bind:scrollY={oh} bind:innerHeight bind:innerWidth/>
<div class="main_content">
    {#if miniHeaderFlag}
        <div class="mini_header" transition:fly={{ y: 100, duration: 500 }}>
            <div class="mini_header_content">
                <div>
                    <a href="#" class="mini_logo"><img src="{ mini_logo }" alt="" draggable="false"></a>
                </div>
                <div class="nav_menu">
                    <a href="#owners" class="nav_link" on:click|preventDefault={scrollIntoView}>О нас</a>
                    <a href="#stages" class="nav_link" on:click|preventDefault={scrollIntoView}>Этапы </a>
                    <a href="#project" class="nav_link" on:click|preventDefault={scrollIntoView}>Проекты</a>
                    <a href="#comrads" class="nav_link" on:click|preventDefault={scrollIntoView}>Команда</a>
                </div>
                <div class="">
                    <button class="main_wt_btn" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow; $modalsStore.showModal=true}}}>Разработать MVP</button>
                </div>
            </div>
        </div>
    {/if}
    
    <section class="first_sec">
        <div class="first_block">
            <p class="big_title">Разработаем мобильное приложение для бизнеса от 5 млн ₽ за 2 месяца</p>
            <p class="main_sm">Окупится в течение 6 месяцев и принесет более 35% повторных продаж</p>
            <div class="">
                <div class="">
                    <button class="main_wt_btn" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow; $modalsStore.showModal=true}}}>Разработать тестовый вариант</button>
                    <a href="#" class="seti"><Icon icon="mdi:youtube" color="white" width="25" height="25"/></a>
                    <a href="#" class="seti"><Icon icon="mingcute:telegram-fill" color="white" width="25" height="25"  /></a>
                </div>
                <div class="dop_info">
                    <p class="main_sm_gray">*По данным внутренних исследований</p>
                </div>
            </div>
        </div>
        <div class="first_img">
            <img src="{ block_bg }" alt="" draggable="false">
        </div>
    </section >
    <section bind:this={miniHeaderContainer} >
        
        <div class="second_block">
            <div class="blocks_w">
                <div class="info_block">
                    <p class="title">Мы создаем продукты, которые эффективны для продвижения</p>
                    <p class="main_sm">Наши специалисты сертифицированы израильской компанией AppsFlyer</p>
                    <div class="">
                        <button class="main_tr_btn" >
                            Сертификат AppsFlyer
                        </button>
                    </div>
                    
                </div>
                <div class="info_block">
                    <p class="title">Прогноз выручки от внедрения приложения в Ваш бизнес</p>
                    <p class="main_sm">Подставьте данные в таблицу и узнайте прогноз для приложения</p>
                    <div class="">
                        <button class="main_tr_btn" on:click={() => {{$modalsStore.modalWindow = CalcModalWindow ; $modalsStore.showModal=true}}}>
                            Калькулятор продаж
                        </button>
                    </div>
                    
                </div>
            </div>
            <div class="info_block test">
                <div class="">
                    <p class="title">Даем гарантию на сроки создания</p>
                    <p class="main_sm">Устанавливаем четкие сроки и фиксируем размер неустойки за каждый факт просрочки в договоре</p>
                    <div class="">
                        <button class="main_tr_btn" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow ; $modalsStore.showModal=true}}}>
                            Рассчитать стоимость
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section >
    <section id="owners">
        <div class="third_block" >
            <div class="">
                <p class="title">Подход к разработке</p>
                <p class="main_sm">«Мы делаем проекты, которые будут увеличивать доход наших клиентов. Это обусловлено тем, что создаем не просто функциональные приложения, а еще и эффективные для продвижения»</p>
                <div class="">
                    <button class="main_wt_btn">
                        Смотреть интервью
                    </button>
                </div>
            </div>
            <div class="owners" >
                <img   src="{ owners }" alt="" draggable="false">
                <div class="owners_info">
                    <div class="">
                        <p class="owner_info_txt">Основатели</p>
                        <p class="owner_info_txt">Павел Калашников и Максим Яковлев</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section  bind:this={mapContainer} bind:clientHeight={ hhh }>
        <div class="fourth_block">
            <div class="fourth_block_title">
                <p class="title">Средняя оценка наших приложений – 4.7</p>
                <p class="main_sm">Более 200 пользователей оценили наши приложения в App Store и Google Play</p>
                <div class="">
                    <button class="main_tr_btn">
                        Читать отзывы
                    </button>
                </div>
            </div>
            <div class="feedback">
                <div class="row" >
                    {#if flag}
                        <div class="comment" transition:fly={{ y: -200, duration: 1000 }}>
                            <div class="comment_title">
                                <div class="ava">

                                </div>
                                <div class="comment_main">
                                    <div class="comment_text">
                                        <p class="comment_name">Анна</p>
                                    </div>
                                    
                                    <div class="comment_stats">
                                        <img src="{ stars }" alt="" draggable="false">
                                        <p class="gr_sm">9 августа 2023 г.</p>
                                        <span>
                                            <div class="point"></div>
                                            <p class="gr_sm">Bibiptrip</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_text">
                                <p>Регулярно пользуюсь этим сервисом. Очень удобно, что можно самостоятельно создавать поездки. Также я выбираю сама места в авто. Приложение не тормозит в процессе использования.</p>
                            </div>
                        </div>
                    {/if}
                    
                </div>
                <div class="row">
                    {#if flag}
                        <div class="comment" transition:fly={{ x: -200, duration: 1000 }}>
                            <div class="comment_title">
                                <div class="ava">

                                </div>
                                <div class="comment_main">
                                    <div class="comment_text">
                                        <p class="comment_name">Ирина</p>
                                    </div>
                                    
                                    <div class="comment_stats">
                                        <img src="{ stars }" alt="" draggable="false">
                                        <p class="gr_sm">9 августа 2023 г.</p>
                                        <span>
                                            <div class="point"></div>
                                            <p class="gr_sm">BeLoved</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_text">
                                <p>Удобное приложение для двоих. Напоминания, множество целей и совместный архив. Много интересных фишек)</p>
                            </div>
                        </div>
                    {/if}
                </div>
                <div class="row">
                    {#if flag}
                        <div class="comment" transition:fly={{ y: 200, duration: 1000 }}>
                            <div class="comment_title">
                                <div class="ava">

                                </div>
                                <div class="comment_main">
                                    <div class="comment_text">
                                        <p class="comment_name">Ирина</p>
                                    </div>
                                    
                                    <div class="comment_stats">
                                        <img src="{ stars }" alt="" draggable="false">
                                        <p class="gr_sm">9 августа 2023 г.</p>
                                        <span>
                                            <div class="point"></div>
                                            <p class="gr_sm">Bibiptrip</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_text">
                                <p>Неоднократно пользовалась услугами этого через это приложение и остались только положительные впечатления. Водители адекватные, вежливые, не навязчивые. Я всем довольна.</p>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>
    <section id="project">
        <Project />
    </section>
    <section>
        <div class="nda">
            <div class="nda_block"
            style="
            background-image: url({test_bg_value});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            ">
                <div class="">
                    <p class="title">Мы заботимся о безопасности вашей идеи</p>
                    <p class="main_sm">Поэтому готовы подписать договор о неразглашении (NDA), только после этого приступим к созданию тестового варианта и приложения в целом</p>
                </div>
                <div class="">
                    <button class="main_wt_btn">Подробнее</button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="core_values">
            <p class="title gray_abs">Ключевые ценности</p>
            <div class="core_values_info">
                <div class="">
                    <p class="title">Держим в курсе процесса разработки</p>
                    <p class="main_sm">В начале каждого рабочего дня заказчик по желанию может получать план работ по проекту на день</p>
                </div>
                <div class="">
                    <p class="title">Помощь в презентации проекта</p>
                    <p class="main_sm">Мы готовы присутствовать на встречах с инвесторами наших клиентов, чтобы донести ценность задумки приложения</p>
                </div>
            </div>
            <div class="core_values_image">
                <img src="{ core_value_bg }" alt="">
            </div>
        </div>
    </section>
    <section>
        <div class="development_process">
            <p class="title">Процесс разработки продукта</p>
            <div class="dev_process_block">
                {#if hh }
                    <ImageCompare 
                    before="{slide_img_2}"
                    after="{slide_img_1}"
                    contain={true}
                    offset={ 0.3 }
                    >
                    </ImageCompare>
                {/if}
                
            </div>
        </div>
    </section>
    <section  bind:this={devContainer} id="stages">
        <div class="development_stages">
            <p class="title">Этапы разработки</p>
            <div class="blocks">
                <div class="stages_row">
                    {#if flag2}
                        <div class="column_block" transition:fly={{ y: 200, duration: 1000 }}>
                            <div class="column_block_img">
                                <img src="{ designer_bg }" alt="">
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Дизайн</p>
                                    <ul>
                                        <li class="main_sm">— Сбор информации о проекте</li>
                                        <li class="main_sm">— Генерация сценария взаимодействия с продуктом</li>
                                        <li class="main_sm">— Разработка прототипа</li>
                                        <li class="main_sm">— Отрисовка дизайн-макета в Figma</li>
                                    </ul>
                                </div>
                                <button class="main_gr_btn">Срок от 10 дней</button>
                            </div>                
                        </div>
                        <div class="column_block" transition:fly={{ y: 200, duration: 1500 }}>
                            <div class="column_block_img">
                                <img src="{ verst_bg  }" alt="">
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Вёрстка</p>
                                    <ul>
                                        <li class="main_sm">— Оживляем приложение на основе дизайн-проекта</li>
                                        <li class="main_sm">— Оптимизируем интерфейс</li>
                                        <li class="main_sm">— Подготавливаем приложение к серверной части</li>
                                    </ul>
                                </div>
                                <button class="main_gr_btn">Срок от 15 дней</button>
                            </div>                
                        </div>
                        <div class="column_block" transition:fly={{ y: 200, duration: 2000 }}>
                            <div class="column_block_img">
                                <img src="{ function_bg }" alt="">
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Функционал</p>
                                    <ul>
                                        <li class="main_sm">— Применяем архитектуру с возможностью масштабирования</li>
                                        <li class="main_sm">— Используем уже протестированные решения, ускоряя разработку и повышая качество приложения</li>
                                    </ul>
                                </div>
                                <button class="main_gr_btn">Срок от 15 дней</button>
                            </div>                
                        </div>
                    {/if}
                    
                </div>
                <div class="stages_column">
                    {#if flag3}
                        <div class="row_block" transition:fly={{ y: 200, duration: 1000 }}>
                            <div class="row_block_content">
                                <div class="test_img">
                                    <img src="{ test_bg }" alt="">
                                </div>
                                <div class="stages_test_text">
                                    <p class="title">Тестирование</p>
                                    <ul>
                                        <li class="main_sm">— Вносим правки и исправляем ошибки</li>
                                        <li class="main_sm">— Решаем любые проблемы, связанные с публикацией: шифрование и подозрение в рекламе, возрастной цензор</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="test_btn">
                                <button class="main_gr_btn">Срок от 5 дней</button>
                            </div>
                        </div>
                    {/if}
                    
                </div>
            </div>
        </div>
    </section>
    <section id="comrads">
        <div class="comrads">
            <p class="title">Команда</p>
            <div class="command">
                {#each personal as  person (person.id)}
                    <div class="person_card">
                        <img src="{ person_test  }" alt="">
                        <div class="personinfo">
                            <p class="main_sm">{ person.name }</p>
                            <p class="main_sm_thin">{ person.func }</p>
                            <p class="main_sm_thin">{ person.sity }</p>
                        </div>
                    </div>
                {/each}
                

            </div>
        </div>
    </section>
    <section>
        <Slider />
    </section>
    <section bind:this={devlast} >
        <div class="application">
            <div class="application_main">
                <div class="apl_title">
                    <p class="title">Разработаем приложение с минимальным функционалом бесплатно</p>
                    <p class="main_sm">Вы сможете ознакомиться с интерфейсом или презентовать его инвесторам</p>
                </div>
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
                    <button class="main_wt_btn">Разработать тестовый вариант</button>
                    <span class="apl_agr">Отправляя заявку, вы соглашаетесь с <a href=""> Политикой Конфиденциальности</a></span>
                </form>
            </div>
            <div class="application_img">
                <img src="{ apl_bg }" alt="">
            </div>
        </div>
    </section>
</div>

<style>
    .nda_block{
        display: flex;
        justify-content: space-between;
        padding: 32px;
        flex-direction:column;
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        height:401px;
    }
    .apl_form .main_wt_btn{
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
    .apl_form{
        display: flex;
        flex-direction: column;
        row-gap: 25px;
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
    .application{
        display: flex;
        justify-content: space-between;
        margin-bottom: 200px;
    }
    .application_main{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
    }
    .mini_header{
        position: fixed;
        bottom: 25px;
        max-width: 1120px;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 64px;
        z-index: 99;
    }
    .mini_header_content{
        width: 100%;
        max-width: 780px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 36px;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: space-around;

    }
    .mini_logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main_content{
        max-width: 1120px;
        margin: auto;
    }
    .big_title{
        font-size: 56px;
        font-weight: 700;
        line-height: 76px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    
    .main_sm_gray{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        color: var(--graywhite-color);
    }
    .first_block{
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .first_block div:last-child{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 12px;
    }
    .first_block div:last-child div:first-child{
        display: flex;
        align-items: center;
        column-gap: 16px;
    }
    .first_sec{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
    }
    .second_block{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        padding-top: 100px;
    }
    .second_block div:first-child{
        display: flex;
        column-gap: 20px;
    }
    
    .info_block{
        padding: 40px;
        border-radius: 36px;
        border: 1px solid var(--brightgray-color);
        display: flex;
        flex-direction: column;
        row-gap: 4px;
    }
    .info_block .main_tr_btn{
        margin-top: 16px;
    }
    .test{
        height: 600px;
        display: flex;
        align-items: center;
    }
    .test div:first-child{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        justify-content: center;
        align-items: center;
        max-width: 530px;
    }
    .test p{
        text-align: center;
    }
    .owners img{
        width: 100%;
        object-fit: cover;

    }
    .owners{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding-left: 100px;
        flex-direction: column;
    }
    .owners_info{
        position: relative;
        width: 530px;
        height: 35px;
    }
    .owners_info div{
        position: absolute;
        top: -130px;
        background-color: rgba(0, 0, 0, 0.25);
        width: 530px;
        height: 35px;
        border: 2px solid var(--brightgray-color);
        border-radius: 36px;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 32px;
    }
    .owner_info_txt{
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--white-color);

    }
    .third_block{
        display: flex;
        align-items: center;
        height: 550px;
        position: relative;
        margin: 277px 0px;
        justify-content: space-between;
    }
    .third_block div:first-child:not(.owners_info div){
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        width: 40%;
    }
    .third_block .main_wt_btn{
        margin-top: 12px;
    }
    .fourth_block{
        display: flex;
        justify-content: space-between;
        margin: 200px 0;
    }
    .fourth_block_title{
        max-width: 470px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        justify-content: center;
    }
    .fourth_block .main_tr_btn{
        margin-top: 12px;
    }
    .apl_title{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .core_values_info div{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .comment{
        padding: 32px;
        border: 1px solid var(--brightgray-color);
        border-radius: 36px;
        width: 445px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .feedback{
        width: 550px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .feedback div:nth-child(2){
        display: flex;

    }
    .row{
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: end;
        height: 208px;
    }
    .feedback .row:nth-child(2){
        justify-content: start;
        align-items: start;
    }
    .comment_text{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--whitegay-color);
    }
    .ava{
        width: 56px;
        height: 56px;
        border: 1px solid var(--brightgray-color);
        border-radius: 50px;
    }
    .comment_title{
        display: flex;
        column-gap: 12px;

    }
    .comment_stats{
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
    }
    .comment_main{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
    .gr_sm{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--graywhite-color);
    }
    .point{
        display: flex;
        align-items: center;
        justify-content: center;
        content: "";
        width: 3px;
        height: 3px;
        border-radius: 30px;
        background-color: var(--graywhite-color);
    }
    .comment_stats span{
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .nda{
        padding: 200px 0;
    }
    .core_values_image{
        display: flex;
        align-items: stretch;
        justify-content: stretch;
    }
    .core_values{
        display: flex;
        position: relative;
        column-gap: 150px;
        margin-bottom: 200px;
    }
    .gray_abs{
        position: absolute;
        top: 0;
        left: 0;
        color: var(--darkgray-color);
    }
    .core_values_info{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 32px;
    }
    .dev_process_block{
        overflow: hidden;
        border-radius: 36px;
        border: 1px solid var(--brightgray-color);
        height: 550px;
        
    }
    .development_process{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        margin-bottom: 200px;
    }
    .column_block_img{
        max-width: 360px;
        max-height: 350px;
    }
    .column_block{
        border: 2px solid var(--brightgray-color);
        max-width: fit-content;
        border-radius: 36px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        
    }
    .column_info{
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        height: 100%;
        row-gap: 30px;
    }
    li{
        margin-bottom: 15px;
    }
    li:first-child{
        margin-top: 15px;
    }
    .column_info div:first-child{
        max-width: 300px;
    }
    .stages_row{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .blocks{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        height: 1080px;
    }
    .row_block{
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        display: flex;
        flex-direction: column;
    }
    .row_block_content{
        display: flex;
    }
    .stages_test_text{
        padding: 30px 30px 30px 0;
        width: 50%;
    }
    .test_img{
        width: 100%;
    }
    .test_img img{
        width: 100%;
    }
    .test_btn{
        margin: 0 30px 30px 30px;
    }
    .development_stages{
        margin-bottom: 200px;
    }
    .comrads{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        margin-bottom: 200px;
    }
    .test_img{
        overflow: hidden;
    }
    .row_block{
        overflow: hidden;
    }
    .command{
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(265px, 265px));
        align-items: center;
        justify-content: space-between;
        row-gap: 30px;
    }
    .person_card{
        max-width: 300px;
        height: 365px;
        position: relative;
    }
    .person_card img{
        height: 100%;
    }
    .personinfo{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        padding: 20px;
    }

    @media(max-width:1180px){
        section{
            margin: 0 32px;
        }
        .stages_row{
            column-gap: 12px;
        }
    }
    @media(max-width:1080px){
        .fourth_block_title{
            max-width: 40%;
        }
        .big_title{
            font-size: 48px;
            font-weight: 700;
            line-height: 66px;
            letter-spacing: 0em;
            text-align: left;
        }
        .feedback .row:nth-child(2){
            justify-content: end;
            align-items: end;
        }
    }
    @media(max-width:1000px){
       .application_img{
            display: none;
       }
       .application{
        justify-content: center;
       }
        .application_main{
            row-gap: 32px;
            width: 70%;
        }
        .third_block{
            flex-direction: column;
            margin-top: 100px;
            row-gap: 120px;
        }
        .owners_info div{
            width: 100%;
            top: -150px;
        }
        .owners{
            position: unset;
            display: flex;
            justify-content: center;
            padding-left: 0;
        }
        .third_block div:first-child:not(.owners_info div){
            width: 70%;
        }
        .fourth_block{
            padding-top: 200px;
        }

    }
    @media(max-width:900px){
        .core_values{
            column-gap: 32px;
        }
        .command{
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }
        .fourth_block{
            flex-direction: column;
            row-gap: 32px;
        }
        .feedback{
            width: 100%;
        }
        .feedback .row:nth-child(2){
            align-items: baseline;
            justify-content: start;
        }
        .row_block_content{
            flex-direction: column;
        }
        .stages_test_text{
            padding: 32px;
            width: 100%;
        }
        .blocks{
            height: 2680px;
        }
        .stages_row{
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
        }
        .fourth_block_title{
            max-width: 100%;
        }
    }
    @media(max-width:850px){
        .seti{
            display: none;
        }
    }
    @media(max-width:800px){
        .mini_header_content{
            margin: 0 32px;
        }
        .owners_info div{
            width: 500px;
        }
        .first_block div:last-child{
            flex-direction: column;
            row-gap: 32px;
            align-items: baseline;
        }
        .core_values{
            flex-direction: column;
            row-gap: 32px;
        }
        .core_values_info{
            margin-top: 80px;
            justify-content: center;
            width: 100%;
        }
        .core_values_image{
            width: 100%;
            justify-content: center;
        }
        .blocks_w{
            flex-direction: column;
            row-gap: 20px;
        }
    }
    @media(max-width:700px){
        .mini_header_content .nav_menu{
            column-gap: 10px;
        }
        .mini_logo{
            display: none;
        }
        .big_title{
            font-size: 34px;
            line-height: 38.25px;
        }
        .nda_block div:first-child{
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 12px;
        }
        .nda_block{
            height: 500px;
        }
        .third_block{
            flex-direction: column;
            margin-top: 100px;
            row-gap: 20px;
        }
    }
    @media(max-width:600px){
        .application_main{
            row-gap: 32px;
            width: 100%;
        }
        .mini_logo{
            display: flex;
        }
        .mini_header_content .nav_menu{
            display: none;
        }
        .fourth_block{
            margin-top: 0;
            padding-top: 0;
            row-gap: 60px;
        }
        .fourth_block_title{
            max-width: 100%;
        }
        .owners_info div{
            width: 100%;
            top: -110px;
        }
        .owners_info{
            width: 100%;
        }
        .owners{
            display: none;
        }
        .third_block{
            height: fit-content;
            margin-bottom: 100px;
            align-items: baseline;
        }
    }
    @media(max-width:428px){
        .second_block{
            flex-direction: column-reverse;
            row-gap: 20px;
        }
        .second_block div:not(.info_block){
            flex-direction: column;
            row-gap: 20px;
        }
        
        .first_img{
            display: none;
        }
        .third_block{
            display: none;
        }
        .fourth_block{
            flex-direction: column;
            row-gap: 120px;
            margin-bottom: 60px;
        }
        .feedback{
            width: 100%;
            height: 100%;
            row-gap: 20px;
        }
        .core_values{
            flex-direction: column;
            row-gap: 32px;
        }
        .blocks{
            height: 2900px;
        }
        .stages_row{
            flex-direction: column;
            row-gap: 20px;
        }
        .row_block_content{
            flex-direction: column;
        }
        .column_block{
            max-width: unset;
            
        }
        .column_block_img{
            max-width: unset;
        }
        .column_block_img img{
            width: 100%;
        }
        .person_card{

            max-width: unset;
            display: flex;
            object-fit: cover;
        }
        .command{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .person_card img{
            height: 365px;
            object-fit: fill;
        }
        .big_title{
            font-size: 28px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;

        }
        .first_block div:last-child:not(.dop_info){
            flex-direction: column;
            row-gap: 8px;
            margin-top: 24px;
        }
        .first_block div:last-child div:first-child{
            width: 100%;
        }
        .seti{
            display: none;
        }
        .row{
            height: fit-content;
        }
        .comment_main{
            width: 80%;
        }
        .nda_block{
            height: unset;
        }
        .core_values_info{
            margin-top: 80px;
            width: 100%;
        }
        .core_values_info div{
            display: flex;
            flex-direction: column;
            row-gap: 12px;
        }
        .development_process{
            display: none;
        }
        .development_stages{
            margin-bottom: 0;
        }
        .stages_test_text{
            padding: 30px;
            width: 100%;
        }
        .test_img{
            height: 235px;
        }
        .test_img img{
           height: 100%;
           width: 100%;
           object-fit: cover;
        }
        .application_img{
            display: none;
        }
        .application{
            width: 100%;
            margin-bottom: 40px;
        }
        .application_main{
            width: 100%;
            row-gap: 60px;
        }
        .apl_title{
            display: flex;
            flex-direction: column;
            row-gap: 4px;
            
        }
        .apl_title .title{
            font-size: 24px;
        }
        .mini_header{
            padding: 0 32px;
        }
        .mini_header .nav_menu{
            display: none;
        }
        .fourth_block{
            margin-top: 60px;
        }
        .nda_block{
            height: 527px;
        }
        .nda_block .main_wt_btn{
            display: inline;
        }
        .comment{
            padding: 25px;
        }

        .comment_title{
            align-items: center;
        }
        .nda_block{
            row-gap: 52px;
        }
        .blocks_w{
            flex-direction: column;
            row-gap: 20px;
        }
        
    }
    @media(max-width:400px){
        .comrads{
            margin-top: 200px;
        }
        .comment_main{
            width: 70%;
        }
        .info_block{
            padding: 25px;
        }
        .nda{
            padding-bottom: 100px;
        }
        .mini_header{
            padding: 0;
        }
        
    }
    @media(max-width:350px){
        .core_values_info{
            margin-top: 100px;
        }
        .mini_header_content{
            margin: 0 12px;
        }
    }
    @media(max-width:330px){
        .comrads{
            margin-top: 360px;
        }
        .nda_block{
            height: fit-content;
            padding: 25px;
        }
    }
    @media(max-width:309px){
        .nda_block{
            padding: 20px;
        }
    }
</style>