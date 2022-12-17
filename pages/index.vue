<template>
    <div>
        <div>
            <h2>Здравствуй тауматург!</h2>
            <p>На этом сайте ты сможешь найти несколько полезных для тебя фишек,<br>
            которые помогут тебе исследовать таумкрафт проще.<br>
            Нужные тебе функции представлены ниже.</p>
        </div>
        <h1>Thaumcraft 4</h1>
        <div class="info__container">
            <NuxtLink to="/v4/addition"><InfoCard image-src="/images/plus.svg">Сложение эссенций</InfoCard></NuxtLink>
            <NuxtLink to="/v4/decay"><InfoCard image-src="/images/alumentum.svg">Распад эссенций</InfoCard></NuxtLink>
            <NuxtLink to="/v4/whereuse"><InfoCard image-src="/images/book.svg">Где эссенция используется</InfoCard></NuxtLink>
        </div>
        <h1>Thaumcraft 6</h1>
        <div class="info__container">
            <NuxtLink to="/v6/addition"><InfoCard image-src="/images/plus.svg">Сложение эссенций</InfoCard></NuxtLink>
            <NuxtLink to="/v6/decay"><InfoCard image-src="/images/alumentum.svg">Распад эссенций</InfoCard></NuxtLink>
            <NuxtLink to="/v6/whereuse"><InfoCard image-src="/images/book.svg">Где эссенция используется</InfoCard></NuxtLink>
        </div>
    </div>
</template>

<style scoped>
    .info__container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
</style>
