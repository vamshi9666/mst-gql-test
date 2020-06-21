import { Instance } from "mobx-state-tree"
import { AssetPreviousValuesModelBase } from "./AssetPreviousValuesModel.base"

/* The TypeScript type of an instance of AssetPreviousValuesModel */
export interface AssetPreviousValuesModelType extends Instance<typeof AssetPreviousValuesModel.Type> {}

/* A graphql query fragment builders for AssetPreviousValuesModel */
export { selectFromAssetPreviousValues, assetPreviousValuesModelPrimitives, AssetPreviousValuesModelSelector } from "./AssetPreviousValuesModel.base"

/**
 * AssetPreviousValuesModel
 */
export const AssetPreviousValuesModel = AssetPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
