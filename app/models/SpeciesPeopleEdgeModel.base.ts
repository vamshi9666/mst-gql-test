/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: PersonModelType;
}

/**
 * SpeciesPeopleEdgeBase
 * auto generated base class for the model SpeciesPeopleEdgeModel.
 *
 * An edge in a connection.
 */
export const SpeciesPeopleEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SpeciesPeopleEdge')
  .props({
    __typename: types.optional(types.literal("SpeciesPeopleEdge"), "SpeciesPeopleEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesPeopleEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`node`, PersonModelSelector, builder) }
}
export function selectFromSpeciesPeopleEdge() {
  return new SpeciesPeopleEdgeModelSelector()
}

export const speciesPeopleEdgeModelPrimitives = selectFromSpeciesPeopleEdge().cursor
