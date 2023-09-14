<script>
    import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';

    import slide_bg_1 from "$lib/assets/slide_bg_1.png"
    import slide_bg_2 from "$lib/assets/slide_bg_2.png"

    let news = [
        {
            id:1,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1
        },
        {
            id:2,
            name:"​​Тренды мобильных приложений для e-commerce в 2023 году",
            url: slide_bg_2
        },
        {
            id:3,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1
        },
        {
            id:4,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1
        },
        {
            id:5,
            name:"​​Тренды мобильных приложений для e-commerce в 2023 году",
            url: slide_bg_2
        },
        {
            id:6,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1
        },
        {
            id:7,
            name:"Этапы создания приложения: от идеи до реализации",
            url: slide_bg_1
        },

    ]
</script>
<div class="slider">
    <div class="slider_info">
        <p class="title">Блог DA&BRБлог DA&BR</p>
        <div class="slide_btn">
            <button class=" prev"><div class="arrow prev"></div></button>
            <button class="next"><div class="arrow "></div></button>  
        </div>
    </div>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation = {
        {nextEl: '.next',
        prevEl: ".prev",}
    }
    >
        {#each news as slid (slid.id)}
            <SwiperSlide>
                <div class="slider_content"
                style="
                background-color: aliceblue;
                width: 360px;
                height: 202px;
                background-image: url({slid.url});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                overflow:hidden;
                border-radius:36px;
                "
                >

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
</style>
