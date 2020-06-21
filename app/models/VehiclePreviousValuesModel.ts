import { Instance } from "mobx-state-tree"
import { VehiclePreviousValuesModelBase } from "./VehiclePreviousValuesModel.base"

/* The TypeScript type of an instance of VehiclePreviousValuesModel */
export interface VehiclePreviousValuesModelType extends Instance<typeof VehiclePreviousValuesModel.Type> {}

/* A graphql query fragment builders for VehiclePreviousValuesModel */
export { selectFromVehiclePreviousValues, vehiclePreviousValuesModelPrimitives, VehiclePreviousValuesModelSelector } from "./VehiclePreviousValuesModel.base"

/**
 * VehiclePreviousValuesModel
 */
export const VehiclePreviousValuesModel = VehiclePreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
