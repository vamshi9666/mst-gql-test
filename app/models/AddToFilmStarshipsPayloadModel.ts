import { Instance } from "mobx-state-tree"
import { AddToFilmStarshipsPayloadModelBase } from "./AddToFilmStarshipsPayloadModel.base"

/* The TypeScript type of an instance of AddToFilmStarshipsPayloadModel */
export interface AddToFilmStarshipsPayloadModelType extends Instance<typeof AddToFilmStarshipsPayloadModel.Type> {}

/* A graphql query fragment builders for AddToFilmStarshipsPayloadModel */
export { selectFromAddToFilmStarshipsPayload, addToFilmStarshipsPayloadModelPrimitives, AddToFilmStarshipsPayloadModelSelector } from "./AddToFilmStarshipsPayloadModel.base"

/**
 * AddToFilmStarshipsPayloadModel
 */
export const AddToFilmStarshipsPayloadModel = AddToFilmStarshipsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
