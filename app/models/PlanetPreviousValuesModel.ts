import { Instance } from "mobx-state-tree"
import { PlanetPreviousValuesModelBase } from "./PlanetPreviousValuesModel.base"

/* The TypeScript type of an instance of PlanetPreviousValuesModel */
export interface PlanetPreviousValuesModelType extends Instance<typeof PlanetPreviousValuesModel.Type> {}

/* A graphql query fragment builders for PlanetPreviousValuesModel */
export { selectFromPlanetPreviousValues, planetPreviousValuesModelPrimitives, PlanetPreviousValuesModelSelector } from "./PlanetPreviousValuesModel.base"

/**
 * PlanetPreviousValuesModel
 */
export const PlanetPreviousValuesModel = PlanetPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
