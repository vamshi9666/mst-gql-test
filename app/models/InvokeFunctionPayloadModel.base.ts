/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * InvokeFunctionPayloadBase
 * auto generated base class for the model InvokeFunctionPayloadModel.
 */
export const InvokeFunctionPayloadModelBase = ModelBase
  .named('InvokeFunctionPayload')
  .props({
    __typename: types.optional(types.literal("InvokeFunctionPayload"), "InvokeFunctionPayload"),
    result: types.union(types.undefined, types.string),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class InvokeFunctionPayloadModelSelector extends QueryBuilder {
  get result() { return this.__attr(`result`) }
  get clientMutationId() { return this.__attr(`clientMutationId`) }
}
export function selectFromInvokeFunctionPayload() {
  return new InvokeFunctionPayloadModelSelector()
}

export const invokeFunctionPayloadModelPrimitives = selectFromInvokeFunctionPayload().result.clientMutationId
