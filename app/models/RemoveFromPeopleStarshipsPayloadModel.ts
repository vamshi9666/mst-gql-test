import { Instance } from "mobx-state-tree"
import { RemoveFromPeopleStarshipsPayloadModelBase } from "./RemoveFromPeopleStarshipsPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromPeopleStarshipsPayloadModel */
export interface RemoveFromPeopleStarshipsPayloadModelType extends Instance<typeof RemoveFromPeopleStarshipsPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromPeopleStarshipsPayloadModel */
export { selectFromRemoveFromPeopleStarshipsPayload, removeFromPeopleStarshipsPayloadModelPrimitives, RemoveFromPeopleStarshipsPayloadModelSelector } from "./RemoveFromPeopleStarshipsPayloadModel.base"

/**
 * RemoveFromPeopleStarshipsPayloadModel
 */
export const RemoveFromPeopleStarshipsPayloadModel = RemoveFromPeopleStarshipsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
