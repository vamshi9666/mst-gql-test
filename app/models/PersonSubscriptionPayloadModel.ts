import { Instance } from "mobx-state-tree"
import { PersonSubscriptionPayloadModelBase } from "./PersonSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of PersonSubscriptionPayloadModel */
export interface PersonSubscriptionPayloadModelType extends Instance<typeof PersonSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for PersonSubscriptionPayloadModel */
export { selectFromPersonSubscriptionPayload, personSubscriptionPayloadModelPrimitives, PersonSubscriptionPayloadModelSelector } from "./PersonSubscriptionPayloadModel.base"

/**
 * PersonSubscriptionPayloadModel
 */
export const PersonSubscriptionPayloadModel = PersonSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
