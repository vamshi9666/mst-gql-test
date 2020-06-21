/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AssetPreviousValuesBase
 * auto generated base class for the model AssetPreviousValuesModel.
 */
export const AssetPreviousValuesModelBase = ModelBase
  .named('AssetPreviousValues')
  .props({
    __typename: types.optional(types.literal("AssetPreviousValues"), "AssetPreviousValues"),
    createdAt: types.union(types.undefined, types.frozen()),
    fileName: types.union(types.undefined, types.string),
    handle: types.union(types.undefined, types.string),
    height: types.union(types.undefined, types.null, types.number),
    id: types.identifier,
    mimeType: types.union(types.undefined, types.null, types.string),
    size: types.union(types.undefined, types.number),
    updatedAt: types.union(types.undefined, types.frozen()),
    url: types.union(types.undefined, types.string),
    width: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AssetPreviousValuesModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get fileName() { return this.__attr(`fileName`) }
  get handle() { return this.__attr(`handle`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get mimeType() { return this.__attr(`mimeType`) }
  get size() { return this.__attr(`size`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get url() { return this.__attr(`url`) }
  get width() { return this.__attr(`width`) }
}
export function selectFromAssetPreviousValues() {
  return new AssetPreviousValuesModelSelector()
}

export const assetPreviousValuesModelPrimitives = selectFromAssetPreviousValues().createdAt.fileName.handle.height.mimeType.size.updatedAt.url.width
