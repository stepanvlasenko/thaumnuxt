export type EssenceName =
    'back' |
    'aer' |
    'alienis' |
    'alkimia' |
    'aqua' |
    'arbor' |
    'auram' |
    'aversio' |
    'bestia' |
    'cognitio' |
    'corpus' |
    'desederium' |
    'exanimis' |
    'fabrico' |
    'fames' |
    'gelum' |
    'herba' |
    'humanus' |
    'ignis' |
    'instrumentum' |
    'iter' |
    'limus' |
    'lux' |
    'machina' |
    'messis' |
    'metallum' |
    'meto' |
    'mortuus' |
    'motus' |
    'ordo' |
    'pannus' |
    'perditio' |
    'perfodio' |
    'permutatio' |
    'potentia' |
    'praecantatio' |
    'praemunio' |
    'sano' |
    'sensus' |
    'spiritus' |
    'tenebrae' |
    'tempestas' |
    'terra' |
    'vacuos' |
    'venenum' |
    'victus' |
    'vinculum' |
    'vitium' |
    'vitreus' |
    'volatus'

/**
 * Version of thaumcraft
 */
export type ThaumcraftVersion = 'v4' | 'v6'

/**
 * Essence type
 */
export interface IEssence {
    readonly name: EssenceName;
    readonly image: string;
    readonly version: ReadonlyArray<ThaumcraftVersion>;
}

/**
 * Essence recipe for cocrete thaumcraft version
 */
interface IThaumcraftVersionRecipe {
    readonly firstEssence: EssenceName;
    readonly secondEssence: EssenceName;
}

/**
 * Recipe type
 */
export type EssenceRecipe = {
    readonly [key in Partial<ThaumcraftVersion>]?: IThaumcraftVersionRecipe;
} & {
    readonly result: EssenceName;
}
