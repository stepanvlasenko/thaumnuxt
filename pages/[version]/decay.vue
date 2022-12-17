<template>
    <div>
        <h2>Распад Эссенций</h2>
        <p>Здесь ты можешь выбрать эссенцию и узнать<br>
        из чего она состоит и на что она распадётся<br>
        в алхимической центрифуге.</p>

        <div class="function">
            <img :src="chosenEssentia.image">
            <img src="/images/arrow.svg">
            <img class="pointer"
                @click="changeEssentia(firstEssenceEssentia)"
                :src="firstEssenceEssentia.image">
            <img src="/images/plus.svg">
            <img class="pointer"
                @click="changeEssentia(secondEssenceEssentia)"
                :src="secondEssenceEssentia.image">
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
    import { useEssencesStore } from '~~/store/essences';

    const essenceStore = storeToRefs(useEssencesStore())
    const recipesStore = storeToRefs(useRecipesStore())
    const version = computed(() => useRoute().params.version)

    const essentias = ref(essenceStore.essences.value
        .filter((e) => e.version.includes(version.value)))

    const chosenEssentia = ref(essenceStore.backEssence.value)
    const firstEssenceEssentia = ref(essenceStore.backEssence.value)
    const secondEssenceEssentia = ref(essenceStore.backEssence.value)

    const changeEssentia = (essentia) => {
        chosenEssentia.value = essentia
        changeParts(essentia)
    }
    const changeParts = (essentia) => {
        const recipe = recipesStore.recipes.value.find((recipe) => recipe.result === essentia.name)[version.value]
            || recipesStore.backRecipe.value

        firstEssenceEssentia.value = essentias.value.find((essentia) => recipe.firstEssence === essentia.name)
        secondEssenceEssentia.value = essentias.value.find((essentia) => recipe.secondEssence === essentia.name)
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
