/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { PersonEyeColorEnumType } from "./PersonEyeColorEnum"
import { PersonGenderEnumType } from "./PersonGenderEnum"
import { PersonHairColorEnumType } from "./PersonHairColorEnum"
import { PersonSkinColorEnumType } from "./PersonSkinColorEnum"
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
  films: IObservableArray<FilmModelType>;
  homeworld: PlanetModelType;
  species: IObservableArray<SpeciesModelType>;
  starships: IObservableArray<StarshipModelType>;
  vehicles: IObservableArray<VehicleModelType>;
}

/**
 * PersonBase
 * auto generated base class for the model PersonModel.
 */
export const PersonModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Person')
  .props({
    __typename: types.optional(types.literal("Person"), "Person"),
    birthYear: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    eyeColor: types.union(types.undefined, types.null, types.array(PersonEyeColorEnumType)),
    films: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => FilmModel)))),
    gender: types.union(types.undefined, types.null, PersonGenderEnumType),
    hairColor: types.union(types.undefined, types.null, types.array(PersonHairColorEnumType)),
    height: types.union(types.undefined, types.null, types.integer),
    homeworld: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    mass: types.union(types.undefined, types.null, types.number),
    name: types.union(types.undefined, types.string),
    skinColor: types.union(types.undefined, types.null, types.array(PersonSkinColorEnumType)),
    species: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => SpeciesModel)))),
    starships: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => StarshipModel)))),
    updatedAt: types.union(types.undefined, types.frozen()),
    vehicles: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => VehicleModel)))),
    _filmsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _speciesMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _starshipsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _vehiclesMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PersonModelSelector extends QueryBuilder {
  get birthYear() { return this.__attr(`birthYear`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get eyeColor() { return this.__attr(`eyeColor`) }
  get gender() { return this.__attr(`gender`) }
  get hairColor() { return this.__attr(`hairColor`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get mass() { return this.__attr(`mass`) }
  get name() { return this.__attr(`name`) }
  get skinColor() { return this.__attr(`skinColor`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  films(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`films`, FilmModelSelector, builder) }
  homeworld(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`homeworld`, PlanetModelSelector, builder) }
  species(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`species`, SpeciesModelSelector, builder) }
  starships(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`starships`, StarshipModelSelector, builder) }
  vehicles(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehicles`, VehicleModelSelector, builder) }
  _filmsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_filmsMeta`, QueryMetaModelSelector, builder) }
  _speciesMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_speciesMeta`, QueryMetaModelSelector, builder) }
  _starshipsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_starshipsMeta`, QueryMetaModelSelector, builder) }
  _vehiclesMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_vehiclesMeta`, QueryMetaModelSelector, builder) }
}
export function selectFromPerson() {
  return new PersonModelSelector()
}

export const personModelPrimitives = selectFromPerson().birthYear.createdAt.eyeColor.gender.hairColor.height.isPublished.mass.name.skinColor.updatedAt
