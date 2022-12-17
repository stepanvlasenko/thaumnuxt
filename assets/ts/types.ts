/**
 * Version of thaumcraft
 */
export type ThaumcraftVersion = 'v4' | 'v6'

/**
 * Essence type
 */
export interface IEssence {
    readonly name: string;
    readonly image: string;
    readonly version: ReadonlyArray<ThaumcraftVersion>;
}

/**
 * Essence recipe for cocrete thaumcraft version
 */
interface IThaumcraftVersionRecipe {
    readonly firstEssence: string;
    readonly secondEssence: string;
}

/**
 * Recipe type
 */
export type EssenceRecipe = {
    readonly [key in Partial<ThaumcraftVersion>]?: IThaumcraftVersionRecipe;
} & {
    readonly result: string;
}
