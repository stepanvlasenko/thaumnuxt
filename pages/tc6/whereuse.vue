<template>
    <div>
        <h2>Где эссенция используется</h2>
        <p>Здесь ты можешь выбрать эссенцию и узнать<br>
        в каких других эссенциях она есть.<br>
        Это полезно в алхимической центрифуге.</p>

        <div class="function">
            <img :src="chosenEssentia.src">
            <img src="/images/arrow.svg">
            <img v-for="essentia of containers" :key="essentia.name" :src="essentia.src" :class='"img-choose"'>
        </div>
        <EssentiasTC6List @chosen-essentia="changeEssentia"></EssentiasTC6List>
    </div>
</template>

<script setup>
    import { useRecipesStore } from '~~/store/recipes';
    import { useEssentiasStore } from '~~/store/essentias';

    const essentias = useEssentiasStore().essentiasTC6
    const recipes = useRecipesStore().recipes

    const chosenEssentia = ref(essentias[0])
    const containers = ref([])

    const changeEssentia = (essentia) => {
        chosenEssentia.value = essentia
        changeContainers(essentia)
    }

    const changeContainers = (essentia) => {
        containers.value = []
        
        const recipesWhereuse = recipes.filter((recipe) => (recipe.part1 === essentia.name || 
        recipe.part2 === essentia.name) && 
        recipe.part2 != recipe.part1)
        
        recipesWhereuse.forEach((recipe) => {
            containers.value.push(essentias.find((essentia) => essentia.name === recipe.result))
        })
    }
</script>

<style scoped>
    .function {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    img {
        width: 5rem;
        height: 5rem;
    }
</style>