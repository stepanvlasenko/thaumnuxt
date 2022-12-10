import { defineStore } from "pinia";


export const useEssentiasStore = defineStore('essentias', () => {
    const essentias = ref([
        {
            "name": "back",
            "version": ["v4", "v6"],
            "src": "/images/essentia/back.png"
        },
        {
            "name": "aer",
            "version": ["v4", "v6"],
            "src": "/images/essentia/aer.svg"
        },
        {
            "name": "alienis",
            "version": ["v4", "v6"],
            "src": "/images/essentia/alienis.svg"
        },
        {
            "name": "alkimia",
            "version": ["v6"],
            "src": "/images/essentia/alkimia.svg"
        },
        {
            "name": "aqua",
            "version": ["v4", "v6"],
            "src": "/images/essentia/aqua.svg"
        },
        {
            "name": "arbor",
            "version": ["v4"],
            "src": "/images/essentia/arbor.svg"
        },
        {
            "name": "auram",
            "version": ["v4", "v6"],
            "src": "/images/essentia/auram.svg"
        },
        {
            "name": "aversio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/aversio.svg"
        },
        {
            "name": "bestia",
            "version": ["v4", "v6"],
            "src": "/images/essentia/bestia.svg"
        },
        {
            "name": "cognitio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/cognitio.svg"
        },
        {
            "name": "corpus",
            "version": ["v4"],
            "src": "/images/essentia/corpus.svg"
        },
        {
            "name": "desederium",
            "version": ["v4", "v6"],
            "src": "/images/essentia/desiderium.svg"
        },
        {
            "name": "exanimis",
            "version": ["v4", "v6"],
            "src": "/images/essentia/exanimis.svg"
        },
        {
            "name": "fabrico",
            "version": ["v4", "v6"],
            "src": "/images/essentia/fabrico.svg"
        },
        {
            "name": "fames",
            "version": ["v4"],
            "src": "/images/essentia/fames.svg"
        },
        {
            "name": "gelum",
            "version": ["v4", "v6"],
            "src": "/images/essentia/gelum.svg"
        },
        {
            "name": "herba",
            "version": ["v4", "v6"],
            "src": "/images/essentia/herba.svg"
        },
        {
            "name": "humanus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/humanus.svg"
        },
        {
            "name": "ignis",
            "version": ["v4", "v6"],
            "src": "/images/essentia/ignis.svg"
        },
        {
            "name": "instrumentum",
            "version": ["v4", "v6"],
            "src": "/images/essentia/instrumentum.svg"
        },
        {
            "name": "iter",
            "version": ["v4"],
            "src": "/images/essentia/iter.svg"
        },
        {
            "name": "limus",
            "version": ["v4"],
            "src": "/images/essentia/limus.svg"
        },
        {
            "name": "lux",
            "version": ["v4", "v6"],
            "src": "/images/essentia/lux.svg"
        },
        {
            "name": "machina",
            "version": ["v4", "v6"],
            "src": "/images/essentia/machina.svg"
        },
        {
            "name": "messis",
            "version": ["v4"],
            "src": "/images/essentia/messis.svg"
        },
        {
            "name": "metallum",
            "version": ["v4", "v6"],
            "src": "/images/essentia/metallum.svg"
        },
        {
            "name": "meto",
            "version": ["v4"],
            "src": "/images/essentia/meto.svg"
        },
        {
            "name": "mortuus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/mortuus.svg"
        },
        {
            "name": "motus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/motus.svg"
        },
        {
            "name": "ordo",
            "version": ["v4", "v6"],
            "src": "/images/essentia/ordo.svg"
        },
        {
            "name": "pannus",
            "version": ["v4"],
            "src": "/images/essentia/pannus.svg"
        },
        {
            "name": "perditio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/perditio.svg"
        },
        {
            "name": "perfodio",
            "version": ["v4"],
            "src": "/images/essentia/perfodio.svg"
        },
        {
            "name": "permutatio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/permutatio.svg"
        },
        {
            "name": "potentia",
            "version": ["v4", "v6"],
            "src": "/images/essentia/potentia.svg"
        },
        {
            "name": "praecantatio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/praecantatio.svg "
        },
        {
            "name": "praemunio",
            "version": ["v4", "v6"],
            "src": "/images/essentia/praemunio.svg"
        },
        {
            "name": "sano",
            "version": ["v4"],
            "src": "/images/essentia/sano.svg"
        },
        {
            "name": "sensus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/sensus.svg"
        },
        {
            "name": "spiritus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/spiritus.svg"
        },
        {
            "name": "tenebrae",
            "version": ["v4", "v6"],
            "src": "/images/essentia/tenebrae.svg"
        },
        {
            "name": "tempestas",
            "version": ["v4"],
            "src": "/images/essentia/tempestas.svg"
        },
        {
            "name": "terra",
            "version": ["v4", "v6"],
            "src": "/images/essentia/terra.svg"
        },
        {
            "name": "vacuos",
            "version": ["v4", "v6"],
            "src": "/images/essentia/vacuos.svg"
        },
        {
            "name": "venenum",
            "version": ["v4"],
            "src": "/images/essentia/venenum.svg"
        },
        {
            "name": "victus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/victus.svg"
        },
        {
            "name": "vinculum",
            "version": ["v4", "v6"],
            "src": "/images/essentia/vinculum.svg"
        },
        {
            "name": "vitium",
            "version": ["v4", "v6"],
            "src": "/images/essentia/vitium.svg"
        },
        {
            "name": "vitreus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/vitreus.svg"
        },
        {
            "name": "volatus",
            "version": ["v4", "v6"],
            "src": "/images/essentia/volatus.svg"
        }
    ])

    const backEssentia = computed(() => essentias.value.find(e => e.name === 'back'))

    return {
        essentias,
        backEssentia,
    }
})
