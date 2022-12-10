<template>
    <div>
        <h2>Распад Эссенций</h2>
        <p>Здесь ты можешь выбрать эссенцию и узнать<br>
        из чего она состоит и на что она распадётся<br>
        в алхимической центрифуге.</p>

        <div class="function">
            <img :src="chosenEssentia.src">
            <img src="/images/arrow.svg">
            <img class="pointer" @click="changeEssentia(part1Essentia)" :src="part1Essentia.src">
            <img src="/images/plus.svg">
            <img class="pointer" @click="changeEssentia(part2Essentia)" :src="part2Essentia.src">
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
    const part1Essentia = ref(essentias[0])
    const part2Essentia = ref(essentias[0])

    const changeEssentia = (essentia) => {
        chosenEssentia.value = essentia
        changeParts(essentia)
    }
    const changeParts = (essentia) => {
        const recipe = recipes.find((recipe) => recipe.result === essentia.name)
        
        part1Essentia.value = essentias.find((essentia) => recipe.part1 === essentia.name)
        part2Essentia.value = essentias.find((essentia) => recipe.part2 === essentia.name)
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
    .pointer {
        cursor: pointer;
    }
</style>