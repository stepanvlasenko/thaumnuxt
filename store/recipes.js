import { defineStore } from "pinia";


export const useRecipesStore = defineStore('recipes', () => {
    const recipes = ref([
        {
            "result": "back",
            "part1": "back",
            "part2": "back"
        },
        {
            "result": "aer",
            "part1": "aer",
            "part2": "aer"
        },
        {
            "result": "alienis",
            "part1": "vacuos",
            "part2": "tenebrae"
        },
        {
            "result": "alkimia",
            "part1": "praecantatio",
            "part2": "aqua"
        },
        {
            "result": "aqua",
            "part1": "aqua",
            "part2": "aqua"
        },
        {
            "result": "auram",
            "part1": "praecantatio",
            "part2": "aer"
        },
        {
            "result": "aversio",
            "part1": "spiritus",
            "part2": "perditio"
        },
        {
            "result": "bestia",
            "part1": "motus",
            "part2": "victus"
        },
        {
            "result": "cognitio",
            "part1": "ignis",
            "part2": "spiritus"
        },
        {
            "result": "desederium",
            "part1": "spiritus",
            "part2": "vacuos"
        },
        {
            "result": "exanimis",
            "part1": "motus",
            "part2": "mortuus"
        },
        {
            "result": "fabrico",
            "part1": "permutatio",
            "part2": "instrumentum"
        },
        {
            "result": "gelum",
            "part1": "ignis",
            "part2": "perditio"
        },
        {
            "result": "herba",
            "part1": "victus",
            "part2": "terra"
        },
        {
            "result": "humanus",
            "part1": "spiritus",
            "part2": "victus"
        },
        {
            "result": "ignis",
            "part1": "ignis",
            "part2": "ignis"
        },
        {
            "result": "instrumentum",
            "part1": "metallum",
            "part2": "potentia"
        },
        {
            "result": "lux",
            "part1": "aer",
            "part2": "ignis"
        },
        {
            "result": "machina",
            "part1": "motus",
            "part2": "instrumentum"
        },
        {
            "result": "metallum",
            "part1": "terra",
            "part2": "ordo"
        },
        {
            "result": "mortuus",
            "part1": "victus",
            "part2": "perditio"
        },
        {
            "result": "motus",
            "part1": "aer",
            "part2": "ordo"
        },
        {
            "result": "ordo",
            "part1": "ordo",
            "part2": "ordo"
        },
        {
            "result": "perditio",
            "part1": "perditio",
            "part2": "perditio"
        },
        {
            "result": "permutatio",
            "part1": "perditio",
            "part2": "ordo"
        },
        {
            "result": "potentia",
            "part1": "ordo",
            "part2": "ignis"
        },
        {
            "result": "praecantatio",
            "part1": "potentia",
            "part2": "aer"
        },
        {
            "result": "praemunio",
            "part1": "spiritus",
            "part2": "terra"
        },
        {
            "result": "sensus",
            "part1": "aer",
            "part2": "spiritus"
        },
        {
            "result": "spiritus",
            "part1": "victus",
            "part2": "mortuus"
        },
        {
            "result": "tenebrae",
            "part1": "vacuos",
            "part2": "lux"
        },
        {
            "result": "terra",
            "part1": "terra",
            "part2": "terra"
        },
        {
            "result": "vacuos",
            "part1": "aer",
            "part2": "perditio"
        },
        {
            "result": "victus",
            "part1": "terra",
            "part2": "aqua"
        },
        {
            "result": "vinculum",
            "part1": "motus",
            "part2": "perditio"
        },
        {
            "result": "vitium",
            "part1": "perditio",
            "part2": "praecantatio"
        },
        {
            "result": "vitreus",
            "part1": "terra",
            "part2": "aer"
        },
        {
            "result": "volatus",
            "part1": "aer",
            "part2": "motus"
        }
    ])

    return {
        recipes
    }
})