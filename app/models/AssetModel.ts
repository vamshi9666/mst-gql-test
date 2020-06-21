import { Instance } from "mobx-state-tree"
import { AssetModelBase } from "./AssetModel.base"

/* The TypeScript type of an instance of AssetModel */
export interface AssetModelType extends Instance<typeof AssetModel.Type> {}

/* A graphql query fragment builders for AssetModel */
export { selectFromAsset, assetModelPrimitives, AssetModelSelector } from "./AssetModel.base"

/**
 * AssetModel
 */
export const AssetModel = AssetModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
