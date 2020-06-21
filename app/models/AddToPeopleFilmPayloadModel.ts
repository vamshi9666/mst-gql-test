import { Instance } from "mobx-state-tree"
import { AddToPeopleFilmPayloadModelBase } from "./AddToPeopleFilmPayloadModel.base"

/* The TypeScript type of an instance of AddToPeopleFilmPayloadModel */
export interface AddToPeopleFilmPayloadModelType extends Instance<typeof AddToPeopleFilmPayloadModel.Type> {}

/* A graphql query fragment builders for AddToPeopleFilmPayloadModel */
export { selectFromAddToPeopleFilmPayload, addToPeopleFilmPayloadModelPrimitives, AddToPeopleFilmPayloadModelSelector } from "./AddToPeopleFilmPayloadModel.base"

/**
 * AddToPeopleFilmPayloadModel
 */
export const AddToPeopleFilmPayloadModel = AddToPeopleFilmPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
