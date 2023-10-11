import { defineStore } from "pinia"
import { EssenceName, EssenceRecipe } from '@types'

export const useRecipesStore = defineStore('recipes', () => {
    /**
     * Recipes array
     */
    const recipes = computed<EssenceRecipe[]>(() => [
        {
            result: "back",
            v4: {
                firstEssence: "back",
                secondEssence: "back"
            },
            v6: {
                firstEssence: "back",
                secondEssence: "back"
            },
        },
        {
            result: "aer",
            v4: {
                firstEssence: "aer",
                secondEssence: "aer"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "aer"
            },
        },
        {
            result: "alienis",
            v4: {
                firstEssence: "vacuos",
                secondEssence: "tenebrae"
            },
            v6: {
                firstEssence: "vacuos",
                secondEssence: "tenebrae"
            },
        },
        {
            result: "alkimia",
            v6: {
                firstEssence: "praecantatio",
                secondEssence: "aqua"
            },
        },
        {
            result: "aqua",
            v4: {
                firstEssence: "aqua",
                secondEssence: "aqua"
            },
            v6: {
                firstEssence: "aqua",
                secondEssence: "aqua"
            },
        },
        {
            result: "arbor",
            v4: {
                firstEssence: "aer",
                secondEssence: "herba"
            },
        },
        {
            result: "auram",
            v4: {
                firstEssence: "praecantatio",
                secondEssence: "aer"
            },
            v6: {
                firstEssence: "praecantatio",
                secondEssence: "aer"
            },
        },
        {
            result: "aversio",
            v4: {
                firstEssence: "instrumentum",
                secondEssence: "ignis"
            },
            v6: {
                firstEssence: "spiritus",
                secondEssence: "perditio"
            },
        },
        {
            result: "bestia",
            v4: {
                firstEssence: "motus",
                secondEssence: "victus"
            },
            v6: {
                firstEssence: "motus",
                secondEssence: "victus"
            },
        },
        {
            result: "cognitio",
            v4: {
                firstEssence: "ignis",
                secondEssence: "spiritus"
            },
            v6: {
                firstEssence: "ignis",
                secondEssence: "spiritus"
            },
        },
        {
            result: "corpus",
            v4: {
                firstEssence: "bestia",
                secondEssence: "mortuus"
            },
        },
        {
            result: "desederium",
            v4: {
                firstEssence: "fames",
                secondEssence: "humanus"
            },
            v6: {
                firstEssence: "spiritus",
                secondEssence: "vacuos"
            },
        },
        {
            result: "exanimis",
            v4: {
                firstEssence: "motus",
                secondEssence: "mortuus"
            },
            v6: {
                firstEssence: "motus",
                secondEssence: "mortuus"
            },
        },
        {
            result: "fabrico",
            v4: {
                firstEssence: "humanus",
                secondEssence: "instrumentum"
            },
            v6: {
                firstEssence: "permutatio",
                secondEssence: "instrumentum"
            },
        },
        {
            result: "fames",
            v4: {
                firstEssence: "vacuos",
                secondEssence: "victus"
            },
        },
        {
            result: "gelum",
            v4: {
                firstEssence: "ignis",
                secondEssence: "perditio"
            },
            v6: {
                firstEssence: "ignis",
                secondEssence: "perditio"
            },
        },
        {
            result: "herba",
            v4: {
                firstEssence: "victus",
                secondEssence: "terra"
            },
            v6: {
                firstEssence: "victus",
                secondEssence: "terra"
            },
        },
        {
            result: "humanus",
            v4: {
                firstEssence: "bestia",
                secondEssence: "cognitio"
            },
            v6: {
                firstEssence: "spiritus",
                secondEssence: "victus"
            },
        },
        {
            result: "ignis",
            v4: {
                firstEssence: "ignis",
                secondEssence: "ignis"
            },
            v6: {
                firstEssence: "ignis",
                secondEssence: "ignis"
            },
        },
        {
            result: "instrumentum",
            v4: {
                firstEssence: "humanus",
                secondEssence: "ordo"
            },
            v6: {
                firstEssence: "metallum",
                secondEssence: "potentia"
            },
        },
        {
            result: "iter",
            v4: {
                firstEssence: "motus",
                secondEssence: "terra"
            },
        },
        {
            result: "limus",
            v4: {
                firstEssence: "aqua",
                secondEssence: "victus"
            },
        },
        {
            result: "lux",
            v4: {
                firstEssence: "aer",
                secondEssence: "ignis"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "ignis"
            },
        },
        {
            result: "machina",
            v4: {
                firstEssence: "motus",
                secondEssence: "instrumentum"
            },
            v6: {
                firstEssence: "motus",
                secondEssence: "instrumentum"
            },
        },
        {
            result: "messis",
            v4: {
                firstEssence: "herba",
                secondEssence: "humanus"
            },
        },
        {
            result: "metallum",
            v4: {
                firstEssence: "terra",
                secondEssence: "vitreus"
            },
            v6: {
                firstEssence: "terra",
                secondEssence: "ordo"
            },
        },
        {
            result: "meto",
            v4: {
                firstEssence: "instrumentum",
                secondEssence: "messis"
            },
        },
        {
            result: "mortuus",
            v4: {
                firstEssence: "victus",
                secondEssence: "perditio"
            },
            v6: {
                firstEssence: "victus",
                secondEssence: "perditio"
            },
        },
        {
            result: "motus",
            v4: {
                firstEssence: "aer",
                secondEssence: "ordo"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "ordo"
            },
        },
        {
            result: "ordo",
            v4: {
                firstEssence: "ordo",
                secondEssence: "ordo"
            },
            v6: {
                firstEssence: "ordo",
                secondEssence: "ordo"
            },
        },
        {
            result: "pannus",
            v4: {
                firstEssence: "bestia",
                secondEssence: "instrumentum"
            },
        },
        {
            result: "perditio",
            v4: {
                firstEssence: "perditio",
                secondEssence: "perditio"
            },
            v6: {
                firstEssence: "perditio",
                secondEssence: "perditio"
            },
        },
        {
            result: "perfodio",
            v4: {
                firstEssence: "humanus",
                secondEssence: "terra"
            },
        },
        {
            result: "permutatio",
            v4: {
                firstEssence: "perditio",
                secondEssence: "ordo"
            },
            v6: {
                firstEssence: "perditio",
                secondEssence: "ordo"
            },
        },
        {
            result: "potentia",
            v4: {
                firstEssence: "ordo",
                secondEssence: "ignis"
            },
            v6: {
                firstEssence: "ordo",
                secondEssence: "ignis"
            },
        },
        {
            result: "praecantatio",
            v4: {
                firstEssence: "potentia",
                secondEssence: "vacuos"
            },
            v6: {
                firstEssence: "potentia",
                secondEssence: "aer"
            },
        },
        {
            result: "praemunio",
            v4: {
                firstEssence: "instrumentum",
                secondEssence: "terra"
            },
            v6: {
                firstEssence: "spiritus",
                secondEssence: "terra"
            },
        },
        {
            result: "sano",
            v4: {
                firstEssence: "ordo",
                secondEssence: "victus"
            },
        },
        {
            result: "sensus",
            v4: {
                firstEssence: "aer",
                secondEssence: "spiritus"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "spiritus"
            },
        },
        {
            result: "spiritus",
            v4: {
                firstEssence: "victus",
                secondEssence: "mortuus"
            },
            v6: {
                firstEssence: "victus",
                secondEssence: "mortuus"
            },
        },
        {
            result: "tenebrae",
            v4: {
                firstEssence: "vacuos",
                secondEssence: "lux"
            },
            v6: {
                firstEssence: "vacuos",
                secondEssence: "lux"
            },
        },
        {
            result: "tempestas",
            v4: {
                firstEssence: "aer",
                secondEssence: "aqua"
            },
        },
        {
            result: "terra",
            v4: {
                firstEssence: "terra",
                secondEssence: "terra"
            },
            v6: {
                firstEssence: "terra",
                secondEssence: "terra"
            },
        },
        {
            result: "vacuos",
            v4: {
                firstEssence: "aer",
                secondEssence: "perditio"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "perditio"
            },
        },
        {
            result: "venenum",
            v4: {
                firstEssence: "aqua",
                secondEssence: "perditio"
            },
        },
        {
            result: "victus",
            v4: {
                firstEssence: "terra",
                secondEssence: "aqua"
            },
            v6: {
                firstEssence: "terra",
                secondEssence: "aqua"
            },
        },
        {
            result: "vinculum",
            v4: {
                firstEssence: "motus",
                secondEssence: "perditio"
            },
            v6: {
                firstEssence: "motus",
                secondEssence: "perditio"
            },
        },
        {
            result: "vitium",
            v4: {
                firstEssence: "perditio",
                secondEssence: "praecantatio"
            },
            v6: {
                firstEssence: "perditio",
                secondEssence: "praecantatio"
            },
        },
        {
            result: "vitreus",
            v4: {
                firstEssence: "terra",
                secondEssence: "ordo"
            },
            v6: {
                firstEssence: "terra",
                secondEssence: "aer"
            },
        },
        {
            result: "volatus",
            v4: {
                firstEssence: "aer",
                secondEssence: "motus"
            },
            v6: {
                firstEssence: "aer",
                secondEssence: "motus"
            },
        }
    ])

    const recipesMap = computed<Map<EssenceName, EssenceRecipe>>(() => {
        return new Map(recipes.value.map(r => [r.result, r]))
    })

    /**
     * Recipe for back essence
     */
    const backRecipe = computed(() => recipesMap.value.get('back'))

    return {
        recipes,
        recipesMap,
        backRecipe,
    }
})
