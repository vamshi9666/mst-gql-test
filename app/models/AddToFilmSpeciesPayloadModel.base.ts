/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  filmsFilm: FilmModelType;
  speciesSpecies: SpeciesModelType;
}

/**
 * AddToFilmSpeciesPayloadBase
 * auto generated base class for the model AddToFilmSpeciesPayloadModel.
 */
export const AddToFilmSpeciesPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToFilmSpeciesPayload')
  .props({
    __typename: types.optional(types.literal("AddToFilmSpeciesPayload"), "AddToFilmSpeciesPayload"),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    speciesSpecies: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToFilmSpeciesPayloadModelSelector extends QueryBuilder {
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
  speciesSpecies(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`speciesSpecies`, SpeciesModelSelector, builder) }
}
export function selectFromAddToFilmSpeciesPayload() {
  return new AddToFilmSpeciesPayloadModelSelector()
}

export const addToFilmSpeciesPayloadModelPrimitives = selectFromAddToFilmSpeciesPayload()
