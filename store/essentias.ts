import { defineStore } from "pinia"
import { EssenceName, IEssence } from '@types'

export const useEssentiasStore = defineStore('essentias', () => {
    /**
     * Array of essences with their versions
     */
    const essences = computed<ReadonlyArray<IEssence>>(() => [
        {
            name: "back",
            version: ["v4", "v6"],
            image: "/images/essentia/back.png"
        },
        {
            name: "aer",
            version: ["v4", "v6"],
            image: "/images/essentia/aer.svg"
        },
        {
            name: "alienis",
            version: ["v4", "v6"],
            image: "/images/essentia/alienis.svg"
        },
        {
            name: "alkimia",
            version: ["v6"],
            image: "/images/essentia/alkimia.svg"
        },
        {
            name: "aqua",
            version: ["v4", "v6"],
            image: "/images/essentia/aqua.svg"
        },
        {
            name: "arbor",
            version: ["v4"],
            image: "/images/essentia/arbor.svg"
        },
        {
            name: "auram",
            version: ["v4", "v6"],
            image: "/images/essentia/auram.svg"
        },
        {
            name: "aversio",
            version: ["v4", "v6"],
            image: "/images/essentia/aversio.svg"
        },
        {
            name: "bestia",
            version: ["v4", "v6"],
            image: "/images/essentia/bestia.svg"
        },
        {
            name: "cognitio",
            version: ["v4", "v6"],
            image: "/images/essentia/cognitio.svg"
        },
        {
            name: "corpus",
            version: ["v4"],
            image: "/images/essentia/corpus.svg"
        },
        {
            name: "desederium",
            version: ["v4", "v6"],
            image: "/images/essentia/desiderium.svg"
        },
        {
            name: "exanimis",
            version: ["v4", "v6"],
            image: "/images/essentia/exanimis.svg"
        },
        {
            name: "fabrico",
            version: ["v4", "v6"],
            image: "/images/essentia/fabrico.svg"
        },
        {
            name: "fames",
            version: ["v4"],
            image: "/images/essentia/fames.svg"
        },
        {
            name: "gelum",
            version: ["v4", "v6"],
            image: "/images/essentia/gelum.svg"
        },
        {
            name: "herba",
            version: ["v4", "v6"],
            image: "/images/essentia/herba.svg"
        },
        {
            name: "humanus",
            version: ["v4", "v6"],
            image: "/images/essentia/humanus.svg"
        },
        {
            name: "ignis",
            version: ["v4", "v6"],
            image: "/images/essentia/ignis.svg"
        },
        {
            name: "instrumentum",
            version: ["v4", "v6"],
            image: "/images/essentia/instrumentum.svg"
        },
        {
            name: "iter",
            version: ["v4"],
            image: "/images/essentia/iter.svg"
        },
        {
            name: "limus",
            version: ["v4"],
            image: "/images/essentia/limus.svg"
        },
        {
            name: "lux",
            version: ["v4", "v6"],
            image: "/images/essentia/lux.svg"
        },
        {
            name: "machina",
            version: ["v4", "v6"],
            image: "/images/essentia/machina.svg"
        },
        {
            name: "messis",
            version: ["v4"],
            image: "/images/essentia/messis.svg"
        },
        {
            name: "metallum",
            version: ["v4", "v6"],
            image: "/images/essentia/metallum.svg"
        },
        {
            name: "meto",
            version: ["v4"],
            image: "/images/essentia/meto.svg"
        },
        {
            name: "mortuus",
            version: ["v4", "v6"],
            image: "/images/essentia/mortuus.svg"
        },
        {
            name: "motus",
            version: ["v4", "v6"],
            image: "/images/essentia/motus.svg"
        },
        {
            name: "ordo",
            version: ["v4", "v6"],
            image: "/images/essentia/ordo.svg"
        },
        {
            name: "pannus",
            version: ["v4"],
            image: "/images/essentia/pannus.svg"
        },
        {
            name: "perditio",
            version: ["v4", "v6"],
            image: "/images/essentia/perditio.svg"
        },
        {
            name: "perfodio",
            version: ["v4"],
            image: "/images/essentia/perfodio.svg"
        },
        {
            name: "permutatio",
            version: ["v4", "v6"],
            image: "/images/essentia/permutatio.svg"
        },
        {
            name: "potentia",
            version: ["v4", "v6"],
            image: "/images/essentia/potentia.svg"
        },
        {
            name: "praecantatio",
            version: ["v4", "v6"],
            image: "/images/essentia/praecantatio.svg "
        },
        {
            name: "praemunio",
            version: ["v4", "v6"],
            image: "/images/essentia/praemunio.svg"
        },
        {
            name: "sano",
            version: ["v4"],
            image: "/images/essentia/sano.svg"
        },
        {
            name: "sensus",
            version: ["v4", "v6"],
            image: "/images/essentia/sensus.svg"
        },
        {
            name: "spiritus",
            version: ["v4", "v6"],
            image: "/images/essentia/spiritus.svg"
        },
        {
            name: "tenebrae",
            version: ["v4", "v6"],
            image: "/images/essentia/tenebrae.svg"
        },
        {
            name: "tempestas",
            version: ["v4"],
            image: "/images/essentia/tempestas.svg"
        },
        {
            name: "terra",
            version: ["v4", "v6"],
            image: "/images/essentia/terra.svg"
        },
        {
            name: "vacuos",
            version: ["v4", "v6"],
            image: "/images/essentia/vacuos.svg"
        },
        {
            name: "venenum",
            version: ["v4"],
            image: "/images/essentia/venenum.svg"
        },
        {
            name: "victus",
            version: ["v4", "v6"],
            image: "/images/essentia/victus.svg"
        },
        {
            name: "vinculum",
            version: ["v4", "v6"],
            image: "/images/essentia/vinculum.svg"
        },
        {
            name: "vitium",
            version: ["v4", "v6"],
            image: "/images/essentia/vitium.svg"
        },
        {
            name: "vitreus",
            version: ["v4", "v6"],
            image: "/images/essentia/vitreus.svg"
        },
        {
            name: "volatus",
            version: ["v4", "v6"],
            image: "/images/essentia/volatus.svg"
        }
    ] as const)

    /**
     * Map for get essence by name
     */
    const essencesMap = computed<Map<EssenceName, IEssence>>(() => {
        return new Map(essences.value.map(e => [e.name, e]))
    })

    /**
     * Back/empty essence
     */
    const backEssentia = computed(() => essencesMap.value.get('back'))

    return {
        backEssentia,
        essences,
        essencesMap,
    }
})
