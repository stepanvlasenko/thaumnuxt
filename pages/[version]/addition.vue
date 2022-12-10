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
                <EssentiasList :essentias="essentias" @essentia-click="changeFirstEssentia"></EssentiasList>
            </div>
            <div>
                <h2>Вторая эссенция</h2>
                <EssentiasList :essentias="essentias" @essentia-click="changeSecondEssentia"></EssentiasList>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useRecipesStore } from '~~/store/recipes';
    import { useEssentiasStore } from '~~/store/essentias';

    const essentiasStore = storeToRefs(useEssentiasStore())
    const recipesStore = storeToRefs(useRecipesStore())
    const version = computed(() => useRoute().params.version)

    const essentias = computed(() => {
        return essentiasStore.essentias.value.filter((e) => e.version.includes(version.value))
    })

    const firstEssentia = ref(essentiasStore.backEssentia)
    const secondEssentia = ref(essentiasStore.backEssentia)
    const resultEssentia = ref(essentiasStore.backEssentia)

    const changeFirstEssentia = (essentia) => {
        console.log(essentia)
        // firstEssentia.value = essentia
        // additionEssentia(firstEssentia.value, secondEssentia.value)
    }
    const changeSecondEssentia = (essentia) => {
        secondEssentia.value = essentia
        // additionEssentia(firstEssentia.value, secondEssentia.value)
    }

    const additionEssentia = (part1, part2) => {
        
        const recipe = recipesStore.recipes.value.find((recipe) => {
            return (recipe[version.value].part1 === part1.name && recipe[version.value].part2 === part2.name) ||
            (recipe[version.value].part1 === part2.name && recipe[version.value].part2 === part1.name)
        }) || recipesStore.backRecipe

        resultEssentia.value = essentias.value.find((essentia) => essentia.name === recipe.result)
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