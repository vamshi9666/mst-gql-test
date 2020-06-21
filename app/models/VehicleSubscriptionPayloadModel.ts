import { Instance } from "mobx-state-tree"
import { VehicleSubscriptionPayloadModelBase } from "./VehicleSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of VehicleSubscriptionPayloadModel */
export interface VehicleSubscriptionPayloadModelType extends Instance<typeof VehicleSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for VehicleSubscriptionPayloadModel */
export { selectFromVehicleSubscriptionPayload, vehicleSubscriptionPayloadModelPrimitives, VehicleSubscriptionPayloadModelSelector } from "./VehicleSubscriptionPayloadModel.base"

/**
 * VehicleSubscriptionPayloadModel
 */
export const VehicleSubscriptionPayloadModel = VehicleSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
