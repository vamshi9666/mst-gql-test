/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  filmsFilm: FilmModelType;
  planetsPlanet: PlanetModelType;
}

/**
 * AddToFilmPlanetsPayloadBase
 * auto generated base class for the model AddToFilmPlanetsPayloadModel.
 */
export const AddToFilmPlanetsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToFilmPlanetsPayload')
  .props({
    __typename: types.optional(types.literal("AddToFilmPlanetsPayload"), "AddToFilmPlanetsPayload"),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    planetsPlanet: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToFilmPlanetsPayloadModelSelector extends QueryBuilder {
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
  planetsPlanet(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`planetsPlanet`, PlanetModelSelector, builder) }
}
export function selectFromAddToFilmPlanetsPayload() {
  return new AddToFilmPlanetsPayloadModelSelector()
}

export const addToFilmPlanetsPayloadModelPrimitives = selectFromAddToFilmPlanetsPayload()
