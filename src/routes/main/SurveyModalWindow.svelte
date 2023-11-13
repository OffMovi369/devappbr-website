<script>
    import { imask } from '@imask/svelte';
    import BaseModal from "$lib/client/BaseModal.svelte";
    import modalsStore from "$lib/client/modalsStore";
    import quest1 from "$lib/assets/slides/quest1.png"
    import quest2 from "$lib/assets/slides/quest2.png"
    import quest3 from "$lib/assets/slides/quest3.png"
    import quest4 from "$lib/assets/slides/quest4.png"
    import quest5 from "$lib/assets/slides/quest5.png"
    import quest6 from "$lib/assets/slides/quest6.png"
    import quest7 from "$lib/assets/slides/quest7.png"
    let sl = 0;


    function accept({ detail: maskRef }) {
        value = maskRef.value;
    }
    const options = { 
		mask: '+{0}(000)000-00-00',
        lazy: true,
	};
    let tel = '';


    let slides = [
        {   
            id:1,
            que:"У вас есть готовый дизайн-проект?",
            disc:"Мы можем разработать дизайн-проект под Ваши предпочтения, но также работаем и с готовым дизайном.",
            url:quest2,
            value:null,
            questions:[
                {
                    id:1,
                    answ:"Есть",
                },
                {
                    id:2,
                    answ:"Нет",
                }
            ]
        },
        {   
            id:2,
            que:"Выберите тип приложения, который Вас интересует",
            disc:"",
            url:quest3,
            value:null,
            questions:[
                {
                    id:1,
                    answ:"Для бизнеса (B2B)",
                },
                {
                    id:2,
                    answ:"Для частных лиц (B2C)",
                },
                {
                    id:3,
                    answ:"Другое",
                }
            ]
        },
        {   
            id:3,
            que:"За какой период нужно разработать приложение?",
            disc:"",
            url:quest4,
            value:null,
            questions:[
                {
                    id:1,
                    answ:"Срочная разработка (от 3 недель)",
                },
                {
                    id:2,
                    answ:"Обычная разработка (от 2 месяцев)",
                }
            ]
        },
        {   
            id:4,
            que:"Есть ли у Вас техническое задание на разработку?",
            disc:"Если у Вас нет ТЗ на разработку, то наши специалисты составят его по Вашим предпочтениям",
            url:quest5,
            value:null,
            questions:[
                {
                    id:1,
                    answ:"Есть",
                },
                {
                    id:2,
                    answ:"Нет",
                }
            ]
        },
        {   
            id:5,
            que:"Под какие платформы разрабатывается мобильное приложение?",
            disc:"",
            url:quest6,
            value:null,
            questions:[
                {
                    id:1,
                    answ:"Android и IOS",
                },
                {
                    id:2,
                    answ:"только IOS",
                },
                {
                    id:3,
                    answ:"только Android",
                }
            ]
        },
    ]
</script>
<BaseModal title="Настройка платежной системы">
    
    
    <form action="">
        {#if sl == 0}
                <div>
                    <img class="quest_img"  src="{quest1}" alt="">
                </div>
                <div class="survey_content" >
                    <div class="quest_content">
                        
                        <div class="">
                            <p class="quest_title">Ответьте на 5 вопросов и получите расчет стоимости</p>
                            <p class="quest_dis">Расчет произойдет автоматически, согласно нашим алгоритмам</p>
                        </div>
                        <button class="main_wt_btn dd" on:click={()=>{sl++}}>Начать</button>
                    </div>
                </div>
        
        {:else}
            {#each slides as quest (quest.id)}
                {#if sl==quest.id && quest.id!=6}
                    <div class="q">
                        <div>
                            <img class="quest_img"  src="{quest.url}" alt="">
                        </div>
                        <div class="survey_content" >
                            <div class="quest_content">
                                
                                <div class="">
                                    <p class="quest_title">{ quest.que }</p>
                                    <p class="quest_dis">{quest.disc}</p>
                                </div>
                                <div class="questions">
                                    {#each quest.questions as answer (answer.id) }
                                        <label class="question" class:input_active={ answer.answ == quest.value}>
                                            <input type="radio" name="answers" value="{answer.answ}" bind:group={quest.value}>
                                            <p class="main_sm">{answer.answ}</p>
                                        </label>
                                    {/each}
                                </div>
                                <div class="next_quest">
                                    <button class="main_tr_btn prev" on:click={()=>{sl--}}>Назад</button>
                                    <button class="main_wt_btn next" on:click={()=>{sl++}}>Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}     
            {/each}
        {/if}
        {#if (sl==6)}
            <div>
                <img class="quest_img"  src="{quest7}" alt="">
            </div>
            <div class="survey_content">
                <div class="quest_content">
                    <div class="">
                        <p class="quest_title">Закрепите за собой скидку в размере 25.000₽ и получите расчет стоимости</p>
                    </div>
                    <div class="questions">
                        <div class="row">
                            <p class="main_sm">Имя</p>
                            <input type="text" placeholder="Введите имя">
                        </div>
                        <div class="row">
                            <p class="main_sm">Номер телефона</p>
                            <input name="phone" type="tel" id="" required {tel}
                                use:imask={options}
                                on:accept={accept} placeholder="+7 000 00 00 ">
                        </div>
                    </div>
                    <div class="">
                        <button class="main_wt_btn ddd" type="submit">Получить скидку</button>
                    </div>
                    <div class="">
                        <p class="post_sm">Отправляя заявку, вы соглашаетесь с Политикой Конфиденциальности</p>
                    </div>
                </div>
            </div>
        {/if}
    </form>
</BaseModal>

<style>
    .survey_content{
        padding: 24px;
    }
    .main_wt_btn{
        justify-content: center;
        width: 100%;
    }
    .survey_content{
        height: 100%;
    }
    .dd{
        margin-top: 32px;
    }
    .ddd{
        margin-top: 10px;
    }
    .q{
        display: flex;
        flex-direction: column;
        height: 552px;
    }
    .quest_title{
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0em;
        color: var(--white-color);
        margin-bottom: 8px;
    }

    .quest_dis{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: -0.01em;
        text-align: left;
        color: var(--white-color);
    }
    .quest_content{
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .quest_img{
        width: 100% !important;
        height: 100% !important;
    }
    .next_quest{
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 12px;
    }
    .next,.prev{
        width: 100%;
        justify-content: center;
    }
    .questions{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        margin: 24px 0px;
        position: relative;
    }
    .question{
        height: 100%;
        padding: 12px 20px;
        position: relative;
        width: 100%;
        border-radius: 100px;
        border: 2px var(--white-color) solid;
        display: flex;
        column-gap: 10px;
        align-items: center;
    }
    .question input{  
        appearance: none;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 2px solid var(--white-color);
        transition: 0.2s all linear;
    }
    .question input:checked{
        background-color: var(--white-color);
    }
    .post_sm{
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: rgba(171, 174, 181, 1);
        margin-top: 20px;
    }
    .row{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .row input{
        padding: 10px 24px;
        border-radius: 100px;
        border: 2px solid rgba(255, 255, 255, 0.15);
        height: 50px;
        color: var(--white-color);
    }
    
</style>