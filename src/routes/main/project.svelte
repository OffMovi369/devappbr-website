<script>
    let projects = [
        {
            id:1,
            name:"Название проекта",
            disc:"Описание проекта",
        },
        {
            id:2,
            name:"Название проекта",
            disc:"Описание проекта",
        },
        {
            id:3,
            name:"Название проекта",
            disc:"Описание проекта",
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
                <div class="project_card" transition:fly={{ y: -30, duration: 500 }}>
                    <div class="project_img">
                        <img src="{ project_bg }" alt="">
                    </div>
                    <div class="project_info">
                        <p class="main_sm">{ project.name }</p>
                        <p class="main_sm_thin">{ project.disc }</p>
                        <button class="main_tr_btn">Подробнее</button>
                    </div>
                </div>
            {/if}  
        {/each}
    </div>
    <button class="main_tr_btn">Показать больше</button>
</div>

<style>
    .project_list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 360px));
        row-gap: 30px;
        height: fit-content;
        justify-content: space-between;
    }
    .project_img{
        width: 100%;
        height: 100%;
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
    }
    .project_card:hover{
        border: 2px solid var(--graywhite-color);
    }
    .project_info{
        display: flex;
        padding: 24px;
        flex-direction: column;
        row-gap: 10px;
    }
    .project_info .main_tr_btn{
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .projects{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
    }
    .projects .main_tr_btn{
        justify-content: center ;
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
        .project_list{
            display: flex;
            flex-direction: column;
            row-gap: 32px;
            height: 1388px;
        }
        .project_card{
            width: 100%;
            height: 100%;
            max-height: 452px;
        }
        .project_img img{
            width: 100%;
            height: 100%;
            max-height: 270px;
        }
        .project_img{
            max-height: 270px;
        }
    }
</style>