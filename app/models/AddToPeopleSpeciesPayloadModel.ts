import { Instance } from "mobx-state-tree"
import { AddToPeopleSpeciesPayloadModelBase } from "./AddToPeopleSpeciesPayloadModel.base"

/* The TypeScript type of an instance of AddToPeopleSpeciesPayloadModel */
export interface AddToPeopleSpeciesPayloadModelType extends Instance<typeof AddToPeopleSpeciesPayloadModel.Type> {}

/* A graphql query fragment builders for AddToPeopleSpeciesPayloadModel */
export { selectFromAddToPeopleSpeciesPayload, addToPeopleSpeciesPayloadModelPrimitives, AddToPeopleSpeciesPayloadModelSelector } from "./AddToPeopleSpeciesPayloadModel.base"

/**
 * AddToPeopleSpeciesPayloadModel
 */
export const AddToPeopleSpeciesPayloadModel = AddToPeopleSpeciesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
