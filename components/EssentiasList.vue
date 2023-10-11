<template>
    <div class="list">
        <img
            v-for="essentia of essentias"
            :key="essentia.name"
            :src="essentia.image"
            :class='"img-choose"'
            @click="handleClick(essentia)"
        >
    </div>
</template>

<script setup>
const props = defineProps({
    essentias: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['essentia-click'])

const handleClick = (essentia) => emit('essentia-click', essentia)
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
