import { Instance } from "mobx-state-tree"
import { StarshipSubscriptionPayloadModelBase } from "./StarshipSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of StarshipSubscriptionPayloadModel */
export interface StarshipSubscriptionPayloadModelType extends Instance<typeof StarshipSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for StarshipSubscriptionPayloadModel */
export { selectFromStarshipSubscriptionPayload, starshipSubscriptionPayloadModelPrimitives, StarshipSubscriptionPayloadModelSelector } from "./StarshipSubscriptionPayloadModel.base"

/**
 * StarshipSubscriptionPayloadModel
 */
export const StarshipSubscriptionPayloadModel = StarshipSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
