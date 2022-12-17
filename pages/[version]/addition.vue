<template>
    <div>
        <h2>Сложение Эссенций</h2>
        <p>Здесь ты можешь выбрать две эссенции и узнать<br>
        что они могут дать при сложении,<br>
        или же они несовместимимы.</p>

        <div class="function">
            <img :src="firstEssentia.image">
            <img src="/images/plus.svg">
            <img :src="secondEssentia.image">
            <img src="/images/arrow.svg">
            <img :src="resultEssentia.image" alt="">
        </div>

        <div class="container">
            <div>
                <h2>Первая эссенция</h2>
                <EssentiasList
                    :essentias="essentias"
                    @essentia-click="changeFirstEssentia"
                />
            </div>
            <div>
                <h2>Вторая эссенция</h2>
                <EssentiasList
                    :essentias="essentias"
                    @essentia-click="changeSecondEssentia"></EssentiasList>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useRecipesStore } from '~~/store/recipes';
    import { useEssencesStore } from '~~/store/essences';

    const essenceStore = storeToRefs(useEssencesStore())
    const recipesStore = storeToRefs(useRecipesStore())
    const version = computed(() => useRoute().params.version)

    const essentias = ref(essenceStore.essences.value
        .filter((e) => e.version.includes(version.value))
    )

    const firstEssentia = ref(essenceStore.backEssentia.value)
    const secondEssentia = ref(essenceStore.backEssentia.value)
    const resultEssentia = ref(essenceStore.backEssentia.value)

    const changeFirstEssentia = (essentia) => {
        firstEssentia.value = essentia
        additionEssentia(firstEssentia.value, secondEssentia.value)
    }
    const changeSecondEssentia = (essentia) => {
        secondEssentia.value = essentia
        additionEssentia(firstEssentia.value, secondEssentia.value)
    }

    const additionEssentia = (firstEssence, secondEssence) => {
        const recipe = recipesStore.recipes.value.find((recipe) => {
            if (!Object.keys(recipe).includes(version.value)) { return }

            return (recipe[version.value].firstEssence === firstEssence.name && recipe[version.value].secondEssence === secondEssence.name) ||
            (recipe[version.value].firstEssence === secondEssence.name && recipe[version.value].secondEssence === firstEssence.name)
        }) || recipesStore.backRecipe.value

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
