import { Instance } from "mobx-state-tree"
import { StarshipPreviousValuesModelBase } from "./StarshipPreviousValuesModel.base"

/* The TypeScript type of an instance of StarshipPreviousValuesModel */
export interface StarshipPreviousValuesModelType extends Instance<typeof StarshipPreviousValuesModel.Type> {}

/* A graphql query fragment builders for StarshipPreviousValuesModel */
export { selectFromStarshipPreviousValues, starshipPreviousValuesModelPrimitives, StarshipPreviousValuesModelSelector } from "./StarshipPreviousValuesModel.base"

/**
 * StarshipPreviousValuesModel
 */
export const StarshipPreviousValuesModel = StarshipPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
