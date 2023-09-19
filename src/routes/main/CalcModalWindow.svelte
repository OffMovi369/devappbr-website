<script>
    import BaseModal from "$lib/client/BaseModal.svelte";



    let swap =false
    let backSwap = false
</script>
<BaseModal title="Настройка платежной системы">
    <div class="calc">
        <form action="" class:swap_complete_lt={swap === true }  class="apl_form"  class:swap_backcomplete_lt={backSwap === true } >
            <div class="block_left" >
                <div class="title_block">
                    <p class="title">Калькулятор повторных продаж</p>
                    <p class="main_sm">Расчёт пройдет автоматически, согласно нашим алгоритмам</p>
                </div>
                <div class="input_block">
                    <label for="" class="input_row">
                        <p class="main_sm">Постоянные клиенты</p>
                        <input type="number" required placeholder="Среднее кол-во">
                    </label>
                    <label for="" class="input_row">
                        <p class="main_sm">Повторные продажи</p>
                        <input type="number" required placeholder="Среднее кол-во">
                    </label>
                    <label for="" class="input_row">
                        <p class="main_sm">Средний чек за сделку</p>
                        <input type="number" required placeholder="Среднее кол-во">
                    </label>
                </div>
                <button class="main_wt_btn" type="button" on:click={ ()=>(swap=true, backSwap=false  )}>Рассчитать</button>
            </div>
        </form>
        <div class="block_right" class:swap_complete_rt={swap === true } class:swap_backcomplete_rt={backSwap === true } >
            <div class="title_block">
                <p class="title">Прогноз</p>
            </div>
            <div class="input_block">
                <div class="result">
                    <div class="">
                        <p class="main_sm">1 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">60.000</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">2 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">120.000</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">3 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">180.000</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">4 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">240.000</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">5 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">300.000</div>
                    </div>
                </div>
            </div>
            <button class="main_wt_btn" type="submit" on:click={ ()=>(swap=false, backSwap=true )} >Рассчитать снова</button>
        </div>
    </div>
</BaseModal>

<style>
    .swap_complete_lt{
        transform: translateX(-115%);
    }
    .swap_complete_rt{
        transform: translateX(-140%);
    }
    .swap_backcomplete_lt{
        transform: translateX(0);
    }
    .swap_backcomplete_rt{
        transform: translateX(0);
    }
    .title_block{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .block_left{
        display: flex;
        flex-direction: column;
        transition: all .2s ease-out;
        width: 100%;
        max-width: 323px;
        justify-content: space-between;
    }
    .apl_form{
        display: flex;
        max-width: 320px;
        transition: all .2s ease-out;
    }
    .calc{
        width: 350%;
        column-gap: 130px;
        display: flex;
    }
    .block_right{
        display: flex;
        flex-direction: column;
        transition: all .2s ease-out;
        width: 100%;
        max-width: 323px;
        justify-content: space-between;
    }
    .input_block{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .input_row input{
        height: 50px;
        border-radius: 36px ;
        border: 2px solid var(--brightgray-color);
        color: var(--white-color);
        width: 100%;
        padding: 10px 25px;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
    }
    .input_row{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    form .main_wt_btn{
        justify-content: center;
        margin-top: 20px;
    }
    .sm_sm{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--white-color);
        width: 40%;
    }
    .ressult_div{
        padding: 5px 25px;
        border-radius: 36px;
        border: 2px solid var(--whitegay-color);
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--white-color);
        display: inline;

    }
    .result div:nth-child(2){
        display: flex;
        justify-content: space-between;
    }
    .block_right .main_wt_btn{
        justify-content: center;
        margin-top: 40px;
    }
    .result {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media(max-width:400px){
        .block_right{
            max-width: 300px;
        }
        .block_left{
            max-width: 300px;
        }
    }
    @media(max-width:370px){
        .block_right{
            max-width: 280px;
        }
        .block_left{
            max-width: 280px;
        }
    }
    @media(max-width:350px){
        .block_right{
            max-width: 270px;
        }
        .block_left{
            max-width: 270px;
        }
    }
</style>