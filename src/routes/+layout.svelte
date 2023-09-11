<script>
    import "../app.css"
    import logo from "$lib/assets/logo.svg"
    import Scrollbar from 'smooth-scrollbar';

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<header>
    <div class="header_content">
        <div class="">
            <a href="#"><img src="{ logo }" alt=""></a>
        </div>
        <div class="nav_menu">
            <a href="#" class="nav_link">О нас</a>
            <a href="#" class="nav_link">Этапы </a>
            <a href="#" class="nav_link">Проекты</a>
            <a href="#" class="nav_link">Команда</a>
        </div>
        <div class="calc">
            <button class="main_wt_btn">Калькулятор продаж</button>
        </div>
    </div>
</header>
<body>
    <slot />
</body>
 


<style>
    header{
        border-bottom: 1px solid var(--brightgray-color);
    }
    .header_content{
        max-width: 1120px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }
    .header_content:first-child{
        display: flex;
        align-items: center;
    }
    .nav_menu{
        display: flex;
        align-items: center;
        column-gap: 32px;
    }
    .nav_link{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--white-color);
        transition: all .2s ease-out;
    }
    .nav_link:hover{
        color: var(--gray-color);
    }
</style>
