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
>

    <div id="dilog_content">
        <div class="back">
            <a id="back" href="/" class="main_sm" on:click|preventDefault= {onModalClose}>
                <img class="back" src="{arrow_back}" alt="">
                <span>Назад </span> 
            </a>
        </div>
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
        background: rgba(0, 0, 0, 0.3);
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
    }
    #dilog_content{
        background-color: var(--black-color);
        padding: 40px 40px 60px 40px;
        border-radius: 36px;
        border: 2px solid var(--brightgray-color);
        width: 100%;
        max-width: 400px;
        max-height: fit-content;
        overflow-x: hidden;
    }
    .back{
        margin-bottom: 18px;
        
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
        #dilog_content{
            padding: 30px 30px 30px 30px;
        }
    }


</style>