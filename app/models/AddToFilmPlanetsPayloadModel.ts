import { Instance } from "mobx-state-tree"
import { AddToFilmPlanetsPayloadModelBase } from "./AddToFilmPlanetsPayloadModel.base"

/* The TypeScript type of an instance of AddToFilmPlanetsPayloadModel */
export interface AddToFilmPlanetsPayloadModelType extends Instance<typeof AddToFilmPlanetsPayloadModel.Type> {}

/* A graphql query fragment builders for AddToFilmPlanetsPayloadModel */
export { selectFromAddToFilmPlanetsPayload, addToFilmPlanetsPayloadModelPrimitives, AddToFilmPlanetsPayloadModelSelector } from "./AddToFilmPlanetsPayloadModel.base"

/**
 * AddToFilmPlanetsPayloadModel
 */
export const AddToFilmPlanetsPayloadModel = AddToFilmPlanetsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
