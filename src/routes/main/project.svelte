<script>
    let projects = [
        {
            id:1,
            name:"Roman Driver - приложение для бизнеса по логистике",
            disc:"В приложении отображаются текущие заявки, где находятся водители, куда им ехать и что везти, также в приложении был добавлен отвес, который взаимодействует с 1С заказчика.",
            category: "#zalupa",
            url:"https://static.tildacdn.com/tild3338-3833-4335-b461-353235323766/Roman-Driver_1.gif",
        },
        {
            id:2,
            name:"BeLoved - приложение для развития отношений",
            disc:"Из идеи реализовали стартап - приложение для отношений, где можно вести совестный архив, цели и подарки со своим партнером.",
            category: "#zalupa",
            url:"https://static.tildacdn.com/tild3065-3639-4630-b934-333839666433/BeLoved.gif",
        },
        {
            id:3,
            name:"Egorka - Delivery",
            disc:"Разработали под ключ весь фронтенд для логистической компании",
            category: "#zalupa",
            url:"https://static.tildacdn.com/tild3235-6362-4030-b061-306338653961/photo.gif",
        },
        {
            id:4,
            name:"Поездка",
            disc:"К нам обратились заказчики после неудачного опыта с подрядчиками, мы исправили архитектуру приложения, а также взяли полностью под свою ответственность проект.",
            category: "#zalupa",
            url:"https://static.tildacdn.com/tild6431-3331-4636-b136-386637393337/photo.gif",
        },
        {
            id:5,
            name:"Нейродом",
            disc:"Мы разработали платформу для обучения с бонусной реферальной системой. А также интегрировали alfaCRM",
            category: "#zalupa",
            url:"https://static.tildacdn.com/tild6365-6232-4435-a530-366663363833/photo.gif",
        },



    ]
    import { afterUpdate } from 'svelte';
    import { fly } from 'svelte/transition'
    import project_bg from "$lib/assets/project_bg.png"

    let oh2
    let flag = false
    let innerHeight;
    let projectsDiv
    let pr_offset

    let innerWidth
    afterUpdate(() => {
		pr_offset = projectsDiv.offsetTop - innerHeight / 2 -200;
        

	});

    $:{
        if(  pr_offset <= oh2){
            flag = true
        }
        else{
            flag = false
        }
    }
    $:{ 
        if(innerWidth > 900){
            projects.splice(6)
        }
        if(innerWidth <= 900){
            projects.splice(3)
        }
        
    }

</script>

<svelte:window bind:scrollY={oh2} bind:innerHeight bind:innerWidth/>
<div class="projects" bind:this={projectsDiv}>
    <p class="title">Наши проекты</p>
    <div class="project_list">
        {#each projects as project (project.id)}
            {#if flag}
                <a href="#" class="project_card" transition:fly={{ y: -30, duration: 500 }}>
                    <div class="" style="
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color:white">
                        <a class="project_img" style="background: url({project.url});background-position: center;background-size:cover;"></a>
                    </div>
                    
                    <div class="project_info">
                        <div class="" style="
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap:12px;">
                            <p class="main_sm">{ project.name }</p>
                            <p class="main_sm_thin">{ project.disc }</p>
                            <button class="main_tr_btn">Подробнее</button>
                        </div>
                    </div>
                    <!-- <div class="category">
                        {project.category}
                    </div> -->
                </a>
            {/if}  
        {/each}
    </div>
    {#if flag}
        <button class="main_tr_btn" >Показать больше</button>
    {/if}
</div>

<style>
    .project_list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 360px));
        row-gap: 30px;
        height: fit-content;
        justify-content: space-between;
    }
    .project_card{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        overflow: hidden;
        transition: all .2s ease-out;
        position: relative;
    }
    .project_card:hover{
        border: 2px solid var(--graywhite-color);
    }
    .project_info{
        display: flex;
        padding: 24px;
        flex-direction: column;
        row-gap: 10px;
        height: 100%;
    }
    .project_info .main_tr_btn{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        margin-top: auto;
    }
    .project_info .main_sm_thin {
        margin-bottom: 14px;
    }
    .projects{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
    }
    .projects .main_tr_btn{
        justify-content: center ;
    }
    .project_img{
        height: 303px;
        display: table-cell;
    }
    .category{
        position: absolute;
        background-color: var(--white-color);
        padding: 8px 20px;
        border-radius: 100px;
        font-family: Manrope;
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        margin-top: 16px;
        margin-left: 16px;
    }
    @media(max-width:1180px){
        .project_list{
            height: unset;
            grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
            justify-content: space-around;
        }
        .project_card{
            width: 300px;
        }
    }
    @media(max-width:1000px){
        .project_list{
            height: unset;
            grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
        }
        .project_card{
            width: 400px;
        }
        .project_img img{
            width: 100%;
        }
    }
    @media(max-width:900px){
        .project_list{
            display: flex;
            flex-direction: column;
            row-gap: 32px;
            align-items: center;
        }
    }
    @media(max-width:428px){
        .project_card{
            width: 100%;
            height: 100%;
        }
        .project_img{
            max-height: 270px; 
        }
    }
    @media(max-width:350px){
        .project_img{
            max-height: 200px;
        }
    }
</style>