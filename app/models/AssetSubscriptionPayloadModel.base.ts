/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AssetModel, AssetModelType } from "./AssetModel"
import { AssetModelSelector } from "./AssetModel.base"
import { AssetPreviousValuesModel, AssetPreviousValuesModelType } from "./AssetPreviousValuesModel"
import { AssetPreviousValuesModelSelector } from "./AssetPreviousValuesModel.base"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: AssetModelType;
  previousValues: AssetPreviousValuesModelType;
}

/**
 * AssetSubscriptionPayloadBase
 * auto generated base class for the model AssetSubscriptionPayloadModel.
 */
export const AssetSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AssetSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("AssetSubscriptionPayload"), "AssetSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AssetModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AssetPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AssetSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | AssetModelSelector | ((selector: AssetModelSelector) => AssetModelSelector)) { return this.__child(`node`, AssetModelSelector, builder) }
  previousValues(builder?: string | AssetPreviousValuesModelSelector | ((selector: AssetPreviousValuesModelSelector) => AssetPreviousValuesModelSelector)) { return this.__child(`previousValues`, AssetPreviousValuesModelSelector, builder) }
}
export function selectFromAssetSubscriptionPayload() {
  return new AssetSubscriptionPayloadModelSelector()
}

export const assetSubscriptionPayloadModelPrimitives = selectFromAssetSubscriptionPayload().mutation.updatedFields
