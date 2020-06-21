/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { FilmPreviousValuesModel, FilmPreviousValuesModelType } from "./FilmPreviousValuesModel"
import { FilmPreviousValuesModelSelector } from "./FilmPreviousValuesModel.base"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: FilmModelType;
  previousValues: FilmPreviousValuesModelType;
}

/**
 * FilmSubscriptionPayloadBase
 * auto generated base class for the model FilmSubscriptionPayloadModel.
 */
export const FilmSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilmSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("FilmSubscriptionPayload"), "FilmSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FilmSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`node`, FilmModelSelector, builder) }
  previousValues(builder?: string | FilmPreviousValuesModelSelector | ((selector: FilmPreviousValuesModelSelector) => FilmPreviousValuesModelSelector)) { return this.__child(`previousValues`, FilmPreviousValuesModelSelector, builder) }
}
export function selectFromFilmSubscriptionPayload() {
  return new FilmSubscriptionPayloadModelSelector()
}

export const filmSubscriptionPayloadModelPrimitives = selectFromFilmSubscriptionPayload().mutation.updatedFields
