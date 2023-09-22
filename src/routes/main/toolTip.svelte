<script>
    export let points;
    export let xScale;
    export let yScale;
</script>

<div class="tooltip" style="position: absolute; top:{yScale(points.y)-40}px; left:{xScale(points.x)-45}px">
    <p class="result"> {points.y}</p>
</div>
<style>
    .tooltip{
        background-color: var(--black-color);
        border: 2px solid var(--brightgray-color);
        border-radius: 36px;
        padding: 2px 10px;
        pointer-events: none;
        transition: all .2s ease-out;
    }
    .result{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--graywhite-color);
    }
</style>