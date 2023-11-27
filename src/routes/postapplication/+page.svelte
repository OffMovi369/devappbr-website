<script>

</script>

<div class="postapp">
    <div class="postapp_ccontent">
        <h1 class="post_title">Благодарим за заявку.</h1>
        <h1 class="post_title"> Наш менеджер свяжется с Вами в ближайшее время</h1>
        <p class="post_dis">Вы можете посмотреть видео с нашими проектами или прочитать блог, в котором мы делимся нашими исследованиями</p>
        <div class="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6PRUQQTS_J4?si=AC2GAI5XJLtVlDXZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</div>

<style>
    .postapp_ccontent{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .postapp{
        max-width: 1120px;
        margin: 100px auto;
    }
    .post_title{
        font-size: 48px;
        font-weight: 700;
        line-height: 66px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--white-color);
        margin-bottom: 12px;
    }
    .post_dis{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: -0.01em;
        text-align: center;
        width:50% ;
        color: var(--white-color);
    }
    .video{
        position: relative;
        width: 100%;
        height: 550px;
        border: 1px solid var(--brightgray-color);
        border-radius: 36px;
        overflow: hidden;
        margin-top: 48px;
    }

    @media(max-width:1180px){
        .postapp{
            margin: 100px 32px;
        }
    }
    @media(max-width:800px){
        .video{
            height: 450px;
        }
        .post_dis{
            width: 70%;
        }
    }
    @media(max-width:500px){
        .post_title{
            font-size: 38px;
            font-weight: 700;
            line-height: 50px;
            letter-spacing: 0em;
            text-align: center;
            color: var(--white-color);
            margin-bottom: 12px;
        }
        .video{
            height: 380px;
        }
    }
</style>
