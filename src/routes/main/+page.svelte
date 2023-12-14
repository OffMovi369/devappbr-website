<script>
    import Icon from '@iconify/svelte'
    import block_bg from "$lib/assets/block_bg.png"
    import owners2 from "$lib/assets/owners2.png"
    import { afterUpdate } from 'svelte';
    import { fly } from 'svelte/transition'
    import { slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
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
    import guarantee from "$lib/assets/guarantee.png"
    import comrads_link_bg from "$lib/assets/cd_link_bg.png"
    import guarantee_sm from "$lib/assets/guarantee_sm.png"
    import comand_ling_bgsm from "$lib/assets/comand_ling_bg.png"
    import big_bg from "$lib/assets/big_bg.png"
    import feedback from "$lib/assets/feedback.png"


    import com1 from "$lib/assets/commets/comment1.png"
    import com2 from "$lib/assets/commets/comment2.png"
    import com3 from "$lib/assets/commets/comment3.png"

    import pers1 from "$lib/assets/personal/pers1.png"
    import pers2 from "$lib/assets/personal/pers2.png"
    import pers3 from "$lib/assets/personal/pers3.png"
    import pers4 from "$lib/assets/personal/pers4.png"
    import pers5 from "$lib/assets/personal/pers5.png"
    import pers6 from "$lib/assets/personal/pers6.png"
    import own_2 from "$lib/assets/own_2.png"

    import modalsStore from "$lib/client/modalsStore";
    import AplicModalWindow from './AplicModalWindow.svelte';
    import CalcModalWindow from './CalcModalWindow.svelte';

    import { useLazyImage as lazyImage } from 'svelte-lazy-image';


    import Project from './project.svelte';
    import Slider from './slider.svelte';

    import { imask } from '@imask/svelte';
    import slide_img_1 from "$lib/assets/slide_img_1.png"
    import slide_img_2 from "$lib/assets/slide_img_2.png"
    import SurveyModalWindow from './SurveyModalWindow.svelte';

    export let data;

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
    let innerWidth;
    
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

   

    let gua_url;

    afterUpdate(() => {
		map_offset = mapContainer.offsetTop - innerHeight / 2  + 100;
        dev = (devContainer.offsetTop - innerHeight / 2) + 100;
        visib = (miniHeaderContainer.offsetTop - innerHeight / 2 + (hhh / 2)  + 100);
        miniClose = devlast.offsetTop - innerHeight / 2  + 300;
	});

    $:{
        if(  map_offset <= oh +200){
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
    
    $:{
        if(innerWidth<=600){
            gua_url = guarantee_sm
        }
        else{
            gua_url = guarantee
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
            name:"Валерий Степаненко",
            func:"Back-end разработчик",
            sity:"г.Санкт-Петербург, Россия",
            url:pers1
        },
        {
            id:2,
            
            name:"Иван Киселев",
            func:"Front-end разработчик",
            sity:"г.Москва, Россия",
            url:pers2
        },
        {
            id:3,
            name:"Олег Бочко",
            func:"Front-end разработчик",
            sity:"г.Волковыск, Беларусь",
            url:pers3
        },
        {
            id:4,
            name:"Никита Корчагин",
            func:"Продуктовый дизайнер",
            sity:"г.Сланцы, Россия",
            url: pers4
            
        },
        {
            id:5,
            name:"Виталий Яковлев",
            func:"Front-end разработчик",
            sity:"г.Лос-Анджелес, США",
            url:pers5
        },
        
        {
            id:6,
            name:"Айрат Гайфуллин",
            func:"Бизнес-ассистент",
            sity:"г.Октябрьский, Россия",
            url:pers6
        }    

    ]

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
            el.scrollIntoView({
            behavior: 'smooth'
        });
    }

    
    let dropactive1=false;
    let dropactive2=false;
    let dropactive3=false;
    let dropactive4=false;



    let visitShow = true
    let mobbileVistit = false
    $:{
        if(innerWidth<=960){
            mobbileVistit = true
        }
        else{
            mobbileVistit = false
        }
    }
    
</script>
<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>
<svelte:window bind:scrollY={oh} bind:innerHeight bind:innerWidth />

{#if miniHeaderFlag}
    <div  class:mobbileVistit={mobbileVistit} class="visit" transition:fly={{y:100,duration: 500 }}>
        <div class="visit_content" >
            {#if visitShow}
                <div class="close" in:fade={{ delay: 200 }} out:fade>
                    <button class="main_sm" on:click={()=>{visitShow = !visitShow}}><i class="mi mi-close"></i>Закрыть</button>
                </div>
                <div class="mobile_content"  in:fade={{ delay: 200 }} out:fade>
                    <div class="studio_info" in:fade={{ delay: 200 }} out:fade> 
                        <div class="own_img">
                            <img src="{own_2}" alt="">
                        </div>
                        <div class="main_sm own_name">
                            <p>Максим Яковлев</p>
                        </div>
                        <div class="main_sm short_info">
                            <p>Добро пожаловать в нашу студию разработки. Мы будем рады реализовать именно Ваш проект</p>
                        </div>
                    </div>
                    <div class="studio_number" in:fade={{ delay: 200 }} out:fade>
                        <p><a href="tel:+79939009646">8 993 900 96-46</a></p>
                    </div>
                </div>
            {:else}
                <button class="visit_closed" on:click={()=>{visitShow = !visitShow}} in:fade={{ delay: 200 }} >
                    <img src="{own_2}" alt="">
                </button>
            {/if}
        </div>
    </div>
{/if}


<div class="main_content">
    {#if miniHeaderFlag}
        <div class="mini_header" id="mini_header">
            <div class="mini_header_content" transition:fly={{y:100,duration: 500 }}>
                <div>
                    <a href="#" class="mini_logo"><img src="{ mini_logo }" alt="" draggable="false" use:lazyImage={{ threshold: 0.5 }}></a>
                </div>
                <div class="nav_menu">
                    <a href="#owners" class="nav_link" on:click|preventDefault={scrollIntoView}>О нас</a>
                    <a href="#stages" class="nav_link" on:click|preventDefault={scrollIntoView}>Этапы </a>
                    <a href="#project" class="nav_link" on:click|preventDefault={scrollIntoView}>Проекты</a>
                    <a href="#comrads" class="nav_link" on:click|preventDefault={scrollIntoView}>Команда</a>
                </div>
                <div class="">
                    
                    <button class="main_wt_btn" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow; $modalsStore.showModal=true; $modalsStore.data = {type:"Разработать MVP", utm:data.utm}}}}>Разработать MVP</button>
                </div>
            </div>
        </div>     
    {/if}

    
    <section class="first_sec">
        <div class="first_block">
            <p class="big_title">Разработаем мобильное приложение для бизнеса от 1 млн ₽ за 2 месяца</p>
            <p class="main_sm"><b><span>Окупится</span></b>  в течение 6 месяцев и <b><span>принесет</span></b> более 35% повторных продаж</p>
            <div class="fb_link">
                <div class="">
                    <button class="main_wt_btn" on:click={() => {{$modalsStore.modalWindow = AplicModalWindow; $modalsStore.showModal=true;  $modalsStore.data = {type:"Разработать MVP", utm:data.utm}}}}>Разработать тестовый вариант бесплатно<span class="animate_line"></span></button>
                </div>
                <div class="dop_info">
                    <p class="main_sm_gray">*По данным внутренних исследований</p>
                </div>
            </div>
        </div>
        <div class="first_img">
            <img  data-src ="{ block_bg }" alt =" foobar"  use:lazyImage={{ threshold: 0 }}  draggable="false">
        </div>
    </section >
    <section bind:this={miniHeaderContainer} >
        <div class="second_block">
            <div class="blocks_w">
                <div class="info_block">
                    <p class="title">Мы создаем продукты, которые эффективны для продвижения</p>
                    <p class="main_sm">Наши специалисты сертифицированы израильской компанией AppsFlyer</p>
                    <div class="info_div_link">
                        <a href="https://drive.google.com/file/d/1LEPSJEmce4o4TSWILB0ADRt_i2Nii_FW/view?usp=sharing" class="main_tr_btn" target="_blank" >
                            Сертификат AppsFlyer
                        </a>
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
            <div class="info_block test" style="
            background-image: url({gua_url});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            ">
                <div class="">
                    <p class="title">Даем гарантию на сроки создания</p>
                    <p class="main_sm">Устанавливаем четкие сроки и фиксируем размер неустойки за каждый факт просрочки в договоре</p>
                    <div class="">
                        <a class="main_tr_btn" href="#showquiz-67637">Рассчитать стоимость</a>
                        <!-- <button class="main_tr_btn" on:click={() => {{$modalsStore.modalWindow = SurveyModalWindow; $modalsStore.showModal=true; $modalsStore.data = {type:"Рассчитать стоимость", utm:data.utm}}}}>
                            Рассчитать стоимость
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    </section >
    <section id="owners">
        <div class="third_block" >
            <div class="" >
                <p class="title">Подход к разработке</p>
                <p class="main_sm">«Мы делаем проекты, которые будут увеличивать доход наших клиентов. Это обусловлено тем, что создаем не просто функциональные приложения, а еще и эффективные для продвижения»</p>
                <div class="" style="height: 44px;display:flex;align-items:center">
                    <a class="main_wt_btn" href="https://www.youtube.com/watch?v=6PRUQQTS_J4" target="_blank" style="display: inline;">
                        Смотреть интервью
                    </a>
                </div>
            </div>
            <div class="owners" >
                <img  data-src ="{ owners2 }" alt =" foobar" draggable="false" use:lazyImage={{ threshold: 0.5 }}>
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
            <div class="fourth_block_title" style="background-image: url({feedback});
            background-size:cover;
            background-position:center;
            ">
                <div class="feeadback_title">
                    <p class="title">4,7 — средняя оценка в AppStore и Google Play</p>
                </div>
                <div class="">
                    <div class="count">
                        400+
                    </div>
                    <p class="main_sm">оценок на площадках</p>
                </div>
            </div>
            
                <div class="feedback" >
                    {#if flag}
                    <p class="title" transition:fly={{ y: 200, duration: 500 }}>Наши клиенты остаются довольными</p>
                    <div class="" transition:fly={{ y: 200, duration: 600 }}>
                        <p>91%</p>
                        <p>клиентов отмечают, что новое приложение увеличило продажи бизнеса</p>
                    </div>
                    <div class="" transition:fly={{ y: 200, duration: 700 }}>
                        <p>86%</p>
                        <p>готовы рекомендовать DA&BR в качестве разработчика</p>
                    </div>
                    <p class="feedbackps" transition:fly={{ y: 200, duration: 800 }} >*По данным внутренних исследований</p>
                    {/if}
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
            </div>
        </div>
    </section>
    <section id="core_values">
        <div class="core_values">
            <p class="title gray_abs">Ключевые ценности</p>
            <div class="core_values_info">
                <div class="">
                    <p class="title">Держим в курсе процесса разработки</p>
                    <p class="main_sm">В начале каждого рабочего дня заказчик, по желанию, может получать план работ по проекту на день</p>
                </div>
                <div class="">
                    <p class="title">Помощь в презентации проекта</p>
                    <p class="main_sm">Мы готовы присутствовать на встречах с инвесторами наших клиентов, чтобы донести ценность задумки приложения</p>
                </div>
            </div>
            <div class="core_values_image">
                <div class="image-shadow" style="background-image: url('{ core_value_bg }');"></div>
                <img  data-src ="{ core_value_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
            </div>
        </div>
    </section>
    <section>
        <div class="development_process">
            <p class="title">Процесс разработки продукта</p>
            <div class="dev_process_block">
                {#if hh }
                    <ImageCompare 
                    before="{slide_img_1}"
                    after="{slide_img_2}"
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
                                <img  data-src ="{ designer_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}  >
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Дизайн</p>
                                    <ul type="disc">
                                        <li class="main_sm">Сбор информации о проекте</li>
                                        <li class="main_sm">Генерация сценария взаимодействия с продуктом</li>
                                        <li class="main_sm">Разработка прототипа</li>
                                        <li class="main_sm">Отрисовка дизайн-макета в Figma</li>
                                    </ul>
                                </div>
                                <button class="main_gr_btn">Срок от 10 дней</button>
                            </div>                
                        </div>
                        <div class="column_block" transition:fly={{ y: 200, duration: 1500 }}>
                            <div class="column_block_img">
                                <img  data-src ="{ verst_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Вёрстка</p>
                                    <ul>
                                        <li class="main_sm">Оживляем приложение на основе дизайн-проекта</li>
                                        <li class="main_sm">Оптимизируем интерфейс</li>
                                        <li class="main_sm">Подготавливаем приложение к серверной части</li>
                                    </ul>
                                </div>
                                <button class="main_gr_btn">Срок от 15 дней</button>
                            </div>                
                        </div>
                        <div class="column_block" transition:fly={{ y: 200, duration: 2000 }}>
                            <div class="column_block_img">
                                <img  data-src ="{ function_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
                            </div>        
                            <div class="column_info">
                                <div class="">
                                    <p class="title">Функционал</p>
                                    <ul>
                                        <li class="main_sm">Применяем архитектуру с возможностью масштабирования</li>
                                        <li class="main_sm">Используем уже протестированные решения, ускоряя разработку и повышая качество приложения</li>
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
                                    <img  data-src ="{ test_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
                                </div>
                                <div class="stages_test_text">
                                    <p class="title">Тестирование</p>
                                    <ul>
                                        <li class="main_sm">Вносим правки и исправляем ошибки</li>
                                        <li class="main_sm">Решаем любые проблемы, связанные с публикацией: шифрование и подозрение в рекламе, возрастной цензор</li>
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
                        <img data-src ="{ person.url }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
                        <div class="personinfo">
                            <p class="main_sm">{ person.name }</p>
                            <p class="main_sm_thin">{ person.func }</p>
                            <p class="main_sm_thin">{ person.sity }</p>
                        </div>
                    </div>
                {/each}
                <div class="comrads_link">
                    <div class="comr_imd">
                        <img data-src ="{ big_bg }" alt =" foobar"  use:lazyImage={{ threshold: 0.5 }}>         
                    </div>
                    
                    <div class="crd_info">
                        <p class="title">Наши стажировки</p>
                        <div class="crd_link">
                            <a href="https://rarible.com/user/0x740b21ff585747f3bea017662a29bb840dfff28c/owned" class="main_wt_btn" target=»_blank»>Стажировки</a>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    <section>
        <!-- <Slider /> -->
        <div class="drop_info">
            <div class="drop_info_block">
                <div class="drop_header">
                    <button style="width: 100%; height:100%; text-align:start; justify-content:space-between; display:flex; align-items:center;" on:click={()=>{dropactive1 = !dropactive1}}>
                        <span class="main_sm" style="color: black;"><strong>➸  Откройте для себя Flutter</strong></span>
                        <i class="mi mi-chevron-down" class:mi_avtive={dropactive1}></i>
                    </button>
                    
                </div>
                {#if dropactive1 }
                    <div class="drop_content" transition:slide={{  duration: 1000, easing: quintOut}}>
                        Мы часто слышим от разработчиков, как сложно убедить менеджеров компании попробовать Flutter. Эта статья предназначена для:
                        <br>
                        <br>
                        <br>
                        <br>
                        ➸  заказчиков, которые хотят объяснить руководству компании преимущества использования Flutter.
                        <br>
                        <br>
                        ➸  предпринимателей, которые думают о создании собственного продукта на Flutter.
                        <br>
                        <br>
                        В этой статье также будут обсуждаться причины, по которым Flutter может не подойти для реализации конкретного приложения, что поможет вам принять правильное решение.
                        <br>
                        <br>
                        <br>
                        <strong>ЧТО ТАКОЕ Flutter?</strong>
                        <br>
                        <br>
                        Слоган «Flutter» состоит из четырёх частей, каждая из которых должна быть рассмотрена отдельно:
                        <br>
                        <br>
                        <strong>Создание приложения</strong>
                        <br>
                        <br>
                        <strong>Эстетика</strong>
                        <br>
                        <br>
                        <strong>Нативность</strong>
                        <br>
                        <br>
                        <strong>Рекордные сроки</strong>
                        <br>
                        <br>
                        <br>
                        <strong>СОЗДАНИЕ ПРИЛОЖЕНИЯ</strong>
                        <br>
                        <br>
                        «Flutter» заточен под разработку мобильных приложений для iOS и Android. Он имеет много общего с игровыми движками, такими как Unity или Unreal, которые также предоставляют собственные средства визуализации. Различие в том, что <em>Flutter используется для построения приложений, а не игр</em>
                        .
                        <br>
                        <br>
                        Постепенно приложения будут появляться и вне мобильных телефонов. Привычным станет доступ к приложениям сразу на нескольких устройствах, включая домашних ассистентов, интерактивные дисплеи в автомобилях, бытовую технику (например, холодильники), аксессуары и другие IoT-устройства).
                        <br>
                        <br>
                        Уже в 2017 году онлайн было зарегистрировано 8,4 млрд. таких устройств, а по прогнозу International Data Corporation, к 2020 году 
                        <em>их число превысит 30 млрд</em>
                        .
                        <br>
                        <br>
                        <strong>ЭСТЕТИКА</strong>
                        <br>
                        <br>
                        Согласно исследованиям, наличие привлекательного дизайна играет огромную роль. Если вы посмотрите на самые популярные мобильные приложения последних нескольких лет, вы увидите, что каждое из них имеет уникальное эстетическое оформление.
                        <br>
                        <br>
                        Всё больше компаний стремятся к тому, чтобы мобильные приложения соответствовали их корпоративному брендингу, точно так же, как сайт или веб-приложения. Это требует 
                        <em>высокого уровня кастомизации.</em>
                        <br>
                        <br>
                        <strong>НАТИВНОСТЬ</strong>
                        <br>
                        <br>
                        В мобильной разработке термин «нативное приложение» часто используется в отношении приложения, которое обращается напрямую к API платформы, используя конкретные языки. В таких фреймворках как React Native и Xamarin термин «нативный» означает, что они могут использовать виджеты платформы.
                        <br>
                        <br>
                        Более точное определение «нативности» в разработке выглядит так:
                        <br>
                        <br>
                        Предназначенный или встроенный в указанную систему, особенно в значении языка, связанного с данным процессором, компьютером или компилятором, а также программами, написанными на нём.
                        <br>
                        <br>
                        Преимуществ использования нативных приложений более чем достаточно: они быстрее запускаются и работают стабильнее и реже страдают от лагов или торможений. Более того, нативные приложения дают разработчику больше контроля над поведением его приложения.
                        <br>
                        <br>
                        <strong>РЕКОРДНЫЕ СРОКИ</strong>
                        <br>
                        <br>
                        «Flutter» хорош ещё и тем, что позволяет разрабатывать более качественные приложения в разы быстрее. 
                        <em>Самая попу</em>
                        лярная функция «Flutter» — это горячая  
                        <em>перезагрузка с сохранением состояния. </em>
                        Она поражает не только скоростью, но и сохранением состояния. Если вы меняете код глубоко в приложении, то после перекомпиляции вам не придётся вручную воссоздавать последнее состояние приложения, чтобы увидеть результат.
                        <br>
                        <br>
                        Такая перезагрузка стала возможной благодаря расширенной технологии компиляции, а также благодаря тому, что Flutter является нативным и построен на реактивно-обновляемых представлениях. Наряду с ускорением процессов многие разработчики отмечают, что Flutter серьёзно меняет их стиль работы: они могут создавать новые макеты в два счёта и вносить требуемые изменения прямо в 
                        <em>присутствии заказчиков.</em>
                        <br>
                        <br>
                        <br>
                        <strong>ЗАКЛЮЧЕНИЕ</strong>
                        <br>
                        <br>
                        И так
                        <strong>,</strong>
                        разобрав основы, мы пришли к выводу — «Flutter» ориентирован на будущее. Это парадигма программирования, помогающая создавать лучшие приложения с использованием таких невероятных функций, как супербыстрая перезагрузка с сохранением состояния. Благодаря этому он надолго сохранит свою актуальность вместе с развитием новых платформ.
                    </div>
                {/if}
                
            </div>
            <div class="drop_info_block" >
                <div class="drop_header">
                    <button style="width: 100%; height:100%; text-align:start; justify-content:space-between; display:flex; align-items:center;" on:click={()=>{dropactive2 = !dropactive2}}>
                        <span class="main_sm" style="color: black;"><strong>⚡︎Что мобильные приложения могут дать магазину?⚡︎</strong></span>
                        <i class="mi mi-chevron-down" class:mi_avtive={dropactive2}></i>
                    </button>
                </div>
                {#if dropactive2}
                    <div class="drop_content" transition:slide={{  duration: 1000, easing: quintOut}}>
                        Разрабатывая приложения для розничных компаний, постоянно сталкиваемся с возражениями со стороны клиентов: «Зачем нам мобильные приложения?» и уже накопилась база знаний, которой хотим поделиться.
                        <br>
                        <br>
                        <strong>МОБ. САЙТА ДОСТАТОЧНО ДЛЯ РАБОТЫ С АУДИТОРИЕЙ</strong>
                        <br>
                        <br>
                        Закрепившись на экране мобильного телефона через приложение, компания получает серьезную возможность взаимодействия с потребителем через push-уведомления.
                        <br>
                        <br>
                        <em>Можно возразить, мол push — сродни sms/email спаму. Да, это так, но есть одно существенное отличие — push достаточно просто отключить, если компания начинает им злоупотреблять.</em>
                        <br>
                        <br>
                        Мобильный сайт отстает по функциональности от основного сайта компании, выполняя роль интерактивной визитки. И мобильные приложения, которые тоже не столь функциональны, могут выступать либо его заменой или же добавлением.
                        <br>
                        <br>
                        <strong>АДАПТИВНЫЙ САЙТ ДЛЯ РАБОТЫ НА ВСЕХ УСТРОЙСТВАХ</strong>
                        <br>
                        <br>
                        Нужно отметить, что адаптивный сайт сложнее делать и затем поддерживать (а это более важно), чем просто мобильную версию сайта, хотя с точки зрения конечного клиента особой разницы нет.
                        <br>
                        <br>
                        При этом аргументы выше остаются в силе — лучше иметь как адаптивный сайт, так и приложение для достижения максимального результата.
                        <br>
                        <br>
                        <strong>ФУНКЦИОНАЛЬНОСТЬ МОБ. ПРИЛОЖЕНИЙ</strong>
                        <br>
                        <br>
                        Зачастую большинство компаний запускают сначала первые версии, достаточно функциональные для работы. Затем, по мере набора аудитории и поступления заказов из приложений, появляются списки доработок, которые доводят приложения до стандартов "продающего" сайта.
                        <br>
                        <br>
                        🪙 
                        <strong>НЕТ БЮДЖЕТА НА ПРОДВИЖЕНИЕ</strong>
                        <br>
                        <br>
                        У каждой компании есть уже рабочие механизмы поиска новых и удержания лояльных клиентов. Теперь к этим механизмам нужно добавить несколько фраз о приложениях.
                        <br>
                        <br>
                        Есть сайт в интернете? Разместите информацию на нем. Имеется группа в соц.сетях — упоминания там дадут установки. Есть магазин с входом на улице? — в нем полно мест, где можно разместить простейшую рекламу приложений.
                        <br>
                        <br>
                        <strong>ЗАКЛЮЧЕНИЕ</strong>
                        <br>
                        <br>
                        <em>Друзья, используйте комплексный подход при продвижении своего бизнеса, мобильные приложения отлично дополнят вашу систему продаж, а также выведут Ваш бизнес на новый уровень автоматизации.</em>
                    </div>
                {/if}
                
            </div>
            <div class="drop_info_block">
                <div class="drop_header">
                    <button style="width: 100%; height:100%; text-align:start; justify-content:space-between; display:flex; align-items:center;" on:click={()=>{dropactive3 = !dropactive3}}>
                        <span class="main_sm" style="color: black;"><strong>💵 Как внедрение мобильного приложения в бизнес может поднять продажи?</strong></span>
                        <i class="mi mi-chevron-down" class:mi_avtive={dropactive3}></i>
                    </button>
                </div>
                {#if dropactive3}
                    <div class="drop_content" transition:slide={{  duration: 1000, easing: quintOut}}>
                        <em>"Создание приложений – это шаг к повышению прибыли от бизнеса”</em>
                        <br>
                        <br>
                        Почему это будет работать?
                        <br>
                        <br>
                        Потребление мобильного интернета в мире выросло в два раза
                        <br>
                        <br>
                        Компания Ericsson опубликовала новый отчет Mobility Report с оценкой мирового рынка мобильного интернета – общий объём веб-трафика вырос в два раза. Такой рост спровоцирован увеличивающимся количеством безлимитных тарифов и просмотров видеоконтента, а также развитием 5G.
                        <br>
                        <br>
                        С четвертого квартала 2021 года по первый квартал 2022 года потребление мобильного трафика увеличилось на 10%. Объем ежемесячного трафика вырос до 93 Эб (1 эксабайт – 1,048 млн Тб).
                        <br>
                        <br>
                        <br>
                        🤯
                        <strong>Повышение продаж</strong>
                        <br>
                        <br>
                        После проведения глобального маркетингового исследования популярная международная платформа по работе с рекламой Criteo, были выведены следующие данные:
                        <br>
                        <br>
                        ⁃ Применение приложения помогает сосредоточить в нем 47% всех покупок;
                        <br>
                        ⁃ Конверсия больше чем на мобильных сайтах в три раза;
                        <br>
                        ⁃ Рост продаж в приложении составляет 22% по состоянию на год.
                        <br>
                        <br>
                        Эти данные обобщенные к 80 странам, которые участвовали в исследовании. Мобильные приложения гарантируют увеличение дохода благодаря:
                        <br>
                        <br>
                        ⁃ удобству использования;
                        <br>
                        ⁃ быстрой загрузке и реакции;
                        <br>
                        ⁃ возможности сохранять истории покупок;
                        <br>
                        ⁃ возможности покупать «на ходу», что характерно современным потребителям.
                        <br>
                        <br>
                        <br>
                        ⛓
                        <strong>Повторные покупки</strong>
                        <br>
                        <br>
                        С помощью приложений любимый магазин будет всегда рядом. Поэтому при появлении любой потребности будет удобнее воспользоваться телефоном. Чем поехать в торговые центры или искать подходящий товар по всему интернету. Это и повышает стимул к повторным покупкам.
                        <br>
                        <br>
                        <br>
                        🏁
                        <strong>Большой средний чек</strong>
                        <br>
                        <br>
                        Количество отказов на незавершенной стадии покупок намного меньше, а конверсия больше. Стоит выделить, что приложениями пользуются зарегистрированные пользователи, что позволит собирать про них аналитические данные и предлагать те продукты, которые нужны именно им.
                        <br>
                        <br>
                        Средние чеки увеличиваются в среднем на 30% после создания приложения.
                        <br>
                        <br>
                        По данным исследований Criteo показатели в разных сферах приобретают следующие краски:
                        <br>
                        <br>
                        🥂
                        <strong>Повышение лояльности</strong>
                        <br>
                        <br>
                        Если разработка комфортная и быстрая, то работа лояльности обеспечена. Самым простым примером достижения такой цели будет такси. Под вашу деятельность можно выбрать разные варианты лояльности:
                        <br>
                        ⁃ специальные предложения;
                        <br>
                        ⁃ скидки и бонусы;
                        <br>
                        ⁃ добавление дополнительного функционала.
                        <br>
                        <br>
                        🛠
                        <strong>Автоматизация процессов</strong>
                        <br>
                        <br>
                        В бизнесе важно проводить аналитику своей аудитории и определять их новые потребности до того, как это сделают ваши конкуренты.
                        <br>
                        <br>
                        Приложения позволит автоматизировать этот процесс. Например, при оформлении заказа приложение автоматически определит время доставки, адрес, стоимость и другие важные параметры для компании.
                        <br>
                        <br>
                        💬
                        <strong>Упрощение коммуникации</strong>
                        <br>
                        <br>
                        Чтобы предлагать целевой аудитории то, что ей нужно, необходимо налаживать коммуникативные процессы. Сделать это можно намного эффективнее, если создать приложение. У вас будет вся информация о клиенте, что упростит задачу подбора необходимого товара или услуги.
                        <br>
                        <br>
                        🤑
                        <strong>Уменьшение расходов</strong>
                        <br>
                        <br>
                        Увеличение дохода может осуществиться только при минимизации расходов.
                        <br>
                        <br>
                        Приложение позволит:
                        <br>
                        ⁃ отказаться от некоторых сотрудников, работу которых заменят новое внедрение;
                        <br>
                        ⁃ быстрее выполнять операционные процессы и затраты на ручную оптимизацию уменьшатся.
                    </div>
                {/if}
            </div>
            <div class="drop_info_block">
                <div class="drop_header">
                    <button style="width: 100%; height:100%; text-align:start; justify-content:space-between; display:flex; align-items:center;" on:click={()=>{dropactive4 = !dropactive4}}>
                        <span class="main_sm" style="color: black;"><strong>📱 5 причин выбрать Flutter для Вашего следующего проекта</strong></span>
                        <i class="mi mi-chevron-down" class:mi_avtive={dropactive4}></i>
                    </button>
                </div>
                {#if dropactive4}
                    <div class="drop_content" transition:slide={{  duration: 1000, easing: quintOut}}>
                        Мобильная разработка развивается каждый день, и появляются новые технологии. Если вы планируете запустить свой мобильный проект или являетесь разработчиком, то эта статья для вас.
                        <br>
                        <br>
                        ⌛️| 
                        <strong>ВРЕМЯ РАЗРАБОТКИ</strong>
                        <br>
                        <br>
                        Первая причина выбора Flutter для проекта — время разработки. Flutter основан на языке дарт, и если вы знакомы с java и подобными языками программирования, изучить Flutter очень легко. Также все элементы пользовательского интерфейса доступны в виде виджетов, что делает его действительно эффективным, ведь за минимальный период времени можно сделать MVP продукт.
                        <br>
                        <br>
                        💹|  
                        <strong>ВЫСОКАЯ СКОРОСТЬ</strong>
                        <br>
                        <br>
                        Приложения на Flutter компилируются в машинный код, использующий графику и механизм визуализации. Они способны стабильно выдавать 60 кадров в секунду на большинстве устройств и до 120 кадров в секунду на устройствах, поддерживающих Flutter. 
                        <br>
                        <br>
                        📌|   
                        <strong>УДОБНЫЙ ИНТЕРФЕЙС</strong>
                        <br>
                        <br>
                        Основным преимуществом Flutter является поддержка функции hot-reload, которая позволяет перезагружать виджеты в реальном времени.
                        <br>
                        <br>
                        Все библиотеки пользовательского интерфейса представлены в виде виджета, по этой причине в минимальном коде мы можем включать библиотеку и тестировать.
                        <br>
                        <br>
                        🖲|    
                        <strong>ТОТ ЖЕ КОД, ВСЕ ПЛАТФОРМЫ</strong>
                        <br>
                        <br>
                        На ранней стадии разработки мобильных приложений было сложно управлять двумя базами кода для Android и IOS, потому что для внесения изменений в каждый проект требуется время. 
                        <br>
                        <br>
                        Основных функций в кроссплатформенности никто не обнаружил по причине того, что они запускались через пользовательский интерфейс в веб-браузере. Но затем появился Flutter в 2017 году и дела явно пошли в в гору. 
                        <br>
                        <br>
                        📈|   
                        <strong>МОЩНАЯ ПОДДЕРЖКА</strong>
                        <br>
                        <br>
                        За какой-то год Flutter обошла по популярности React Native как на GitHub, так и на Stack Overflow. Почему? Потому что вы получаете мощный запас ресурсов для обучения, больше квалифицированных разработчиков, готовых потрудиться над вашим приложением. И всё это в условиях быстрого роста самой технологии, которая стремительно развивается и дольше не утрачивает своей актуальности.
                        <br>
                        <br>
                        Её лидерство, скорее всего, продолжится, и рано или поздно может так оказаться, что уже днём с огнём не сыщешь разработчиков, готовых осуществлять поддержку кроссплатформенных приложений.
                        <br>
                        <br>
                        📟|   
                        <strong>ИТОГ</strong>
                        <br>
                        <br>
                        Предназначенная для создания высокопроизводительных приложений в рекордные сроки, Flutter помогает разработчикам избегать многих проблем. Чтобы в полной мере оценить эту платформу для разработки приложений, надо самому испытать её в деле.
                    </div>
                {/if}
            </div>
        </div>
    </section>
    <section bind:this={devlast} >
        <div class="application">
            <div class="application_main">
                <div class="apl_title">
                    <p class="title">Разработаем приложение с минимальным функционалом бесплатно</p>
                    <p class="main_sm">Вы сможете ознакомиться с интерфейсом или презентовать его инвесторам</p>
                </div>
                <form action="?/sendApp" method="post" class="apl_form">
                    <label for="" class="input_row">
                        <p class="main_sm">Имя Фамилия</p>
                        <input name="fio" type="text" required placeholder="Введите имя">
                    </label>
                    <label for="" class="input_row">
                        <p class="main_sm">Номер телефона</p>
                        <input name="phone" type="tel" required {tel}
                        use:imask={options}
                        on:accept={accept} placeholder="+7 (993) 900-96-46 ">
                    </label>
                    <input type="hidden" name="type" value="Разработать MVP (последний блок)">
                    <input type="hidden" name="utm" value={JSON.stringify(data.utm)}>
                    <button class="main_wt_btn">Разработать тестовый вариант</button>
                    <span class="apl_agr">Отправляя заявку, вы соглашаетесь с <a href="/policy" target="_blank"> Политикой Конфиденциальности</a></span>
                </form>
            </div>
            <div class="application_img">
                <img  data-src ="{ apl_bg }" alt =" foobar" use:lazyImage={{ threshold: 0.5 }}>
            </div>
        </div>
    </section>
</div>

<style>
    .first_block span{
        font-weight: 900;
        font-size: 20px;
    }
    .mi{
        font-size: 1.6rem;
        height: 26px;
        transform: rotate(-180deg);
        transition: all .2s ease-out;
        opacity: 0.2;
    }
    .fb_link .main_wt_btn{
        position: relative;
        overflow: hidden;
    }
    .fb_link .main_wt_btn{
        z-index: 99;
    }   
    .animate_line{
        content: "";
        position: absolute;
        width: 20px;
        height: 200%;
        z-index: -1;
        opacity: 1;
        /* background-color: rgb(196, 193, 193); */
        background: linear-gradient(90deg,rgba(184, 182, 182, 0.5),     rgb(201, 200, 200));
        transform: rotate(45deg);
        animation-name: line;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    @keyframes line{
        0%{
            left: -20px;
            
        }
        100%{
            left: 500px;
        }
    }
    .mi_avtive{
        transform: rotate(0deg);
        opacity: 1;
    }
    .drop_content{
        padding: 0 30px 15px 30px;
    }
    .drop_content{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        color: black;
    }
    .drop_info{
        margin-bottom: 150px;
    }
    .drop_header button{
        column-gap: 12px;
    }
    .drop_header{
        display: flex;
        align-items: center;
    }
    .drop_header:hover .mi{
        opacity: 1;
    }
    .image-shadow {
        position: absolute;
        top: 15%;
        left: 5%;
        right: 5%;
        height: 90%;
        background-size: auto;
        background-position: center bottom;
        background-repeat: no-repeat;
        border-radius: inherit;
        -webkit-filter: blur(25px);
        filter: blur(25px);
        z-index: -1;
    }
    .crd_info a{
        display: inline;
    }
    .crd_link{
        height: 48px;
        display: flex;
        align-items: center;
    }
    .info_div_link a{
        display: inline;
    }
    .info_div_link{
        display: flex;
        align-items: center;
    }
    .comrads_link{
        grid-column-start: 3;
        grid-column-end: 4;
        width: 550px;
        height: 365px;
        position: relative;
        display: flex;
        align-items: end;
       border-radius: 36px 36px 36px 0px;
       overflow: hidden;
       object-fit: contain;
    }
    .comr_imd{
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: -1;
    }
    .comr_imd img{
        height: 100% !important;
        width: 100% !important;
    }
    .comrads_link img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        object-fit: fill;

    }
    .crd_info{
        margin: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        width: 90%;
    }
    .nda_block{
        display: flex;
        justify-content: end;
        padding: 32px;
        flex-direction:column;
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        height:401px;
    }
    .nda_block div{
        width: 60%;
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
    .drop_info_block{
        background-color: var(--white-color);
        margin-bottom: 12px;
        border-radius: 36px;
    }
    .drop_info_block button{
        padding: 15px 30px;   
    }
    .drop_info_block button:active{
       background-color: transparent;  
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
        backdrop-filter: blur(10px) !important;
        width: 100%;
        max-width: 780px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 36px;
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
        font-size: 48px;
        font-weight: 700;
        line-height: 66px;
        letter-spacing: 0em;
        color: var(--white-color);
        width: 85%;
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
        flex-direction: column;
        row-gap: 8px;
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
        object-fit: cover;
        z-index: -1;

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
        top: -50px;
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
        width: 70%;
    }
    .third_block .main_wt_btn{
        margin-top: 12px;
    }
    .fourth_block{
        display: flex;
        justify-content: space-between;
        margin: 200px 0;
        column-gap: 32px;
    }
    .fourth_block div:nth-child(2):not(.feedback){
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 12px;
    }
    .fourth_block_title{
        height: 510px;
        max-width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        text-align: center;
        row-gap: 22px;
        padding-bottom: 32px;
        border-radius: 36px;
        border: 1px var(--brightgray-color) solid;
    }
    .count{
        display: inline;
        background-color: var(--white-color);
        border-radius: 100px;
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
        padding: 11px 25px;
    }
    .feeadback_title{
        display: flex;
        justify-content: center;
    }
    .feeadback_title p{
        width: 60%;
    }
    .feedback{
        display: flex;
        flex-direction: column;
        align-content: space-between;
        max-width: 470px;
    }
    .feedback div{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: start !important;
    }
    .feedback div p:first-child{
        font-size: 48px;
        font-weight: 700;
        line-height: 66px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    .feedback div p:last-child{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: -0.01em;
        color: var(--white-color);
    }
    .feedbackps{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        color: var(--darkgray-color);

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
        justify-content: space-between;
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
        position: relative;
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
        color: #fff;
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
        height: 100% !important;
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
        border-radius: 36px 36px 36px 0px;
        overflow: hidden;
    }
    .person_card img{
        height: 100% !important;
        object-fit: cover;
        width: 100% !important;
    }
    .personinfo{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        padding: 20px;
    }
    .blocks ul{
        padding-left: 25px;
    }
    .application_img{
        border-radius: 36px;
        overflow: hidden;
    }
    .mini_header .mini_header_content{
        backdrop-filter: blur(10px) !important;
        z-index: 0;
    }
    .feedback{
        height: 510px;
    }





    .visit{
        margin: 0;
        top: initial;
        left: initial;
        bottom: 120px;
        right: 60px;
        border-radius: 5px;
        position: fixed;
        z-index: 10000;
        cursor: default;
        max-width: 360px;
    }
    .mobbileVistit{
        width: 100%;
        max-width: 100%;
        right: 0;
        min-height: 100%;
        height: auto;
        border-radius: 0;
        overflow: initial;
        top: 0px;
    }
    .mobbileVistit .mobile_content{
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px) !important;
    }
    .mobbileVistit .close{
        background-color: black;
        margin-bottom: 0;
        padding: 6px 20px;
    }
    .mobbileVistit .studio_info{
        background: none;
        backdrop-filter: unset !important;
        border-radius: 0;
        border:  none;
        max-width: 500px;
        margin: auto;
        padding-top: 80px;
    }
    .mobbileVistit .studio_number p{
        background: none;
        backdrop-filter: unset !important;
        border-radius: 0;
        border:  none;
        max-width: 500px;
        margin: auto;
        border-top: 1px solid ;
    }
    .mobbileVistit .mobile_content{
        height: 100%;
    }
    .mobbileVistit .visit_content{
        width: 100%;
        height: 100%;
    }
    .mobbileVistit .visit_closed{
        right: 50px;
        bottom: 120px;
    }
    .visit_content{
        position: relative;
    }
    .visit_closed {
        border: 2px solid rgb(25, 156, 104);
        border-radius: 100px;
        position: absolute;
        height: 60px;
        width: 60px;
        bottom: 0px;
        right: 20px;
    }
    .visit_closed img{
        object-fit: contain;
    }
    .studio_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 15px 15px 15px;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px) !important;
        border-radius: 28px 28px 0 0;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .own_name{
        margin-top: 4px;
    }
    .own_name p{
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--white-color);
    }
    .studio_number p{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(171, 174, 181, 1);
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px) !important;
        border-radius: 0 0 28px 28px;
        padding: 10px 0;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .studio_number a{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(171, 174, 181, 1);
    }
    .close{    
        margin-bottom: 12px;
    }
    .close button{
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .close button .mi{
        margin-top: 6px;

    }
    .short_info{
        margin-top: 4px;
    }
    .short_info p{
        text-align: center;
    }
    @media(max-width:1180px){
        section{
            margin: 0 32px;
        }
        .stages_row{
            column-gap: 12px;
        }
        .comrads_link{
            grid-column-start: 1;
            grid-column-end: 4;
            width: 100%;
        }
    }
    @media(max-width:1080px){
        .fourth_block_title{
            max-width: 45%;
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
            top: -80px;
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
            flex-direction: column-reverse;
            row-gap: 32px;
            align-items: center;
        }
        .feedback{
            width: 100%;
        }
        .fourth_block_title{
            max-width: unset;
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
        .person_card{
            width: 100%;
            max-width: 365px;
            max-height: 365px;
        }
        .person_card img{
            width: 100%;
            height: 100%;
            object-position: center;
        }
        .stages_row{
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
        }
        .comrads_link{
            width: 100%;
            max-width: 365px;
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
            row-gap: 12px;
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
        .third_block{
            flex-direction: column;
            margin-top: 100px;
            row-gap: 80px;
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
            top: -80px;
        }
        .owners_info{
            width: 100%;
        }
        .third_block{
            height: fit-content;
            margin-bottom: 100px;
            align-items: baseline;
        }
        .big_title{
            width: 100%;
        }
    }
    @media(max-width:480px){
        .third_block div:first-child:not(.owners_info div){
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .third_block div:first-child:not(.owners_info div) .main_sm{
            text-align: center;
        }
        .owners_info{
            height: 50px;
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .owners_info div{
            flex-direction: column;
            height: 100%;
            justify-content: center;
            
        }
        .fourth_block{
            margin-top: 100px;
        }
        .row{
            height: fit-content;
        }
    }
    @media(max-width:428px){
        
        .drop_content{
            font-size: 14px;
            line-height: 1.45;
            padding-left: 20px;
            padding-right: 20px;
        }
        .second_block{
            flex-direction: column-reverse;
            row-gap: 20px;
        }
        .second_block div:not(.info_block){
            flex-direction: column;
            row-gap: 20px;
        }
        .crd_info .main_wt_btn{
            width: unset;
        }
        .comr_imd{
            width: 100%;
            max-width: 365px;
            object-fit: cover;
        }
        
        .first_img{
            display: none;
        }
        .fourth_block{
            flex-direction: column-reverse;
            row-gap: 60px;
        }
        .feedback{
            width: 100%;
            
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
        .fourth_block_title{
            height: 400px;
            padding: 25px;
        }
        .fourth_block div:nth-child(2):not(.feedback){
            justify-content: space-between;
        }
        .fourth_block div:nth-child(2):not(.feedback) .main_sm{
            width: 40%;
        }
        .feeadback_title p{
            width: unset;
            font-size: 24px;
            text-align: center;
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
            object-fit: cover;
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
        .info_div_link .main_tr_btn{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .main_tr_btn{
            display: flex;
            justify-content: center;
            text-align: center;
        }
        .blocks_w .info_block{
            height: fit-content;
            max-height: fit-content ;
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
            height: fit-content;
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
        .drop_header .main_sm{
            font-size: 15px !important;
        }
        .drop_header button{
            padding-left: 20px;
            padding-right: 20px;
        }
        .owners_info div{
            padding: 0 12px;
        }
        .third_block .main_sm {
            text-align: center;
        }
        #owners{
            margin: 0 24px;
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
        .comrads_link{
            max-width: 100%;
        }

        .comrads .title{
            font-size: 24px;
            line-height: 30px;
        }
        .development_stages{
            margin-bottom: 300px;
        }
        
    }
    @media(max-width:350px){
        .core_values_info{
            margin-top: 100px;
        }
        .mini_header_content{
            margin: 0 12px;
        }
        .comment_title{
            justify-content: space-between;
        }
        .comment_main{
            width: 60%;
        }
        .fourth_block div:nth-child(2):not(.feedback) .main_sm{
            width: 50%;
        }
        .third_block .title{
            text-align: center;
        }
        .development_stages{
            margin-bottom: 350px;
        }
    }
    @media(max-width:334px){
        .owners{
            display: none;
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
        .fourth_block div:nth-child(2):not(.feedback){
            flex-direction: column;
            row-gap: 12px;
        }
        .count{
            padding: 11px 18px;
        }
    }
    @media(max-width:309px){
        .nda_block{
            padding: 20px;
        }
    }
</style>