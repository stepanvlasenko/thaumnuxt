<template>
    <div class="info__card">
        <h3 class="title"><slot></slot></h3>
        <img :src="imageSrc" alt="">
    </div>
</template>

<script setup>
    const props = defineProps({
        imageSrc: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    .info__card {
        background-color: rgba(180, 139, 180, 0.4);
        width: 100%;
        height: 100%;

        border: 1px solid black;
        border-radius: 20px;
        padding: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        transition: all 1s;

    }
    .info__card:hover {
        background-color: rgb(180, 139, 180);
    }
    img {
        width: 80%;
    }
</style>