import { Instance } from "mobx-state-tree"
import { RemoveFromFilmPlanetsPayloadModelBase } from "./RemoveFromFilmPlanetsPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromFilmPlanetsPayloadModel */
export interface RemoveFromFilmPlanetsPayloadModelType extends Instance<typeof RemoveFromFilmPlanetsPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromFilmPlanetsPayloadModel */
export { selectFromRemoveFromFilmPlanetsPayload, removeFromFilmPlanetsPayloadModelPrimitives, RemoveFromFilmPlanetsPayloadModelSelector } from "./RemoveFromFilmPlanetsPayloadModel.base"

/**
 * RemoveFromFilmPlanetsPayloadModel
 */
export const RemoveFromFilmPlanetsPayloadModel = RemoveFromFilmPlanetsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
