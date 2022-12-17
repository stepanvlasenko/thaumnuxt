import { defineStore } from "pinia";


export const useRecipesStore = defineStore('recipes', () => {
    const recipes = ref([
        {
            "result": "back",
            "v4": {
                "part1": "back",
                "part2": "back"
            },
            "v6": {
                "part1": "back",
                "part2": "back"
            },
        },
        {
            "result": "aer",
            "v4": {
                "part1": "aer",
                "part2": "aer"
            },
            "v6": {
                "part1": "aer",
                "part2": "aer"
            },
        },
        {
            "result": "alienis",
            "v4": {
                "part1": "vacuos",
                "part2": "tenebrae"
            },
            "v6": {
                "part1": "vacuos",
                "part2": "tenebrae"
            },
        },
        {
            "result": "alkimia",
            "v6": {
                "part1": "praecantatio",
                "part2": "aqua"
            },
        },
        {
            "result": "aqua",
            "v4": {
                "part1": "aqua",
                "part2": "aqua"
            },
            "v6": {
                "part1": "aqua",
                "part2": "aqua"
            },
        },
        {
            "result": "arbor",
            "v4": {
                "part1": "aer",
                "part2": "herba"
            },
        },
        {
            "result": "auram",
            "v4": {
                "part1": "praecantatio",
                "part2": "aer"
            },
            "v6": {
                "part1": "praecantatio",
                "part2": "aer"
            },
        },
        {
            "result": "aversio",
            "v4": {
                "part1": "instrumentum",
                "part2": "ignis"
            },
            "v6": {
                "part1": "spiritus",
                "part2": "perditio"
            },
        },
        {
            "result": "bestia",
            "v4": {
                "part1": "motus",
                "part2": "victus"  
            },
            "v6": {
                "part1": "motus",
                "part2": "victus"  
            },
        },
        {
            "result": "cognitio",
            "v4": {
                "part1": "ignis",
                "part2": "spiritus"
            },
            "v6": {
                "part1": "ignis",
                "part2": "spiritus"
            },
        },
        {
            "result": "corpus",
            "v4": {
                "part1": "bestia",
                "part2": "mortuus"
            },
        },
        {
            "result": "desederium",
            "v4": {
                "part1": "fames",
                "part2": "humanus"
            },
            "v6": {
                "part1": "spiritus",
                "part2": "vacuos"
            },
        },
        {
            "result": "exanimis",
            "v4": {
                "part1": "motus",
                "part2": "mortuus"
            },
            "v6": {
                "part1": "motus",
                "part2": "mortuus"
            },
        },
        {
            "result": "fabrico",
            "v4": {
                "part1": "humanus",
                "part2": "instrumentum" 
            },
            "v6": {
                "part1": "permutatio",
                "part2": "instrumentum" 
            },
        },
        {
            "result": "fames",
            "v4": {
                "part1": "vacuos",
                "part2": "victus"
            },
        },
        {
            "result": "gelum",
            "v4": {
                "part1": "ignis",
                "part2": "perditio"  
            },
            "v6": {
                "part1": "ignis",
                "part2": "perditio"  
            },
        },
        {
            "result": "herba",
            "v4": {
                "part1": "victus",
                "part2": "terra"
            },
            "v6": {
                "part1": "victus",
                "part2": "terra"
            },
        },
        {
            "result": "humanus",
            "v4": {
                "part1": "bestia",
                "part2": "cognitio"
            },
            "v6": {
                "part1": "spiritus",
                "part2": "victus"
            },
        },
        {
            "result": "ignis",
            "v4": {
                "part1": "ignis",
                "part2": "ignis"
            },
            "v6": {
                "part1": "ignis",
                "part2": "ignis"
            },
        },
        {
            "result": "instrumentum",
            "v4": {
                "part1": "humanus",
                "part2": "ordo"
            },
            "v6": {
                "part1": "metallum",
                "part2": "potentia"
            },
        },
        {
            "result": "iter",
            "v4": {
                "part1": "motus",
                "part2": "terra"
            },
        },
        {
            "result": "limus",
            "v4": {
                "part1": "aqua",
                "part2": "victus"
            },
        },
        {
            "result": "lux",
            "v4": {
                "part1": "aer",
                "part2": "ignis"
            },
            "v6": {
                "part1": "aer",
                "part2": "ignis"
            },
        },
        {
            "result": "machina",
            "v4": {
                "part1": "motus",
                "part2": "instrumentum"
            },
            "v6": {
                "part1": "motus",
                "part2": "instrumentum"
            },
        },
        {
            "result": "messis",
            "v4": {
                "part1": "herba",
                "part2": "humanus"
            },
        },
        {
            "result": "metallum",
            "v4": {
                "part1": "terra",
                "part2": "vitreus"
            },
            "v6": {
                "part1": "terra",
                "part2": "ordo"
            },
        },
        {
            "result": "meto",
            "v4": {
                "part1": "instrumentum",
                "part2": "messis"
            },
        },
        {
            "result": "mortuus",
            "v4": {
                "part1": "victus",
                "part2": "perditio"
            },
            "v6": {
                "part1": "victus",
                "part2": "perditio"
            },
        },
        {
            "result": "motus",
            "v4": {
                "part1": "aer",
                "part2": "ordo"
            },
            "v6": {
                "part1": "aer",
                "part2": "ordo"
            },
        },
        {
            "result": "ordo",
            "v4": {
                "part1": "ordo",
                "part2": "ordo"
            },
            "v6": {
                "part1": "ordo",
                "part2": "ordo"
            },
        },
        {
            "result": "pannus",
            "v4": {
                "part1": "bestia",
                "part2": "instrumentum"
            },
        },
        {
            "result": "perditio",
            "v4": {
                "part1": "perditio",
                "part2": "perditio"
            },
            "v6": {
                "part1": "perditio",
                "part2": "perditio"
            },
        },
        {
            "result": "perfodio",
            "v4": {
                "part1": "humanus",
                "part2": "terra"
            },
        },
        {
            "result": "permutatio",
            "v4": {
                "part1": "perditio",
                "part2": "ordo"
            },
            "v6": {
                "part1": "perditio",
                "part2": "ordo" 
            },
        },
        {
            "result": "potentia",
            "v4": {
                "part1": "ordo",
                "part2": "ignis" 
            },
            "v6": {
                "part1": "ordo",
                "part2": "ignis" 
            },
        },
        {
            "result": "praecantatio",
            "v4": {
                "part1": "potentia",
                "part2": "vacuos"
            },
            "v6": {
                "part1": "potentia",
                "part2": "aer"
            },
        },
        {
            "result": "praemunio",
            "v4": {
                "part1": "instrumentum",
                "part2": "terra"
            },
            "v6": {
                "part1": "spiritus",
                "part2": "terra"
            },
        },
        {
            "result": "sano",
            "v4": {
                "part1": "ordo",
                "part2": "victus"
            },
        },
        {
            "result": "sensus",
            "v4": {
                "part1": "aer",
                "part2": "spiritus"
            },
            "v6": {
                "part1": "aer",
                "part2": "spiritus"
            },
        },
        {
            "result": "spiritus",
            "v4": {
                "part1": "victus",
                "part2": "mortuus" 
            },
            "v6": {
                "part1": "victus",
                "part2": "mortuus" 
            },
        },
        {
            "result": "tenebrae",
            "v4": {
                "part1": "vacuos",
                "part2": "lux"
            },
            "v6": {
                "part1": "vacuos",
                "part2": "lux"
            },
        },
        {
            "result": "tempestas",
            "v4": {
                "part1": "aer",
                "part2": "aqua"
            },
        },
        {
            "result": "terra",
            "v4": {
                "part1": "terra",
                "part2": "terra"  
            },
            "v6": {
                "part1": "terra",
                "part2": "terra"  
            },
        },
        {
            "result": "vacuos",
            "v4": {
                "part1": "aer",
                "part2": "perditio"
            },
            "v6": {
                "part1": "aer",
                "part2": "perditio"
            },
        },
        {
            "result": "venenum",
            "v4": {
                "part1": "aqua",
                "part2": "perditio"
            },
        },
        {
            "result": "victus",
            "v4": {
                "part1": "terra",
                "part2": "aqua"
            },
            "v6": {
                "part1": "terra",
                "part2": "aqua"
            },
        },
        {
            "result": "vinculum",
            "v4": {
                "part1": "motus",
                "part2": "perditio"
            },
            "v6": {
                "part1": "motus",
                "part2": "perditio"
            },
        },
        {
            "result": "vitium",
            "v4": {
                "part1": "perditio",
                "part2": "praecantatio"
            },
            "v6": {
                "part1": "perditio",
                "part2": "praecantatio"
            },
        },
        {
            "result": "vitreus",
            "v4": {
                "part1": "terra",
                "part2": "ordo"
            },
            "v6": {
                "part1": "terra",
                "part2": "aer"
            },
        },
        {
            "result": "volatus",
            "v4": {
                "part1": "aer",
                "part2": "motus"
            },
            "v6": {
                "part1": "aer",
                "part2": "motus"
            },
        }
    ])
    const backRecipe = computed(() => recipes.value.find(r => r.result === 'back'))

    return {
        recipes,
        backRecipe,
    }
})