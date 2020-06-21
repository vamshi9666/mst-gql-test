import { Instance } from "mobx-state-tree"
import { RemoveFromFilmStarshipsPayloadModelBase } from "./RemoveFromFilmStarshipsPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromFilmStarshipsPayloadModel */
export interface RemoveFromFilmStarshipsPayloadModelType extends Instance<typeof RemoveFromFilmStarshipsPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromFilmStarshipsPayloadModel */
export { selectFromRemoveFromFilmStarshipsPayload, removeFromFilmStarshipsPayloadModelPrimitives, RemoveFromFilmStarshipsPayloadModelSelector } from "./RemoveFromFilmStarshipsPayloadModel.base"

/**
 * RemoveFromFilmStarshipsPayloadModel
 */
export const RemoveFromFilmStarshipsPayloadModel = RemoveFromFilmStarshipsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
