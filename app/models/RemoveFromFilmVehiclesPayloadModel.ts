import { Instance } from "mobx-state-tree"
import { RemoveFromFilmVehiclesPayloadModelBase } from "./RemoveFromFilmVehiclesPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromFilmVehiclesPayloadModel */
export interface RemoveFromFilmVehiclesPayloadModelType extends Instance<typeof RemoveFromFilmVehiclesPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromFilmVehiclesPayloadModel */
export { selectFromRemoveFromFilmVehiclesPayload, removeFromFilmVehiclesPayloadModelPrimitives, RemoveFromFilmVehiclesPayloadModelSelector } from "./RemoveFromFilmVehiclesPayloadModel.base"

/**
 * RemoveFromFilmVehiclesPayloadModel
 */
export const RemoveFromFilmVehiclesPayloadModel = RemoveFromFilmVehiclesPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
