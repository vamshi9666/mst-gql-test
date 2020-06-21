/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { QueryMetaModel, QueryMetaModelType } from "./QueryMetaModel"
import { QueryMetaModelSelector } from "./QueryMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  films: IObservableArray<FilmModelType>;
  residents: IObservableArray<PersonModelType>;
}

/**
 * PlanetBase
 * auto generated base class for the model PlanetModel.
 */
export const PlanetModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Planet')
  .props({
    __typename: types.optional(types.literal("Planet"), "Planet"),
    climate: types.union(types.undefined, types.null, types.array(types.string)),
    createdAt: types.union(types.undefined, types.frozen()),
    diameter: types.union(types.undefined, types.null, types.integer),
    films: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => FilmModel)))),
    gravity: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    orbitalPeriod: types.union(types.undefined, types.null, types.integer),
    population: types.union(types.undefined, types.null, types.number),
    residents: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => PersonModel)))),
    rotationPeriod: types.union(types.undefined, types.null, types.integer),
    surfaceWater: types.union(types.undefined, types.null, types.number),
    terrain: types.union(types.undefined, types.null, types.array(types.string)),
    updatedAt: types.union(types.undefined, types.frozen()),
    _filmsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _residentsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PlanetModelSelector extends QueryBuilder {
  get climate() { return this.__attr(`climate`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get diameter() { return this.__attr(`diameter`) }
  get gravity() { return this.__attr(`gravity`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get name() { return this.__attr(`name`) }
  get orbitalPeriod() { return this.__attr(`orbitalPeriod`) }
  get population() { return this.__attr(`population`) }
  get rotationPeriod() { return this.__attr(`rotationPeriod`) }
  get surfaceWater() { return this.__attr(`surfaceWater`) }
  get terrain() { return this.__attr(`terrain`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  films(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`films`, FilmModelSelector, builder) }
  residents(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`residents`, PersonModelSelector, builder) }
  _filmsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_filmsMeta`, QueryMetaModelSelector, builder) }
  _residentsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_residentsMeta`, QueryMetaModelSelector, builder) }
}
export function selectFromPlanet() {
  return new PlanetModelSelector()
}

export const planetModelPrimitives = selectFromPlanet().climate.createdAt.diameter.gravity.isPublished.name.orbitalPeriod.population.rotationPeriod.surfaceWater.terrain.updatedAt
