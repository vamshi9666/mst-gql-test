import { Instance } from "mobx-state-tree"
import { AssetSubscriptionPayloadModelBase } from "./AssetSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of AssetSubscriptionPayloadModel */
export interface AssetSubscriptionPayloadModelType extends Instance<typeof AssetSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for AssetSubscriptionPayloadModel */
export { selectFromAssetSubscriptionPayload, assetSubscriptionPayloadModelPrimitives, AssetSubscriptionPayloadModelSelector } from "./AssetSubscriptionPayloadModel.base"

/**
 * AssetSubscriptionPayloadModel
 */
export const AssetSubscriptionPayloadModel = AssetSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
