/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { SpeciesPreviousValuesModel, SpeciesPreviousValuesModelType } from "./SpeciesPreviousValuesModel"
import { SpeciesPreviousValuesModelSelector } from "./SpeciesPreviousValuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: SpeciesModelType;
  previousValues: SpeciesPreviousValuesModelType;
}

/**
 * SpeciesSubscriptionPayloadBase
 * auto generated base class for the model SpeciesSubscriptionPayloadModel.
 */
export const SpeciesSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SpeciesSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("SpeciesSubscriptionPayload"), "SpeciesSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`node`, SpeciesModelSelector, builder) }
  previousValues(builder?: string | SpeciesPreviousValuesModelSelector | ((selector: SpeciesPreviousValuesModelSelector) => SpeciesPreviousValuesModelSelector)) { return this.__child(`previousValues`, SpeciesPreviousValuesModelSelector, builder) }
}
export function selectFromSpeciesSubscriptionPayload() {
  return new SpeciesSubscriptionPayloadModelSelector()
}

export const speciesSubscriptionPayloadModelPrimitives = selectFromSpeciesSubscriptionPayload().mutation.updatedFields
