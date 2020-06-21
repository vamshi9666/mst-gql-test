/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { PersonPreviousValuesModel, PersonPreviousValuesModelType } from "./PersonPreviousValuesModel"
import { PersonPreviousValuesModelSelector } from "./PersonPreviousValuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: PersonModelType;
  previousValues: PersonPreviousValuesModelType;
}

/**
 * PersonSubscriptionPayloadBase
 * auto generated base class for the model PersonSubscriptionPayloadModel.
 */
export const PersonSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PersonSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("PersonSubscriptionPayload"), "PersonSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonPreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PersonSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`node`, PersonModelSelector, builder) }
  previousValues(builder?: string | PersonPreviousValuesModelSelector | ((selector: PersonPreviousValuesModelSelector) => PersonPreviousValuesModelSelector)) { return this.__child(`previousValues`, PersonPreviousValuesModelSelector, builder) }
}
export function selectFromPersonSubscriptionPayload() {
  return new PersonSubscriptionPayloadModelSelector()
}

export const personSubscriptionPayloadModelPrimitives = selectFromPersonSubscriptionPayload().mutation.updatedFields
