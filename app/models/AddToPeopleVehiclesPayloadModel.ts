import { Instance } from "mobx-state-tree"
import { AddToPeopleVehiclesPayloadModelBase } from "./AddToPeopleVehiclesPayloadModel.base"

/* The TypeScript type of an instance of AddToPeopleVehiclesPayloadModel */
export interface AddToPeopleVehiclesPayloadModelType extends Instance<typeof AddToPeopleVehiclesPayloadModel.Type> {}

/* A graphql query fragment builders for AddToPeopleVehiclesPayloadModel */
export { selectFromAddToPeopleVehiclesPayload, addToPeopleVehiclesPayloadModelPrimitives, AddToPeopleVehiclesPayloadModelSelector } from "./AddToPeopleVehiclesPayloadModel.base"

/**
 * AddToPeopleVehiclesPayloadModel
 */
export const AddToPeopleVehiclesPayloadModel = AddToPeopleVehiclesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
