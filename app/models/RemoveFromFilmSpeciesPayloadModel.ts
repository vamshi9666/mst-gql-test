import { Instance } from "mobx-state-tree"
import { RemoveFromFilmSpeciesPayloadModelBase } from "./RemoveFromFilmSpeciesPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromFilmSpeciesPayloadModel */
export interface RemoveFromFilmSpeciesPayloadModelType extends Instance<typeof RemoveFromFilmSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromFilmSpeciesPayloadModel */
export { selectFromRemoveFromFilmSpeciesPayload, removeFromFilmSpeciesPayloadModelPrimitives, RemoveFromFilmSpeciesPayloadModelSelector } from "./RemoveFromFilmSpeciesPayloadModel.base"

/**
 * RemoveFromFilmSpeciesPayloadModel
 */
export const RemoveFromFilmSpeciesPayloadModel = RemoveFromFilmSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
