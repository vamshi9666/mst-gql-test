import { Instance } from "mobx-state-tree"
import { VehicleModelBase } from "./VehicleModel.base"

/* The TypeScript type of an instance of VehicleModel */
export interface VehicleModelType extends Instance<typeof VehicleModel.Type> {}

/* A graphql query fragment builders for VehicleModel */
export { selectFromVehicle, vehicleModelPrimitives, VehicleModelSelector } from "./VehicleModel.base"

/**
 * VehicleModel
 */
export const VehicleModel = VehicleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
