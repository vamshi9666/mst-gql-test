/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { PlanetPreviousValuesModel, PlanetPreviousValuesModelType } from "./PlanetPreviousValuesModel"
import { PlanetPreviousValuesModelSelector } from "./PlanetPreviousValuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: PlanetModelType;
  previousValues: PlanetPreviousValuesModelType;
}

/**
 * PlanetSubscriptionPayloadBase
 * auto generated base class for the model PlanetSubscriptionPayloadModel.
 */
export const PlanetSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PlanetSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("PlanetSubscriptionPayload"), "PlanetSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PlanetSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`node`, PlanetModelSelector, builder) }
  previousValues(builder?: string | PlanetPreviousValuesModelSelector | ((selector: PlanetPreviousValuesModelSelector) => PlanetPreviousValuesModelSelector)) { return this.__child(`previousValues`, PlanetPreviousValuesModelSelector, builder) }
}
export function selectFromPlanetSubscriptionPayload() {
  return new PlanetSubscriptionPayloadModelSelector()
}

export const planetSubscriptionPayloadModelPrimitives = selectFromPlanetSubscriptionPayload().mutation.updatedFields
