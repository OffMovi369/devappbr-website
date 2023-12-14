<script>
    import { fly, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { slide } from 'svelte/transition'
    export let open;
    import modalsStore from "$lib/client/modalsStore";
    import CalcModalWindow from "./CalcModalWindow.svelte";

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
            el.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
</script>

{#if open}
    <div class="menu" transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
        <div class="nav_menu" >
            <a href="#owners" class="nav_link" on:click|preventDefault={scrollIntoView} on:click={()=> open= false}>О нас</a>
            <a href="#stages" class="nav_link" on:click|preventDefault={scrollIntoView} on:click={()=> open= false}>Этапы </a>
            <a href="#project" class="nav_link" on:click|preventDefault={scrollIntoView} on:click={()=> open= false} >Проекты</a>
            <a href="#comrads" class="nav_link" on:click|preventDefault={scrollIntoView} on:click={()=> open= false}>Команда</a>
        </div>
        <div class="calc" >
            <button class="main_tr_btn" on:click={() => {{$modalsStore.modalWindow = CalcModalWindow ; $modalsStore.showModal=true}}} on:click={()=> open= false}>Калькулятор продаж</button>
        </div>
    </div>

    
{/if}

<style>
    .menu{
        position: absolute;
        right: 0;
        background-color: var(--black-color);
        border-radius: 36px 0 36px 36px;
        border: 1px solid var(--brightgray-color);
        display: flex;
        flex-direction: column;
        padding: 24px;
        margin-top: 10px;
        width: 300px;
        z-index: 999999;
    }
    .nav_menu{
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        align-items: start;
    }
    .calc{
        margin-top: 32px;
    }
    .calc .main_tr_btn{
        width: 100%;
        justify-content: center;
    }
    @media(max-width:428px){
        .menu{
            width: 280px;
        }
    }
    @media(max-width:330px){
        .menu{
            width: 250px;
        }
    }
    @media(max-width:300px){
        .menu{
            width: 240px;
        }
    }
</style>