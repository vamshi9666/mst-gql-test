/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { QueryMetaModel, QueryMetaModelType } from "./QueryMetaModel"
import { QueryMetaModelSelector } from "./QueryMetaModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  characters: IObservableArray<PersonModelType>;
  planets: IObservableArray<PlanetModelType>;
  species: IObservableArray<SpeciesModelType>;
  starships: IObservableArray<StarshipModelType>;
  vehicles: IObservableArray<VehicleModelType>;
}

/**
 * FilmBase
 * auto generated base class for the model FilmModel.
 */
export const FilmModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Film')
  .props({
    __typename: types.optional(types.literal("Film"), "Film"),
    characters: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => PersonModel)))),
    createdAt: types.union(types.undefined, types.frozen()),
    director: types.union(types.undefined, types.null, types.string),
    episodeId: types.union(types.undefined, types.integer),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    openingCrawl: types.union(types.undefined, types.null, types.string),
    planets: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => PlanetModel)))),
    producers: types.union(types.undefined, types.null, types.array(types.string)),
    releaseDate: types.union(types.undefined, types.null, types.frozen()),
    species: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => SpeciesModel)))),
    starships: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => StarshipModel)))),
    title: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    vehicles: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => VehicleModel)))),
    _charactersMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _planetsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _speciesMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _starshipsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _vehiclesMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FilmModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get director() { return this.__attr(`director`) }
  get episodeId() { return this.__attr(`episodeId`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get openingCrawl() { return this.__attr(`openingCrawl`) }
  get producers() { return this.__attr(`producers`) }
  get releaseDate() { return this.__attr(`releaseDate`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  characters(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`characters`, PersonModelSelector, builder) }
  planets(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`planets`, PlanetModelSelector, builder) }
  species(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`species`, SpeciesModelSelector, builder) }
  starships(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`starships`, StarshipModelSelector, builder) }
  vehicles(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehicles`, VehicleModelSelector, builder) }
  _charactersMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_charactersMeta`, QueryMetaModelSelector, builder) }
  _planetsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_planetsMeta`, QueryMetaModelSelector, builder) }
  _speciesMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_speciesMeta`, QueryMetaModelSelector, builder) }
  _starshipsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_starshipsMeta`, QueryMetaModelSelector, builder) }
  _vehiclesMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_vehiclesMeta`, QueryMetaModelSelector, builder) }
}
export function selectFromFilm() {
  return new FilmModelSelector()
}

export const filmModelPrimitives = selectFromFilm().createdAt.director.episodeId.isPublished.openingCrawl.producers.releaseDate.title.updatedAt
