import { Instance } from "mobx-state-tree"
import { AddToFilmVehiclesPayloadModelBase } from "./AddToFilmVehiclesPayloadModel.base"

/* The TypeScript type of an instance of AddToFilmVehiclesPayloadModel */
export interface AddToFilmVehiclesPayloadModelType extends Instance<typeof AddToFilmVehiclesPayloadModel.Type> {}

/* A graphql query fragment builders for AddToFilmVehiclesPayloadModel */
export { selectFromAddToFilmVehiclesPayload, addToFilmVehiclesPayloadModelPrimitives, AddToFilmVehiclesPayloadModelSelector } from "./AddToFilmVehiclesPayloadModel.base"

/**
 * AddToFilmVehiclesPayloadModel
 */
export const AddToFilmVehiclesPayloadModel = AddToFilmVehiclesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
