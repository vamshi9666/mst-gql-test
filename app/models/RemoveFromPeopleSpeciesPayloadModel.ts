import { Instance } from "mobx-state-tree"
import { RemoveFromPeopleSpeciesPayloadModelBase } from "./RemoveFromPeopleSpeciesPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromPeopleSpeciesPayloadModel */
export interface RemoveFromPeopleSpeciesPayloadModelType extends Instance<typeof RemoveFromPeopleSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromPeopleSpeciesPayloadModel */
export { selectFromRemoveFromPeopleSpeciesPayload, removeFromPeopleSpeciesPayloadModelPrimitives, RemoveFromPeopleSpeciesPayloadModelSelector } from "./RemoveFromPeopleSpeciesPayloadModel.base"

/**
 * RemoveFromPeopleSpeciesPayloadModel
 */
export const RemoveFromPeopleSpeciesPayloadModel = RemoveFromPeopleSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
