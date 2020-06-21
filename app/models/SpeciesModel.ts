import { Instance } from "mobx-state-tree"
import { SpeciesModelBase } from "./SpeciesModel.base"

/* The TypeScript type of an instance of SpeciesModel */
export interface SpeciesModelType extends Instance<typeof SpeciesModel.Type> {}

/* A graphql query fragment builders for SpeciesModel */
export { selectFromSpecies, speciesModelPrimitives, SpeciesModelSelector } from "./SpeciesModel.base"

/**
 * SpeciesModel
 */
export const SpeciesModel = SpeciesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
