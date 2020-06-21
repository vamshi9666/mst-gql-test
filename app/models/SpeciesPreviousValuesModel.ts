import { Instance } from "mobx-state-tree"
import { SpeciesPreviousValuesModelBase } from "./SpeciesPreviousValuesModel.base"

/* The TypeScript type of an instance of SpeciesPreviousValuesModel */
export interface SpeciesPreviousValuesModelType extends Instance<typeof SpeciesPreviousValuesModel.Type> {}

/* A graphql query fragment builders for SpeciesPreviousValuesModel */
export { selectFromSpeciesPreviousValues, speciesPreviousValuesModelPrimitives, SpeciesPreviousValuesModelSelector } from "./SpeciesPreviousValuesModel.base"

/**
 * SpeciesPreviousValuesModel
 */
export const SpeciesPreviousValuesModel = SpeciesPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
