import { Instance } from "mobx-state-tree"
import { AddToPeoplePlanetPayloadModelBase } from "./AddToPeoplePlanetPayloadModel.base"

/* The TypeScript type of an instance of AddToPeoplePlanetPayloadModel */
export interface AddToPeoplePlanetPayloadModelType extends Instance<typeof AddToPeoplePlanetPayloadModel.Type> {}

/* A graphql query fragment builders for AddToPeoplePlanetPayloadModel */
export { selectFromAddToPeoplePlanetPayload, addToPeoplePlanetPayloadModelPrimitives, AddToPeoplePlanetPayloadModelSelector } from "./AddToPeoplePlanetPayloadModel.base"

/**
 * AddToPeoplePlanetPayloadModel
 */
export const AddToPeoplePlanetPayloadModel = AddToPeoplePlanetPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
