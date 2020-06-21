import { Instance } from "mobx-state-tree"
import { PlanetSubscriptionPayloadModelBase } from "./PlanetSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of PlanetSubscriptionPayloadModel */
export interface PlanetSubscriptionPayloadModelType extends Instance<typeof PlanetSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for PlanetSubscriptionPayloadModel */
export { selectFromPlanetSubscriptionPayload, planetSubscriptionPayloadModelPrimitives, PlanetSubscriptionPayloadModelSelector } from "./PlanetSubscriptionPayloadModel.base"

/**
 * PlanetSubscriptionPayloadModel
 */
export const PlanetSubscriptionPayloadModel = PlanetSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
