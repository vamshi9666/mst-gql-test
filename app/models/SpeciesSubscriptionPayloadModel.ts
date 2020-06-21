import { Instance } from "mobx-state-tree"
import { SpeciesSubscriptionPayloadModelBase } from "./SpeciesSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of SpeciesSubscriptionPayloadModel */
export interface SpeciesSubscriptionPayloadModelType extends Instance<typeof SpeciesSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for SpeciesSubscriptionPayloadModel */
export { selectFromSpeciesSubscriptionPayload, speciesSubscriptionPayloadModelPrimitives, SpeciesSubscriptionPayloadModelSelector } from "./SpeciesSubscriptionPayloadModel.base"

/**
 * SpeciesSubscriptionPayloadModel
 */
export const SpeciesSubscriptionPayloadModel = SpeciesSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
