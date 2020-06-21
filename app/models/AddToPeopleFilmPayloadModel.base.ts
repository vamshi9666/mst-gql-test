/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  charactersPerson: PersonModelType;
  filmsFilm: FilmModelType;
}

/**
 * AddToPeopleFilmPayloadBase
 * auto generated base class for the model AddToPeopleFilmPayloadModel.
 */
export const AddToPeopleFilmPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToPeopleFilmPayload')
  .props({
    __typename: types.optional(types.literal("AddToPeopleFilmPayload"), "AddToPeopleFilmPayload"),
    charactersPerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToPeopleFilmPayloadModelSelector extends QueryBuilder {
  charactersPerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`charactersPerson`, PersonModelSelector, builder) }
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
}
export function selectFromAddToPeopleFilmPayload() {
  return new AddToPeopleFilmPayloadModelSelector()
}

export const addToPeopleFilmPayloadModelPrimitives = selectFromAddToPeopleFilmPayload()
