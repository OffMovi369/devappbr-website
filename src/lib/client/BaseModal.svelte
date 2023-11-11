<script>
    import modalsStore from "$lib/client/modalsStore";
    export let dialog;
    import arrow_back from "$lib/assets/arrow_back.svg"
    
    function onModalClose () {
        dialog.close()
        $modalsStore.modalWindow = undefined
        $modalsStore.data = {}
    }


    $: if (dialog && $modalsStore.showModal) dialog.showModal();
</script>

<dialog
    bind:this={dialog}
    on:close={() => {$modalsStore.showModal = false}}
    on:click|self={() => dialog.close()}
>
    <div class="back">
        <a id="back" href="/" class="main_sm" on:click|preventDefault= {onModalClose}>
            <img class="back" src="{arrow_back}" alt="">
            <span>Назад </span> 
        </a>
    </div>
    <div id="dilog_content">
        
        <slot />
    </div>

</dialog>

<style>
    
    dialog {
        padding: 0;
        width: 100%;
        height: 100%;
        margin: 0;

    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.8);
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    dialog:modal{
        max-width: 100vw;
        max-height: 100vh;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #dilog_content{
        background-color: var(--black-color);
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        width: 100%;
        max-width: 550px;
        max-height: fit-content;

    }
    .back:not(.back img){
        margin-top: 24px;
        margin-bottom: 24px;
        max-width: 550px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    } 
    #back{
        display: flex;
        padding-left: 12px;
        column-gap: 4px;
        max-width: 40%;
    }
    #back img{
        height: 24px;
        width: 24px;
        transition: all .2s ease-out;
    }
    #back:hover img{
        transform: translateX(-12px);
    }
    @media(max-width:350px){
    }
    @media(max-height:900px){
        #dilog_content{
            height: fit-content;
            max-height: 100%;
            overflow-y: auto;
            overflow-x: visible;
        }
    }


</style>