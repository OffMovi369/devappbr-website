<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    import slide_bg_1 from "$lib/assets/slide_bg_1.png"
    import slide_bg_2 from "$lib/assets/slide_bg_2.png"

    let innerWidth;
    let countSlide;
    let space = 20 
    $:{
        if( innerWidth > 1180){
            space = 20
            countSlide = 3
        }
        else if(innerWidth <= 1180 && innerWidth > 1080){
            space = 40
            countSlide = 3
        }
        else if(innerWidth <= 1080 && innerWidth > 900 ){
            space = 20
            countSlide = 3
        }
        else if(innerWidth <= 900 && innerWidth > 700 ){
            countSlide = 2
        }
        else if(innerWidth <= 700 && innerWidth > 500 ){
            countSlide = 2
        }
        else if(innerWidth <= 500 && innerWidth > 300 ){
            countSlide = 1
        }
        else if(innerWidth <= 300 && innerWidth > 280 ){
            countSlide = 1
        }
        console.log(innerWidth,countSlide)

    }

    let news = [
        {
            id:1,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1,
            disc:"Этапы создания приложения: от идеи до реализации"
        },
        {
            id:2,
            name:"​​Тренды мобильных приложений для e-commerce в 2023 году",
            url: slide_bg_2,
            disc:"​​Тренды мобильных приложений для e-commerce в 2023 году"
        },
        {
            id:3,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1,
            disc:"Этапы создания приложения: от идеи до реализации"
        },
        {
            id:4,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1,
            disc:"​​Тренды мобильных приложений для e-commerce в 2023 году"
        },
        {
            id:5,
            name:"​​Тренды мобильных приложений для e-commerce в 2023 году",
            url: slide_bg_2,
            disc:"Этапы создания приложения: от идеи до реализации"
        },
        {
            id:6,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1,
            disc:"​​Тренды мобильных приложений для e-commerce в 2023 году"
        },
        {
            id:7,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1,
            disc:"Этапы создания приложения: от идеи до реализации"
        },

    ]
</script>
<svelte:window bind:innerWidth/>
<div class="slider">
    <div class="slider_info">
        <p class="title">Блог DA&BRБлог DA&BR</p>
        <div class="slide_btn">
            <button class=" prev"><div class="arrow prev"></div></button>
            <button class="next"><div class="arrow "></div></button>  
        </div>
    </div>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,FreeMode]}
    spaceBetween={ space }
    slidesPerView={ countSlide }
    navigation = {
        {nextEl: '.next',
        prevEl: ".prev",}
    }
    freeMode
    >
        {#each news as slid (slid.id)}
            <SwiperSlide>
                <div class="slider_content"
                style="
                background-color: aliceblue;
                max-width: 360px;
                height: 202px;
                background-image: url({slid.url});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                overflow:hidden;
                border-radius:36px;
                padding:16px;
                display:flex;
                flex-direction: column;
                justify-content: end;
                "
                >
                    <div class="slide_text">
                        <p class="main_sm size_14">{ slid.disc }</p>
                    </div>
                </div>
            </SwiperSlide>
        {/each}
        
        
        
    </Swiper>
</div>

<style>
    .slide_btn{
        display: flex;
        align-items: center;
        column-gap: 10px;
        width: 50px;
        justify-content: space-between;
        padding-right: 20px;
    }

    .slider_info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
    }
    .arrow{
        content: "";
        width: 15px;
        height: 15px;
        border-top: 2px solid var(--brightgray-color);
        border-right: 2px solid var(--brightgray-color);
        transition: all .2s ease-out;
    }
    .prev{
        transform: rotate(-65deg);
    }
    .next{
        transform: rotate(45deg);
    }
    .slider{
        margin-bottom: 200px;
    }
    .arrow:hover{
        border: none;
        border-top: 2px solid var(--whitegay-color);
        border-right: 2px solid var(--whitegay-color);
        
    }
    .size_14{
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
    }
    @media(max-width:1180px){
        .slider_content{
            
        }
    }
    @media(max-width:428px){
        .slider{
            margin-bottom: 100px;
        }
    }
    @media(max-width:360px){
        .slider_info{
            flex-direction: column;
            row-gap: 20px;
            align-items: baseline;
        }
    }
</style>
