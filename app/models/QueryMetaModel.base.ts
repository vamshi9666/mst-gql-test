/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * QueryMetaBase
 * auto generated base class for the model QueryMetaModel.
 */
export const QueryMetaModelBase = ModelBase
  .named('QueryMeta')
  .props({
    __typename: types.optional(types.literal("_QueryMeta"), "_QueryMeta"),
    count: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class QueryMetaModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromQueryMeta() {
  return new QueryMetaModelSelector()
}

export const queryMetaModelPrimitives = selectFromQueryMeta().count
