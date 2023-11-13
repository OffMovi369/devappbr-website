<script>
    import BaseModal from "$lib/client/BaseModal.svelte";
    import { fade } from "svelte/transition";
    import quest1 from "$lib/assets/slides/quest1.png"
    import quest2 from "$lib/assets/slides/quest2.png"
    import quest3 from "$lib/assets/slides/quest3.png"
    import quest4 from "$lib/assets/slides/quest4.png"
    import quest5 from "$lib/assets/slides/quest5.png"
    import quest6 from "$lib/assets/slides/quest6.png"
    import quest7 from "$lib/assets/slides/quest7.png"
    export let sl= 0;

    let slides = [
        {   
            id:1,
            que:"У вас есть готовый дизайн-проект?",
            disc:"Мы можем разработать дизайн-проект под Ваши предпочтения, но также работаем и с готовым дизайном.",
            url:quest2,
            questions:[
                {
                    id:1,
                    answ:"Есть",
                    status:true,
                },
                {
                    id:2,
                    answ:"Нет",
                    status:true,
                }
            ]
        },
        {   
            id:2,
            que:"Выберите тип приложения, который Вас интересует",
            disc:"",
            url:quest3,
            questions:[
                {
                    id:1,
                    answ:"Для бизнеса (B2B)",
                    status:false,
                },
                {
                    id:2,
                    answ:"Для частных лиц (B2C)",
                    status:false,
                },
                {
                    id:3,
                    answ:"Другое",
                    status:false,
                }
            ]
        },
        {   
            id:3,
            que:"За какой период нужно разработать приложение?",
            disc:"",
            url:quest4,
            questions:[
                {
                    id:1,
                    answ:"Срочная разработка (от 3 недель)",
                    status:false,
                },
                {
                    id:2,
                    answ:"Обычная разработка (от 2 месяцев)",
                    status:false,
                }
            ]
        },
        {   
            id:4,
            que:"Есть ли у Вас техническое задание на разработку?",
            disc:"Если у Вас нет ТЗ на разработку, то наши специалисты составят его по Вашим предпочтениям",
            url:quest5,
            questions:[
                {
                    id:1,
                    answ:"Есть",
                    status:false,
                },
                {
                    id:2,
                    answ:"Нет",
                    status:false,
                }
            ]
        },
        {   
            id:5,
            que:"Под какие платформы разрабатывается мобильное приложение?",
            disc:"",
            url:quest6,
            questions:[
                {
                    id:1,
                    answ:"Android и IOS",
                    status:false,
                },
                {
                    id:2,
                    answ:"только IOS",
                    status:false,
                },
                {
                    id:3,
                    answ:"только Android",
                    status:false,
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
                    <button class="main_wt_btn" on:click={()=>{sl++}}>Начать</button>
                </div>
            </div>
        
        {:else}
            {#each slides as quest (quest.id)}
                {#if sl==quest.id && quest.id!=6}
                    <div class="">
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
                                        <div class="">
                                            <input type="radio" name="answers">
                                            <p class="main_sm">{answer.answ}</p>
                                        </div>
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
                        <p class="quest_title">Ответьте на 5 вопросов и получите расчет стоимости</p>
                        <p class="quest_dis">Расчет произойдет автоматически, согласно нашим алгоритмам</p>
                    </div>
                    <div class="">
                        <button class="main_wt_btn">Начать</button>
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
        height: 252px;
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
</style>