/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  residentsPerson: PersonModelType;
  homeworldPlanet: PlanetModelType;
}

/**
 * AddToPeoplePlanetPayloadBase
 * auto generated base class for the model AddToPeoplePlanetPayloadModel.
 */
export const AddToPeoplePlanetPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToPeoplePlanetPayload')
  .props({
    __typename: types.optional(types.literal("AddToPeoplePlanetPayload"), "AddToPeoplePlanetPayload"),
    residentsPerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    homeworldPlanet: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToPeoplePlanetPayloadModelSelector extends QueryBuilder {
  residentsPerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`residentsPerson`, PersonModelSelector, builder) }
  homeworldPlanet(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`homeworldPlanet`, PlanetModelSelector, builder) }
}
export function selectFromAddToPeoplePlanetPayload() {
  return new AddToPeoplePlanetPayloadModelSelector()
}

export const addToPeoplePlanetPayloadModelPrimitives = selectFromAddToPeoplePlanetPayload()
