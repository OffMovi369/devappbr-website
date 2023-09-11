<script>
    import Icon from '@iconify/svelte'
    import block_bg from "$lib/assets/block_bg.png"
    import owners from "$lib/assets/owners.png"
    import { afterUpdate } from 'svelte';
    import { fly } from 'svelte/transition'
    
    let mapContainer;
	let map_offset;
    let oh;
    let flag= false
    let offset
    let innerHeight
    afterUpdate(() => {
		map_offset = mapContainer.offsetTop - innerHeight / 2  ;
	});
    $:{
        if(  map_offset <= oh){
            flag = true
        }
        else{
            flag = false
        }
        console.log(oh,map_offset)
    }
    

    
</script>
<svelte:window bind:scrollY={oh} bind:innerHeight/>
<div class="main_content">
    <section>
        <div class="first_block">
            <p class="big_title">Разработаем мобильное приложение для бизнеса от 5 млн ₽ за 2 месяца</p>
            <p class="main_sm">Окупится в течение 6 месяцев и принесет более 35% повторных продаж</p>
            <div class="">
                <div class="">
                    <button class="main_wt_btn">Разработать тестовый вариант</button>
                    <a href="#"><Icon icon="mdi:youtube" color="white" width="25" height="25"/></a>
                    <a href="#"><Icon icon="mingcute:telegram-fill" color="white" width="25" height="25"  /></a>
                </div>
                <div class="">
                    <p class="main_sm_gray">*По данным внутренних исследований</p>
                </div>
            </div>
        </div>
        <div class="">
            <img src="{ block_bg }" alt="">
        </div>
    </section>
    <section>
        <div class="second_block">
            <div class="">
                <div class="info_block">
                    <p class="title">Мы создаем продукты, которые эффективны для продвижения</p>
                    <p class="main_sm">Наши специалисты сертифицированы израильской компанией AppsFlyer</p>
                    <div class="">
                        <button class="main_tr_btn" >
                            Сертификат AppsFlyer
                            <Icon icon="ep:right" color="white" width="22" height="22"/>
                        </button>
                    </div>
                    
                </div>
                <div class="info_block">
                    <p class="title">Прогноз выручки от внедрения приложения в Ваш бизнес</p>
                    <p class="main_sm">Подставьте данные в таблицу и узнайте прогноз для приложения</p>
                    <div class="">
                        <button class="main_tr_btn">
                            Калькулятор продаж
                            <Icon icon="ep:right" color="white" width="22" height="22"/>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div class="info_block test">
                <div class="">
                    <p class="title">Даем гарантию на сроки создания</p>
                    <p class="main_sm">Устанавливаем четкие сроки и фиксируем размер неустойки за каждый факт просрочки в договоре</p>
                    <div class="">
                        <button class="main_tr_btn">
                            Рассчитать стоимость
                            <Icon icon="ep:right" color="white" width="22" height="22"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="third_block">
            <div class="">
                <p class="title">Подход к разработке</p>
                <p class="main_sm">«Мы делаем проекты, которые будут увеличивать доход наших клиентов. Это обусловлено тем, что создаем не просто функциональные приложения, а еще и эффективные для продвижения»</p>
                <div class="">
                    <button class="main_wt_btn">
                        Смотреть интервью
                        <Icon icon="ep:right" color="black" width="22" height="22"/>
                    </button>
                </div>
            </div>
            <div class="owners">
                <img   src="{ owners }" alt="">
            </div>
        </div>
    </section>
    <section bind:offsetHeight={offset} bind:this={mapContainer}>
        <div class="fourth_block">
            <div class="">
                <p class="title">Средняя оценка наших приложений – 4.7</p>
                <p class="main_sm">Более 200 пользователей оценили наши приложения в App Store и Google Play</p>
                <div class="">
                    <button class="main_tr_btn">
                        Читать отзывы
                        <Icon icon="ep:right" color="white" width="22" height="22"/>
                    </button>
                </div>
            </div>
            <div class="feedback">
                <div class="row" >
                    {#if flag}
                        <div class="comment" transition:fly={{ y: -200, duration: 1000 }}>

                        </div>
                    {/if}
                    
                </div>
                <div class="row">
                    {#if flag}
                        <div class="comment" transition:fly={{ x: -200, duration: 1000 }}>

                        </div>
                    {/if}
                </div>
                <div class="row">
                    {#if flag}
                        <div class="comment" transition:fly={{ y: 200, duration: 1000 }}>

                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>
</div>

<style>
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
    .main_sm{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
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
        row-gap: 20px;
    }
    .first_block div:last-child{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .first_block div:last-child div:first-child{
        display: flex;
        align-items: center;
        column-gap: 16px;
    }
    .main_content section:first-child{
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
    .title{
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: -0.01em;
        color: var(--white-color);
    }
    .info_block{
        padding: 40px;
        border-radius: 36px;
        border: 1px solid var(--brightgray-color);
        display: flex;
        flex-direction: column;
        row-gap: 15px;
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
    .owners{
        position: absolute;
        right: -140px;
    }
    .owners img{
        width: 800px;

    }
    .third_block{
        display: flex;
        align-items: center;
        height: 550px;
        position: relative;
        margin-top: 277px;
    }
    .third_block div:first-child{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        width: 40%;
    }
    .fourth_block{
        display: flex;
        justify-content: space-between;
        margin: 200px 0;
    }
    .fourth_block div:not(.row):first-child{
        max-width: 470px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        justify-content: center;
    }
    .comment{
        padding: 30px;
        border: 1px solid var(--brightgray-color);
        border-radius: 36px;
        width: 445px;
        height: 208px;
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
</style>