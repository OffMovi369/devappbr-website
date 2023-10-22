<script>
    import arrow_back from "$lib/assets/arrow_back.svg"
    import appstore from "$lib/assets/appstore.png"
    import googleplay from "$lib/assets/googleplay.png"
    import qr from "$lib/assets/qr.png"
    import case_img from "$lib/assets/case_img.png"
</script>

<div class="case">
    <div class="back">
        <a id="back" href="/" class="main_sm">
            <img class="back" src="{arrow_back}" alt="">
            <span>Назад </span> 
        </a>
    </div>
    <div class="main_info">
        <div class="case_left">
            <div class="l">
                <div class="category">
                    <!-- Переменная -->
                    #Категория
                </div>
                <div class="project_name">
                    <!-- Переменная -->
                    Название проекта в 2 строки
                </div>
                <div class="project_disc">
                    <!-- Переменная -->
                    Описание проекта
                </div>
                <div class="project_links">
                    <!-- Переменная -->
                    <a href="#">
                        <img src="{ appstore }" alt="">
                    </a>
                    <!-- Переменная -->
                    <a href="#">
                        <img src="{ googleplay }" alt="">
                    </a>
                </div>
                <div class="qr">
                    <div class="qr_img" style="
                    background-image: url({qr}); 
                    min-width:160px;
                    height:160px;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    ">
                        
                    </div>
                    <div class="project_disc">
                        <!-- Переменная -->
                        Для установки приложения наведите камеру на QR-код
                    </div>
                </div>

            </div>
            
        </div>
        <div class="case_right">
            <img src="{ case_img }" alt="">
        </div>
    </div>
    <div class="discription">
        <!-- Переменная -->
        <p class="title">Заголовок</p>
        <!-- Переменная -->
        <p class="main_sm">Описание</p>
    </div>
</div>

<style>
    .case{
        margin: 40px 0;
    }
    .main_info{
        display: flex;
        align-items: center;
        max-width: 1120px;
        margin: 0 auto;
    }
    .case_left{
        width: 50%;
        display: flex;
        align-items: center;
    }
    .back{
        max-width: 1120px;
        margin: 0 auto;
    }
    #back{
        display: flex;
        padding-left: 12px;
        column-gap: 4px;
        max-width: 1%;
    }
    #back img{
        height: 24px;
        width: 24px;
        transition: all .2s ease-out;
    }
    #back:hover img{
        transform: translateX(-12px);
    }
    .category{
        width: fit-content;
        background-color: var(--white-color);
        padding: 8px 20px;
        border-radius: 100px;
        font-family: Manrope;
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        margin-bottom: 12px;
    }
    .project_name{
        font-family: Manrope;
        font-size: 48px;
        font-weight: 700;
        line-height: 66px;
        letter-spacing: 0em;
        color: var(--white-color);
        margin-bottom: 12px;
    }
    .project_disc{
        font-family: Manrope;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        color: var(--white-color);
    }
    .project_disc:not(.qr .project_disc){
        margin-bottom: 24px;
    }
    .project_links{
        display: flex;
        align-items: center;
        column-gap: 12px;
        margin-bottom: 24px;
    }
    .qr{
        display: flex;
        align-items: center;
        column-gap: 24px;
    }
    .discription{
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .case_right img{
        object-fit: contain;
    }
    @media(max-width:1180px){
        .case{
            margin: 40px 32px;
        }
        .case_left{
            width: 70%;
        }
    }
    @media(max-width:950px){
        .case_left{
            width: 90%;
        }
        .back{
            margin-bottom: 24px;
        }
        .discription{
            margin-top: 24px;
        }
        .project_name{
            font-size: 42px;
            line-height: 50px;
        }
    }
    @media(max-width:800px){
        .main_info{
            flex-direction: column-reverse;
        }
        .case_left{
            width: 100%;
        }
    }
    @media(max-width:600px){
        .project_name{
            font-size: 34px;
            line-height: 45px;
        }
        .project_disc{
            font-size: 15px;
        }
    }
    @media(max-width:445px){
        .project_name{
            font-size: 28px;
            line-height: 38px;
        }
        .project_disc:not(.qr .project_disc){
            font-size: 18px;
            line-height: 24px;
        }
        .case{
            margin: 40px 32px;
        }
        .case_left{
            width: 100%;
        }
        .l{
            width: 100%;
            margin-top: 24px;
        }
        .qr_img{
            height: 130px !important;
            min-width: 130px !important;
        }
    }
    @media(max-width:400px){
        .project_links{
            flex-direction: column;
            row-gap: 12px;
        }
    }
    @media(max-width:350px){
        .qr{
            flex-direction: column;
            row-gap: 12px;
        }
        .qr_img{
            height: 160px !important;
            min-width: 160px !important;
        }
        .qr .project_disc{
            text-align: center;
        }
    }
</style>
