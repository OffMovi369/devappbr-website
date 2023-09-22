<script>
    import BaseModal from "$lib/client/BaseModal.svelte";
    import { priceFormat } from "$lib/client/priceFormat.js"

    let clients = 0;
    let sales = 0;
    let receipt = 0;

    let swap =false
    let backSwap = false

    let graph = false
    import ToolTip from "./toolTip.svelte";


    import { scaleLinear } from 'd3-scale';
	import points from '$lib/client/data.js';
	const yTicks = [0, 60.000, 120.000, 240.000, 680.000];
	const xTicks = [0 ,1, 2, 3, 4, 5];
	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 500;
	let height = 200;
    let hoverData;

	$: xScale = scaleLinear()
		.domain([minX, maxX])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: minX = points[0].x;
	$: maxX = points[points.length - 1].x;
	$: path = `M${points.map((p) => `${xScale(p.x)},${yScale(p.y)}`).join('L')}`;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}
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
                        <input type="number" required placeholder="Среднее кол-во" bind:value={clients}>
                    </label>
                    <label for="" class="input_row">
                        <p class="main_sm">Повторные продажи</p>
                        <input type="number" required placeholder="Среднее кол-во" bind:value={sales}>
                    </label>
                    <label for="" class="input_row">
                        <p class="main_sm">Средний чек за сделку</p>
                        <input type="number" required placeholder="Среднее кол-во" bind:value={receipt}>
                    </label>
                </div>
                <button class="main_wt_btn" type="button" on:click={ ()=>(swap=true, backSwap=false,graph=true )}>Рассчитать</button>
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
                        <div class="ressult_div">{priceFormat(clients * sales * receipt * 1)}</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">2 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">{priceFormat(clients * sales * receipt * 2)}</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">3 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">{priceFormat(clients * sales * receipt * 3)}</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">4 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">{priceFormat(clients * sales * receipt * 4)}</div>
                    </div>
                </div>
                <div class="result">
                    <div class="">
                        <p class="main_sm">5 год</p>
                    </div>
                    <div class="">
                        <p class="sm_sm">Повторные продажи на</p>
                        <div class="ressult_div">{priceFormat(clients * sales * receipt * 5)}</div>
                    </div>
                </div>
            </div>
            {#if  graph }
                <div class="chart" bind:clientWidth={width} bind:clientHeight={height} on:mouseleave={()=>{hoverData=null}}>
                    <svg>
                        <g class="axis y-axis" transform="translate(0, {padding.top})" >
                            {#each yTicks as tick}
                                <g class="tick tick-{tick}" transform="translate(0, {yScale(tick) - padding.bottom})" >
                                    <line x2="100%" />
                                </g>
                            {/each}
                        </g>
            
                        <g class="axis x-axis" >
                            {#each xTicks as tick}
                                <g class="tick tick-{tick}" transform="translate({xScale(tick)},{height})">
                                    <line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0" />
                                    <text y="-2" >{width > 380 ? tick : formatMobile(tick)}</text>
                                </g>
                            {/each}
                        </g>
                        {#each points as point}
                            <circle 
                            cx={xScale(point.x)} 
                            cy={yScale(point.y)} 
                            r="6"
                            on:mouseenter={()=>{ hoverData= point }}
                            
                            ></circle>
                            
                        {/each}
                        <path class="path-line" d={path} />
                        
                    </svg>
                    {#if hoverData}
                        <ToolTip points={hoverData} {xScale} {yScale}></ToolTip>
                    {/if}
                </div>
            {/if}

            <button class="main_wt_btn" type="submit" on:click={ ()=>(swap=false, backSwap=true ,graph=false)} >Рассчитать снова</button>
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
        row-gap: 12px;
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
     .chart,
	h2,

	svg {
		position: relative;
		width: 100%;
		height: 200px;
		overflow: visible;
	}

	.tick {
		font-size: 0.725em;
		font-weight: 200;

	}

	.tick line:not(.bottom_line){
		stroke: #888;
		stroke-dasharray: 2;
	}
	.tick text {
		fill: #888;
		text-anchor: start;
        
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.path-line {
		fill: none;
		stroke: rgba(4, 201, 106, 1);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}
    circle {
		fill: rgba(5, 198, 106, 1);
		fill-opacity: 1;
		stroke: rgba(5, 198, 106, 1);
        transition: all .2s ease-out;
        position: relative;
        cursor: pointer;

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