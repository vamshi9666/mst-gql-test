/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  filmsFilm: FilmModelType;
  starshipsStarship: StarshipModelType;
}

/**
 * AddToFilmStarshipsPayloadBase
 * auto generated base class for the model AddToFilmStarshipsPayloadModel.
 */
export const AddToFilmStarshipsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToFilmStarshipsPayload')
  .props({
    __typename: types.optional(types.literal("AddToFilmStarshipsPayload"), "AddToFilmStarshipsPayload"),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    starshipsStarship: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToFilmStarshipsPayloadModelSelector extends QueryBuilder {
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
  starshipsStarship(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`starshipsStarship`, StarshipModelSelector, builder) }
}
export function selectFromAddToFilmStarshipsPayload() {
  return new AddToFilmStarshipsPayloadModelSelector()
}

export const addToFilmStarshipsPayloadModelPrimitives = selectFromAddToFilmStarshipsPayload()
