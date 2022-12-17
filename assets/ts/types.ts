/**
 * Version of thaumcraft
 */
export type ThaumcraftVersion = 'v4' | 'v6'

/**
 * Essence type
 */
export interface IEssence {
    name: string;
    version: ThaumcraftVersion[];
    image: string;
}

/**
 * Essence recipe for cocrete thaumcraft version
 */
interface IThaumcraftVersionRecipe {
    firstEssence: string;
    secondEssence: string;
}

/**
 * Recipe type
 */
export type EssenceRecipe = {
    [key in Partial<ThaumcraftVersion>]?: IThaumcraftVersionRecipe;
}
