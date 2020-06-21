import { Instance } from "mobx-state-tree"
import { AddToFilmSpeciesPayloadModelBase } from "./AddToFilmSpeciesPayloadModel.base"

/* The TypeScript type of an instance of AddToFilmSpeciesPayloadModel */
export interface AddToFilmSpeciesPayloadModelType extends Instance<typeof AddToFilmSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for AddToFilmSpeciesPayloadModel */
export { selectFromAddToFilmSpeciesPayload, addToFilmSpeciesPayloadModelPrimitives, AddToFilmSpeciesPayloadModelSelector } from "./AddToFilmSpeciesPayloadModel.base"

/**
 * AddToFilmSpeciesPayloadModel
 */
export const AddToFilmSpeciesPayloadModel = AddToFilmSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
