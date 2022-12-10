<template>
    <div class="list">
        <img v-for="essentia of essentias" :key="essentia.name" :src="essentia.src" :class='"img-choose"' @click="handleClick(essentia)">
    </div>
</template>

<script setup>
    import { useEssentiasStore } from '~~/store/essentias';

    const emit = defineEmits(['chosen-essentia'])

    const essentias = useEssentiasStore().essentiasTC6

    const handleClick = (essentia) => emit('chosen-essentia', essentia)
    
</script>

<style scoped>
    img {
        cursor: pointer;
    }
    .list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
    .img-choose {
        width: 3.5rem;
        height: 3.5rem;
    }
</style>