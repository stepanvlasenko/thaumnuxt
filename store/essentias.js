import { defineStore } from "pinia";


export const useEssentiasStore = defineStore('essentias', () => {
    const essentias = ref([
        {
            "name": "back",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/back.png"
        },
        {
            "name": "aer",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/aer.svg"
        },
        {
            "name": "alienis",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/alienis.svg"
        },
        {
            "name": "alkimia",
            "version": ["tc6"],
            "src": "/images/essentia/alkimia.svg"
        },
        {
            "name": "aqua",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/aqua.svg"
        },
        {
            "name": "arbor",
            "version": ["tc4"],
            "src": "/images/essentia/arbor.svg"
        },
        {
            "name": "auram",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/auram.svg"
        },
        {
            "name": "aversio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/aversio.svg"
        },
        {
            "name": "bestia",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/bestia.svg"
        },
        {
            "name": "cognitio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/cognitio.svg"
        },
        {
            "name": "corpus",
            "version": ["tc4"],
            "src": "/images/essentia/corpus.svg"
        },
        {
            "name": "desederium",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/desiderium.svg"
        },
        {
            "name": "exanimis",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/exanimis.svg"
        },
        {
            "name": "fabrico",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/fabrico.svg"
        },
        {
            "name": "fames",
            "version": ["tc4"],
            "src": "/images/essentia/fames.svg"
        },
        {
            "name": "gelum",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/gelum.svg"
        },
        {
            "name": "herba",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/herba.svg"
        },
        {
            "name": "humanus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/humanus.svg"
        },
        {
            "name": "ignis",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/ignis.svg"
        },
        {
            "name": "instrumentum",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/instrumentum.svg"
        },
        {
            "name": "iter",
            "version": ["tc4"],
            "src": "/images/essentia/iter.svg"
        },
        {
            "name": "limus",
            "version": ["tc4"],
            "src": "/images/essentia/limus.svg"
        },
        {
            "name": "lux",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/lux.svg"
        },
        {
            "name": "machina",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/machina.svg"
        },
        {
            "name": "messis",
            "version": ["tc4"],
            "src": "/images/essentia/messis.svg"
        },
        {
            "name": "metallum",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/metallum.svg"
        },
        {
            "name": "meto",
            "version": ["tc4"],
            "src": "/images/essentia/meto.svg"
        },
        {
            "name": "mortuus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/mortuus.svg"
        },
        {
            "name": "motus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/motus.svg"
        },
        {
            "name": "ordo",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/ordo.svg"
        },
        {
            "name": "pannus",
            "version": ["tc4"],
            "src": "/images/essentia/pannus.svg"
        },
        {
            "name": "perditio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/perditio.svg"
        },
        {
            "name": "perfodio",
            "version": ["tc4"],
            "src": "/images/essentia/perfodio.svg"
        },
        {
            "name": "permutatio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/permutatio.svg"
        },
        {
            "name": "potentia",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/potentia.svg"
        },
        {
            "name": "praecantatio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/praecantatio.svg "
        },
        {
            "name": "praemunio",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/praemunio.svg"
        },
        {
            "name": "sano",
            "version": ["tc4"],
            "src": "/images/essentia/sano.svg"
        },
        {
            "name": "sensus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/sensus.svg"
        },
        {
            "name": "spiritus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/spiritus.svg"
        },
        {
            "name": "tenebrae",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/tenebrae.svg"
        },
        {
            "name": "tempestas",
            "version": ["tc4"],
            "src": "/images/essentia/tempestas.svg"
        },
        {
            "name": "terra",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/terra.svg"
        },
        {
            "name": "vacuos",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/vacuos.svg"
        },
        {
            "name": "venenum",
            "version": ["tc4"],
            "src": "/images/essentia/venenum.svg"
        },
        {
            "name": "victus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/victus.svg"
        },
        {
            "name": "vinculum",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/vinculum.svg"
        },
        {
            "name": "vitium",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/vitium.svg"
        },
        {
            "name": "vitreus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/vitreus.svg"
        },
        {
            "name": "volatus",
            "version": ["tc4", "tc6"],
            "src": "/images/essentia/volatus.svg"
        }
    ])

    return {
        essentias
    }
})
