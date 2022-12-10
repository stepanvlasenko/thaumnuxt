<template>
    <div class="page-centered">
        <Header></Header>
        <NuxtPage class="main"></NuxtPage>
        <Authorship></Authorship>
    </div>
</template>
<style>
    * {
        font-family: Calibri;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 18px;
        background-image: url('/images/background.png');
    }
    a {
        color: black;
        text-decoration: none;
    }
    .main, .header, .footer {
        padding: 0 18%;
    }
    .main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .page-centered {
        margin: 0 auto;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
