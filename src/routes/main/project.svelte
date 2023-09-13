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
        {
            id:4,
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
</script>

<svelte:window bind:scrollY={oh2} bind:innerHeight/>
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
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(360px, 360px));
        align-items: center;
        justify-content: space-between;
        row-gap: 30px;
        height: 924px;
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
</style>