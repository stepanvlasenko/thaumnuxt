<template>
    <div class="header">
        <RouterLink to="/" class="header__logo" id="header__title">Nitor</RouterLink>

        <div class="header__container">
            <div class="header__item" ref="version4">
                <p class="verlink">Thaumcraft 4</p>
                <div class="nav tc4nav" v-if="Tc4NavStatus">
                    <NuxtLink class="nav__link" to="/tc4/addition">Сложение эссенций</NuxtLink>
                    <NuxtLink class="nav__link" to="/tc4/decay">Распад эссенций</NuxtLink>
                    <NuxtLink class="nav__link" to="/tc4/whereuse">Где эссенция использутся</NuxtLink>
                </div>
            </div>
            <div class="header__item" ref="version6">
                <p class="verlink">Thaumcraft 6</p>
                <div class="nav tc6nav" v-if="Tc6NavStatus">
                    <NuxtLink class="nav__link" to="/tc6/addition">Сложение эссенций</NuxtLink>
                    <NuxtLink class="nav__link" to="/tc6/decay">Распад эссенций</NuxtLink>
                    <NuxtLink class="nav__link" to="/tc6/whereuse">Где эссенция использутся</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const version4 = ref()
    const version6 = ref()

    const Tc4NavStatus = useElementHover(version4)
    const Tc6NavStatus = useElementHover(version6)
</script>

<style scoped>
    a {
        color: black;
        text-decoration: none;
    }
    .nav__link {
        transition: all 200ms;
    }
    .nav__link:hover {
        color: whitesmoke;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
    .header__container {
        display: flex;
        gap: 5rem;
    }
    .header__logo {
        padding: 1rem 0;
    }
    .header__item {
        padding: 1rem 0;
    }
    .header__item:hover {
        background-color: rgba(180, 139, 180);
        border-radius: 5px;
    }
    .nav {
        position: absolute;
        top: 2.5rem;
        padding: 0.3rem;
        background-color: rgba(180, 139, 180);
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .verlink {
        padding: 0;
    }

    #header__title {
        font-weight: bold;
    }
</style>