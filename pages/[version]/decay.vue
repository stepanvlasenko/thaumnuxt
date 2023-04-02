<template>
    <div>
        <h2>Распад Эссенций</h2>
        <p>Здесь ты можешь выбрать эссенцию и узнать<br>
        из чего она состоит и на что она распадётся<br>
        в алхимической центрифуге.</p>

        <div class="function">
            <img :src="chosenEssentia.src">
            <img src="/images/arrow.svg">
            <img class="pointer"
                @click="changeEssentia(part1Essentia)"
                :src="part1Essentia.src">
            <img src="/images/plus.svg">
            <img class="pointer"
                @click="changeEssentia(part2Essentia)"
                :src="part2Essentia.src">
        </div>
        <EssentiasList
            :essentias="essentias"
            @essentia-click="changeEssentia">
    </EssentiasList>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useRecipesStore } from '~~/store/recipes';
    import { useEssentiasStore } from '~~/store/essentias';

    const essentiasStore = storeToRefs(useEssentiasStore())
    const recipesStore = storeToRefs(useRecipesStore())
    const version = computed(() => useRoute().params.version)

    const essentias = ref(essentiasStore.essentias.value
        .filter((e) => e.version.includes(version.value)))

    const chosenEssentia = ref(essentiasStore.backEssentia.value)
    const part1Essentia = ref(essentiasStore.backEssentia.value)
    const part2Essentia = ref(essentiasStore.backEssentia.value)

    const changeEssentia = (essentia) => {
        chosenEssentia.value = essentia
        changeParts(essentia)
    }
    const changeParts = (essentia) => {
        const recipe = recipesStore.recipes.value.find((recipe) => recipe.result === essentia.name)[version.value]
            || recipesStore.backRecipe.value 

        part1Essentia.value = essentias.value.find((essentia) => recipe.part1 === essentia.name)
        part2Essentia.value = essentias.value.find((essentia) => recipe.part2 === essentia.name)
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