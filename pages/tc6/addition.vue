<template>
    <div>
        <h2>Сложение Эссенций</h2>
        <p>Здесь ты можешь выбрать две эссенции и узнать<br>
        что они могут дать при сложении,<br>
        или же они несовместимимы.</p>

        <div class="function">
            <img :src="firstEssentia.src">  
            <img src="/images/plus.svg">
            <img :src="secondEssentia.src">  
            <img src="/images/arrow.svg">
            <img :src="resultEssentia.src" alt="">
        </div>
        
        <div class="container">
            <div>
                <h2>Первая эссенция</h2>
                <EssentiasTC6List @chosen-essentia="changeFirstEssentia"></EssentiasTC6List>
            </div>
            <div>
                <h2>Вторая эссенция</h2>
                <EssentiasTC6List @chosen-essentia="changeSecondEssentia"></EssentiasTC6List>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    import { useRecipesStore } from '~~/store/recipes';
    import { useEssentiasStore } from '~~/store/essentias';

    const essentias = useEssentiasStore().essentiasTC6
    const recipes = useRecipesStore().recipes

    const firstEssentia = ref(essentias[0])
    const secondEssentia = ref(essentias[0])
    const resultEssentia = ref(essentias[0])


    const changeFirstEssentia = (essentia) => {
        firstEssentia.value = essentia
        additionEssentia(firstEssentia.value, secondEssentia.value)
    }
    const changeSecondEssentia = (essentia) => {
        secondEssentia.value = essentia
        additionEssentia(firstEssentia.value, secondEssentia.value)
    }

    const additionEssentia = (part1, part2) => {
        
        const recipe = recipes.find((recipe) => {
            return (recipe.part1 === part1.name && recipe.part2 === part2.name) ||
            (recipe.part1 === part2.name && recipe.part2 === part1.name)
        }) || recipes[0]

        resultEssentia.value = essentias.find((essentia) => essentia.name === recipe.result)
    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
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