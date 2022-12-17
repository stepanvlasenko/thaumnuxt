<template>
    <div>
        <h2>Где эссенция используется</h2>
        <p>Здесь ты можешь выбрать эссенцию и узнать<br>
        в каких других эссенциях она есть.<br>
        Это полезно в алхимической центрифуге.</p>

        <div class="function">
            <img :src="chosenEssentia.image">
            <img src="/images/arrow.svg">
            <img
                v-for="essentia of containers"
                :key="essentia.name"
                :src="essentia.image"
                :class='"img-choose"'>
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
    import { useEssencesStore } from '@/store/essences';

    const essenceStore = storeToRefs(useEssencesStore())
    const recipesStore = storeToRefs(useRecipesStore())
    const version = computed(() => useRoute().params.version)

    const essentias = ref(essenceStore.essences.value
        .filter((e) => e.version.includes(version.value)))

    const chosenEssentia = ref(essenceStore.backEssentia.value)

    const containers = computed(() =>{
        const _containers = []
        const chosenEssentiaName = chosenEssentia.value.name

        const recipesWhereuse = recipesStore.recipes.value.filter((recipe) => {
            if (!Object.keys(recipe).includes(version.value)) { return }

            return ((chosenEssentiaName === recipe[version.value].firstEssence ||
                chosenEssentiaName === recipe[version.value].secondEssence) &&
                recipe[version.value].firstEssence !== recipe[version.value].secondEssence)
        })

        recipesWhereuse.forEach((r) => {
            _containers.push(essenceStore.essences.value.find((e) => e.name === r.result))
        })

        return _containers.length ? _containers : [essenceStore.backEssentia.value]
    })

    const changeEssentia = (essentia) => {
        chosenEssentia.value = essentia
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
