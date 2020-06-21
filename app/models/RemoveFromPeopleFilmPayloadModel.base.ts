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
 * RemoveFromPeopleFilmPayloadBase
 * auto generated base class for the model RemoveFromPeopleFilmPayloadModel.
 */
export const RemoveFromPeopleFilmPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RemoveFromPeopleFilmPayload')
  .props({
    __typename: types.optional(types.literal("RemoveFromPeopleFilmPayload"), "RemoveFromPeopleFilmPayload"),
    charactersPerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RemoveFromPeopleFilmPayloadModelSelector extends QueryBuilder {
  charactersPerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`charactersPerson`, PersonModelSelector, builder) }
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
}
export function selectFromRemoveFromPeopleFilmPayload() {
  return new RemoveFromPeopleFilmPayloadModelSelector()
}

export const removeFromPeopleFilmPayloadModelPrimitives = selectFromRemoveFromPeopleFilmPayload()
