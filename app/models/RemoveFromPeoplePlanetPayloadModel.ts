import { Instance } from "mobx-state-tree"
import { RemoveFromPeoplePlanetPayloadModelBase } from "./RemoveFromPeoplePlanetPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromPeoplePlanetPayloadModel */
export interface RemoveFromPeoplePlanetPayloadModelType extends Instance<typeof RemoveFromPeoplePlanetPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromPeoplePlanetPayloadModel */
export { selectFromRemoveFromPeoplePlanetPayload, removeFromPeoplePlanetPayloadModelPrimitives, RemoveFromPeoplePlanetPayloadModelSelector } from "./RemoveFromPeoplePlanetPayloadModel.base"

/**
 * RemoveFromPeoplePlanetPayloadModel
 */
export const RemoveFromPeoplePlanetPayloadModel = RemoveFromPeoplePlanetPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
