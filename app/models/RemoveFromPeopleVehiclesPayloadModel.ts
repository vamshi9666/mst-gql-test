import { Instance } from "mobx-state-tree"
import { RemoveFromPeopleVehiclesPayloadModelBase } from "./RemoveFromPeopleVehiclesPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromPeopleVehiclesPayloadModel */
export interface RemoveFromPeopleVehiclesPayloadModelType extends Instance<typeof RemoveFromPeopleVehiclesPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromPeopleVehiclesPayloadModel */
export { selectFromRemoveFromPeopleVehiclesPayload, removeFromPeopleVehiclesPayloadModelPrimitives, RemoveFromPeopleVehiclesPayloadModelSelector } from "./RemoveFromPeopleVehiclesPayloadModel.base"

/**
 * RemoveFromPeopleVehiclesPayloadModel
 */
export const RemoveFromPeopleVehiclesPayloadModel = RemoveFromPeopleVehiclesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
