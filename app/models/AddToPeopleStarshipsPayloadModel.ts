import { Instance } from "mobx-state-tree"
import { AddToPeopleStarshipsPayloadModelBase } from "./AddToPeopleStarshipsPayloadModel.base"

/* The TypeScript type of an instance of AddToPeopleStarshipsPayloadModel */
export interface AddToPeopleStarshipsPayloadModelType extends Instance<typeof AddToPeopleStarshipsPayloadModel.Type> {}

/* A graphql query fragment builders for AddToPeopleStarshipsPayloadModel */
export { selectFromAddToPeopleStarshipsPayload, addToPeopleStarshipsPayloadModelPrimitives, AddToPeopleStarshipsPayloadModelSelector } from "./AddToPeopleStarshipsPayloadModel.base"

/**
 * AddToPeopleStarshipsPayloadModel
 */
export const AddToPeopleStarshipsPayloadModel = AddToPeopleStarshipsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
