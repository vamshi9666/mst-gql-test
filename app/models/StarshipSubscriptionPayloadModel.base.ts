/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { StarshipPreviousValuesModel, StarshipPreviousValuesModelType } from "./StarshipPreviousValuesModel"
import { StarshipPreviousValuesModelSelector } from "./StarshipPreviousValuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: StarshipModelType;
  previousValues: StarshipPreviousValuesModelType;
}

/**
 * StarshipSubscriptionPayloadBase
 * auto generated base class for the model StarshipSubscriptionPayloadModel.
 */
export const StarshipSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('StarshipSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("StarshipSubscriptionPayload"), "StarshipSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class StarshipSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`node`, StarshipModelSelector, builder) }
  previousValues(builder?: string | StarshipPreviousValuesModelSelector | ((selector: StarshipPreviousValuesModelSelector) => StarshipPreviousValuesModelSelector)) { return this.__child(`previousValues`, StarshipPreviousValuesModelSelector, builder) }
}
export function selectFromStarshipSubscriptionPayload() {
  return new StarshipSubscriptionPayloadModelSelector()
}

export const starshipSubscriptionPayloadModelPrimitives = selectFromStarshipSubscriptionPayload().mutation.updatedFields
