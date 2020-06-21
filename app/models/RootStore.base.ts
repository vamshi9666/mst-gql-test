/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { AssetModel, AssetModelType } from "./AssetModel"
import { assetModelPrimitives, AssetModelSelector } from "./AssetModel.base"
import { FilmModel, FilmModelType } from "./FilmModel"
import { filmModelPrimitives, FilmModelSelector } from "./FilmModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { personModelPrimitives, PersonModelSelector } from "./PersonModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { planetModelPrimitives, PlanetModelSelector } from "./PlanetModel.base"
import { QueryMetaModel, QueryMetaModelType } from "./QueryMetaModel"
import { queryMetaModelPrimitives, QueryMetaModelSelector } from "./QueryMetaModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { speciesModelPrimitives, SpeciesModelSelector } from "./SpeciesModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { starshipModelPrimitives, StarshipModelSelector } from "./StarshipModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { vehicleModelPrimitives, VehicleModelSelector } from "./VehicleModel.base"
import { AddToFilmPlanetsPayloadModel, AddToFilmPlanetsPayloadModelType } from "./AddToFilmPlanetsPayloadModel"
import { addToFilmPlanetsPayloadModelPrimitives, AddToFilmPlanetsPayloadModelSelector } from "./AddToFilmPlanetsPayloadModel.base"
import { AddToFilmSpeciesPayloadModel, AddToFilmSpeciesPayloadModelType } from "./AddToFilmSpeciesPayloadModel"
import { addToFilmSpeciesPayloadModelPrimitives, AddToFilmSpeciesPayloadModelSelector } from "./AddToFilmSpeciesPayloadModel.base"
import { AddToFilmStarshipsPayloadModel, AddToFilmStarshipsPayloadModelType } from "./AddToFilmStarshipsPayloadModel"
import { addToFilmStarshipsPayloadModelPrimitives, AddToFilmStarshipsPayloadModelSelector } from "./AddToFilmStarshipsPayloadModel.base"
import { AddToFilmVehiclesPayloadModel, AddToFilmVehiclesPayloadModelType } from "./AddToFilmVehiclesPayloadModel"
import { addToFilmVehiclesPayloadModelPrimitives, AddToFilmVehiclesPayloadModelSelector } from "./AddToFilmVehiclesPayloadModel.base"
import { AddToPeopleFilmPayloadModel, AddToPeopleFilmPayloadModelType } from "./AddToPeopleFilmPayloadModel"
import { addToPeopleFilmPayloadModelPrimitives, AddToPeopleFilmPayloadModelSelector } from "./AddToPeopleFilmPayloadModel.base"
import { AddToPeoplePlanetPayloadModel, AddToPeoplePlanetPayloadModelType } from "./AddToPeoplePlanetPayloadModel"
import { addToPeoplePlanetPayloadModelPrimitives, AddToPeoplePlanetPayloadModelSelector } from "./AddToPeoplePlanetPayloadModel.base"
import { AddToPeopleSpeciesPayloadModel, AddToPeopleSpeciesPayloadModelType } from "./AddToPeopleSpeciesPayloadModel"
import { addToPeopleSpeciesPayloadModelPrimitives, AddToPeopleSpeciesPayloadModelSelector } from "./AddToPeopleSpeciesPayloadModel.base"
import { AddToPeopleStarshipsPayloadModel, AddToPeopleStarshipsPayloadModelType } from "./AddToPeopleStarshipsPayloadModel"
import { addToPeopleStarshipsPayloadModelPrimitives, AddToPeopleStarshipsPayloadModelSelector } from "./AddToPeopleStarshipsPayloadModel.base"
import { AddToPeopleVehiclesPayloadModel, AddToPeopleVehiclesPayloadModelType } from "./AddToPeopleVehiclesPayloadModel"
import { addToPeopleVehiclesPayloadModelPrimitives, AddToPeopleVehiclesPayloadModelSelector } from "./AddToPeopleVehiclesPayloadModel.base"
import { RemoveFromFilmPlanetsPayloadModel, RemoveFromFilmPlanetsPayloadModelType } from "./RemoveFromFilmPlanetsPayloadModel"
import { removeFromFilmPlanetsPayloadModelPrimitives, RemoveFromFilmPlanetsPayloadModelSelector } from "./RemoveFromFilmPlanetsPayloadModel.base"
import { RemoveFromFilmSpeciesPayloadModel, RemoveFromFilmSpeciesPayloadModelType } from "./RemoveFromFilmSpeciesPayloadModel"
import { removeFromFilmSpeciesPayloadModelPrimitives, RemoveFromFilmSpeciesPayloadModelSelector } from "./RemoveFromFilmSpeciesPayloadModel.base"
import { RemoveFromFilmStarshipsPayloadModel, RemoveFromFilmStarshipsPayloadModelType } from "./RemoveFromFilmStarshipsPayloadModel"
import { removeFromFilmStarshipsPayloadModelPrimitives, RemoveFromFilmStarshipsPayloadModelSelector } from "./RemoveFromFilmStarshipsPayloadModel.base"
import { RemoveFromFilmVehiclesPayloadModel, RemoveFromFilmVehiclesPayloadModelType } from "./RemoveFromFilmVehiclesPayloadModel"
import { removeFromFilmVehiclesPayloadModelPrimitives, RemoveFromFilmVehiclesPayloadModelSelector } from "./RemoveFromFilmVehiclesPayloadModel.base"
import { RemoveFromPeopleFilmPayloadModel, RemoveFromPeopleFilmPayloadModelType } from "./RemoveFromPeopleFilmPayloadModel"
import { removeFromPeopleFilmPayloadModelPrimitives, RemoveFromPeopleFilmPayloadModelSelector } from "./RemoveFromPeopleFilmPayloadModel.base"
import { RemoveFromPeoplePlanetPayloadModel, RemoveFromPeoplePlanetPayloadModelType } from "./RemoveFromPeoplePlanetPayloadModel"
import { removeFromPeoplePlanetPayloadModelPrimitives, RemoveFromPeoplePlanetPayloadModelSelector } from "./RemoveFromPeoplePlanetPayloadModel.base"
import { RemoveFromPeopleSpeciesPayloadModel, RemoveFromPeopleSpeciesPayloadModelType } from "./RemoveFromPeopleSpeciesPayloadModel"
import { removeFromPeopleSpeciesPayloadModelPrimitives, RemoveFromPeopleSpeciesPayloadModelSelector } from "./RemoveFromPeopleSpeciesPayloadModel.base"
import { RemoveFromPeopleStarshipsPayloadModel, RemoveFromPeopleStarshipsPayloadModelType } from "./RemoveFromPeopleStarshipsPayloadModel"
import { removeFromPeopleStarshipsPayloadModelPrimitives, RemoveFromPeopleStarshipsPayloadModelSelector } from "./RemoveFromPeopleStarshipsPayloadModel.base"
import { RemoveFromPeopleVehiclesPayloadModel, RemoveFromPeopleVehiclesPayloadModelType } from "./RemoveFromPeopleVehiclesPayloadModel"
import { removeFromPeopleVehiclesPayloadModelPrimitives, RemoveFromPeopleVehiclesPayloadModelSelector } from "./RemoveFromPeopleVehiclesPayloadModel.base"
import { InvokeFunctionPayloadModel, InvokeFunctionPayloadModelType } from "./InvokeFunctionPayloadModel"
import { invokeFunctionPayloadModelPrimitives, InvokeFunctionPayloadModelSelector } from "./InvokeFunctionPayloadModel.base"
import { AssetSubscriptionPayloadModel, AssetSubscriptionPayloadModelType } from "./AssetSubscriptionPayloadModel"
import { assetSubscriptionPayloadModelPrimitives, AssetSubscriptionPayloadModelSelector } from "./AssetSubscriptionPayloadModel.base"
import { AssetPreviousValuesModel, AssetPreviousValuesModelType } from "./AssetPreviousValuesModel"
import { assetPreviousValuesModelPrimitives, AssetPreviousValuesModelSelector } from "./AssetPreviousValuesModel.base"
import { FilmSubscriptionPayloadModel, FilmSubscriptionPayloadModelType } from "./FilmSubscriptionPayloadModel"
import { filmSubscriptionPayloadModelPrimitives, FilmSubscriptionPayloadModelSelector } from "./FilmSubscriptionPayloadModel.base"
import { FilmPreviousValuesModel, FilmPreviousValuesModelType } from "./FilmPreviousValuesModel"
import { filmPreviousValuesModelPrimitives, FilmPreviousValuesModelSelector } from "./FilmPreviousValuesModel.base"
import { PersonSubscriptionPayloadModel, PersonSubscriptionPayloadModelType } from "./PersonSubscriptionPayloadModel"
import { personSubscriptionPayloadModelPrimitives, PersonSubscriptionPayloadModelSelector } from "./PersonSubscriptionPayloadModel.base"
import { PersonPreviousValuesModel, PersonPreviousValuesModelType } from "./PersonPreviousValuesModel"
import { personPreviousValuesModelPrimitives, PersonPreviousValuesModelSelector } from "./PersonPreviousValuesModel.base"
import { PlanetSubscriptionPayloadModel, PlanetSubscriptionPayloadModelType } from "./PlanetSubscriptionPayloadModel"
import { planetSubscriptionPayloadModelPrimitives, PlanetSubscriptionPayloadModelSelector } from "./PlanetSubscriptionPayloadModel.base"
import { PlanetPreviousValuesModel, PlanetPreviousValuesModelType } from "./PlanetPreviousValuesModel"
import { planetPreviousValuesModelPrimitives, PlanetPreviousValuesModelSelector } from "./PlanetPreviousValuesModel.base"
import { SpeciesSubscriptionPayloadModel, SpeciesSubscriptionPayloadModelType } from "./SpeciesSubscriptionPayloadModel"
import { speciesSubscriptionPayloadModelPrimitives, SpeciesSubscriptionPayloadModelSelector } from "./SpeciesSubscriptionPayloadModel.base"
import { SpeciesPreviousValuesModel, SpeciesPreviousValuesModelType } from "./SpeciesPreviousValuesModel"
import { speciesPreviousValuesModelPrimitives, SpeciesPreviousValuesModelSelector } from "./SpeciesPreviousValuesModel.base"
import { StarshipSubscriptionPayloadModel, StarshipSubscriptionPayloadModelType } from "./StarshipSubscriptionPayloadModel"
import { starshipSubscriptionPayloadModelPrimitives, StarshipSubscriptionPayloadModelSelector } from "./StarshipSubscriptionPayloadModel.base"
import { StarshipPreviousValuesModel, StarshipPreviousValuesModelType } from "./StarshipPreviousValuesModel"
import { starshipPreviousValuesModelPrimitives, StarshipPreviousValuesModelSelector } from "./StarshipPreviousValuesModel.base"
import { VehicleSubscriptionPayloadModel, VehicleSubscriptionPayloadModelType } from "./VehicleSubscriptionPayloadModel"
import { vehicleSubscriptionPayloadModelPrimitives, VehicleSubscriptionPayloadModelSelector } from "./VehicleSubscriptionPayloadModel.base"
import { VehiclePreviousValuesModel, VehiclePreviousValuesModelType } from "./VehiclePreviousValuesModel"
import { vehiclePreviousValuesModelPrimitives, VehiclePreviousValuesModelSelector } from "./VehiclePreviousValuesModel.base"

import { AssetOrderBy } from "./AssetOrderByEnum"
import { PersonGender } from "./PersonGenderEnum"
import { FilmOrderBy } from "./FilmOrderByEnum"
import { PersonOrderBy } from "./PersonOrderByEnum"
import { PersonEyeColor } from "./PersonEyeColorEnum"
import { PersonHairColor } from "./PersonHairColorEnum"
import { PersonSkinColor } from "./PersonSkinColorEnum"
import { SpeciesOrderBy } from "./SpeciesOrderByEnum"
import { SpeciesEyeColor } from "./SpeciesEyeColorEnum"
import { SpeciesHairColor } from "./SpeciesHairColorEnum"
import { SpeciesSkinColor } from "./SpeciesSkinColorEnum"
import { StarshipOrderBy } from "./StarshipOrderByEnum"
import { VehicleOrderBy } from "./VehicleOrderByEnum"
import { PlanetOrderBy } from "./PlanetOrderByEnum"
import { ModelMutationType } from "./ModelMutationTypeEnum"

export type AssetFilter = {
  AND?: AssetFilter[]
  OR?: AssetFilter[]
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  fileName?: string
  fileName_not?: string
  fileName_in?: string[]
  fileName_not_in?: string[]
  fileName_lt?: string
  fileName_lte?: string
  fileName_gt?: string
  fileName_gte?: string
  fileName_contains?: string
  fileName_not_contains?: string
  fileName_starts_with?: string
  fileName_not_starts_with?: string
  fileName_ends_with?: string
  fileName_not_ends_with?: string
  handle?: string
  handle_not?: string
  handle_in?: string[]
  handle_not_in?: string[]
  handle_lt?: string
  handle_lte?: string
  handle_gt?: string
  handle_gte?: string
  handle_contains?: string
  handle_not_contains?: string
  handle_starts_with?: string
  handle_not_starts_with?: string
  handle_ends_with?: string
  handle_not_ends_with?: string
  height?: number
  height_not?: number
  height_in?: number[]
  height_not_in?: number[]
  height_lt?: number
  height_lte?: number
  height_gt?: number
  height_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  mimeType?: string
  mimeType_not?: string
  mimeType_in?: string[]
  mimeType_not_in?: string[]
  mimeType_lt?: string
  mimeType_lte?: string
  mimeType_gt?: string
  mimeType_gte?: string
  mimeType_contains?: string
  mimeType_not_contains?: string
  mimeType_starts_with?: string
  mimeType_not_starts_with?: string
  mimeType_ends_with?: string
  mimeType_not_ends_with?: string
  size?: number
  size_not?: number
  size_in?: number[]
  size_not_in?: number[]
  size_lt?: number
  size_lte?: number
  size_gt?: number
  size_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  url?: string
  url_not?: string
  url_in?: string[]
  url_not_in?: string[]
  url_lt?: string
  url_lte?: string
  url_gt?: string
  url_gte?: string
  url_contains?: string
  url_not_contains?: string
  url_starts_with?: string
  url_not_starts_with?: string
  url_ends_with?: string
  url_not_ends_with?: string
  width?: number
  width_not?: number
  width_in?: number[]
  width_not_in?: number[]
  width_lt?: number
  width_lte?: number
  width_gt?: number
  width_gte?: number
}
export type FilmFilter = {
  AND?: FilmFilter[]
  OR?: FilmFilter[]
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  director?: string
  director_not?: string
  director_in?: string[]
  director_not_in?: string[]
  director_lt?: string
  director_lte?: string
  director_gt?: string
  director_gte?: string
  director_contains?: string
  director_not_contains?: string
  director_starts_with?: string
  director_not_starts_with?: string
  director_ends_with?: string
  director_not_ends_with?: string
  episodeId?: number
  episodeId_not?: number
  episodeId_in?: number[]
  episodeId_not_in?: number[]
  episodeId_lt?: number
  episodeId_lte?: number
  episodeId_gt?: number
  episodeId_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  openingCrawl?: string
  openingCrawl_not?: string
  openingCrawl_in?: string[]
  openingCrawl_not_in?: string[]
  openingCrawl_lt?: string
  openingCrawl_lte?: string
  openingCrawl_gt?: string
  openingCrawl_gte?: string
  openingCrawl_contains?: string
  openingCrawl_not_contains?: string
  openingCrawl_starts_with?: string
  openingCrawl_not_starts_with?: string
  openingCrawl_ends_with?: string
  openingCrawl_not_ends_with?: string
  releaseDate?: any
  releaseDate_not?: any
  releaseDate_in?: any[]
  releaseDate_not_in?: any[]
  releaseDate_lt?: any
  releaseDate_lte?: any
  releaseDate_gt?: any
  releaseDate_gte?: any
  title?: string
  title_not?: string
  title_in?: string[]
  title_not_in?: string[]
  title_lt?: string
  title_lte?: string
  title_gt?: string
  title_gte?: string
  title_contains?: string
  title_not_contains?: string
  title_starts_with?: string
  title_not_starts_with?: string
  title_ends_with?: string
  title_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  characters_every?: PersonFilter
  characters_some?: PersonFilter
  characters_none?: PersonFilter
  planets_every?: PlanetFilter
  planets_some?: PlanetFilter
  planets_none?: PlanetFilter
  species_every?: SpeciesFilter
  species_some?: SpeciesFilter
  species_none?: SpeciesFilter
  starships_every?: StarshipFilter
  starships_some?: StarshipFilter
  starships_none?: StarshipFilter
  vehicles_every?: VehicleFilter
  vehicles_some?: VehicleFilter
  vehicles_none?: VehicleFilter
}
export type PersonFilter = {
  AND?: PersonFilter[]
  OR?: PersonFilter[]
  birthYear?: string
  birthYear_not?: string
  birthYear_in?: string[]
  birthYear_not_in?: string[]
  birthYear_lt?: string
  birthYear_lte?: string
  birthYear_gt?: string
  birthYear_gte?: string
  birthYear_contains?: string
  birthYear_not_contains?: string
  birthYear_starts_with?: string
  birthYear_not_starts_with?: string
  birthYear_ends_with?: string
  birthYear_not_ends_with?: string
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  gender?: PersonGender
  gender_not?: PersonGender
  gender_in?: PersonGender[]
  gender_not_in?: PersonGender[]
  height?: number
  height_not?: number
  height_in?: number[]
  height_not_in?: number[]
  height_lt?: number
  height_lte?: number
  height_gt?: number
  height_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  mass?: number
  mass_not?: number
  mass_in?: number[]
  mass_not_in?: number[]
  mass_lt?: number
  mass_lte?: number
  mass_gt?: number
  mass_gte?: number
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  homeworld?: PlanetFilter
  species_every?: SpeciesFilter
  species_some?: SpeciesFilter
  species_none?: SpeciesFilter
  starships_every?: StarshipFilter
  starships_some?: StarshipFilter
  starships_none?: StarshipFilter
  vehicles_every?: VehicleFilter
  vehicles_some?: VehicleFilter
  vehicles_none?: VehicleFilter
}
export type PlanetFilter = {
  AND?: PlanetFilter[]
  OR?: PlanetFilter[]
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  diameter?: number
  diameter_not?: number
  diameter_in?: number[]
  diameter_not_in?: number[]
  diameter_lt?: number
  diameter_lte?: number
  diameter_gt?: number
  diameter_gte?: number
  gravity?: string
  gravity_not?: string
  gravity_in?: string[]
  gravity_not_in?: string[]
  gravity_lt?: string
  gravity_lte?: string
  gravity_gt?: string
  gravity_gte?: string
  gravity_contains?: string
  gravity_not_contains?: string
  gravity_starts_with?: string
  gravity_not_starts_with?: string
  gravity_ends_with?: string
  gravity_not_ends_with?: string
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  orbitalPeriod?: number
  orbitalPeriod_not?: number
  orbitalPeriod_in?: number[]
  orbitalPeriod_not_in?: number[]
  orbitalPeriod_lt?: number
  orbitalPeriod_lte?: number
  orbitalPeriod_gt?: number
  orbitalPeriod_gte?: number
  population?: number
  population_not?: number
  population_in?: number[]
  population_not_in?: number[]
  population_lt?: number
  population_lte?: number
  population_gt?: number
  population_gte?: number
  rotationPeriod?: number
  rotationPeriod_not?: number
  rotationPeriod_in?: number[]
  rotationPeriod_not_in?: number[]
  rotationPeriod_lt?: number
  rotationPeriod_lte?: number
  rotationPeriod_gt?: number
  rotationPeriod_gte?: number
  surfaceWater?: number
  surfaceWater_not?: number
  surfaceWater_in?: number[]
  surfaceWater_not_in?: number[]
  surfaceWater_lt?: number
  surfaceWater_lte?: number
  surfaceWater_gt?: number
  surfaceWater_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  residents_every?: PersonFilter
  residents_some?: PersonFilter
  residents_none?: PersonFilter
}
export type SpeciesFilter = {
  AND?: SpeciesFilter[]
  OR?: SpeciesFilter[]
  averageHeight?: number
  averageHeight_not?: number
  averageHeight_in?: number[]
  averageHeight_not_in?: number[]
  averageHeight_lt?: number
  averageHeight_lte?: number
  averageHeight_gt?: number
  averageHeight_gte?: number
  averageLifespan?: number
  averageLifespan_not?: number
  averageLifespan_in?: number[]
  averageLifespan_not_in?: number[]
  averageLifespan_lt?: number
  averageLifespan_lte?: number
  averageLifespan_gt?: number
  averageLifespan_gte?: number
  classification?: string
  classification_not?: string
  classification_in?: string[]
  classification_not_in?: string[]
  classification_lt?: string
  classification_lte?: string
  classification_gt?: string
  classification_gte?: string
  classification_contains?: string
  classification_not_contains?: string
  classification_starts_with?: string
  classification_not_starts_with?: string
  classification_ends_with?: string
  classification_not_ends_with?: string
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  designation?: string
  designation_not?: string
  designation_in?: string[]
  designation_not_in?: string[]
  designation_lt?: string
  designation_lte?: string
  designation_gt?: string
  designation_gte?: string
  designation_contains?: string
  designation_not_contains?: string
  designation_starts_with?: string
  designation_not_starts_with?: string
  designation_ends_with?: string
  designation_not_ends_with?: string
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  language?: string
  language_not?: string
  language_in?: string[]
  language_not_in?: string[]
  language_lt?: string
  language_lte?: string
  language_gt?: string
  language_gte?: string
  language_contains?: string
  language_not_contains?: string
  language_starts_with?: string
  language_not_starts_with?: string
  language_ends_with?: string
  language_not_ends_with?: string
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  people_every?: PersonFilter
  people_some?: PersonFilter
  people_none?: PersonFilter
}
export type StarshipFilter = {
  AND?: StarshipFilter[]
  OR?: StarshipFilter[]
  cargoCapacity?: number
  cargoCapacity_not?: number
  cargoCapacity_in?: number[]
  cargoCapacity_not_in?: number[]
  cargoCapacity_lt?: number
  cargoCapacity_lte?: number
  cargoCapacity_gt?: number
  cargoCapacity_gte?: number
  class?: string
  class_not?: string
  class_in?: string[]
  class_not_in?: string[]
  class_lt?: string
  class_lte?: string
  class_gt?: string
  class_gte?: string
  class_contains?: string
  class_not_contains?: string
  class_starts_with?: string
  class_not_starts_with?: string
  class_ends_with?: string
  class_not_ends_with?: string
  consumables?: string
  consumables_not?: string
  consumables_in?: string[]
  consumables_not_in?: string[]
  consumables_lt?: string
  consumables_lte?: string
  consumables_gt?: string
  consumables_gte?: string
  consumables_contains?: string
  consumables_not_contains?: string
  consumables_starts_with?: string
  consumables_not_starts_with?: string
  consumables_ends_with?: string
  consumables_not_ends_with?: string
  costInCredits?: number
  costInCredits_not?: number
  costInCredits_in?: number[]
  costInCredits_not_in?: number[]
  costInCredits_lt?: number
  costInCredits_lte?: number
  costInCredits_gt?: number
  costInCredits_gte?: number
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  crew?: number
  crew_not?: number
  crew_in?: number[]
  crew_not_in?: number[]
  crew_lt?: number
  crew_lte?: number
  crew_gt?: number
  crew_gte?: number
  hyperdriveRating?: number
  hyperdriveRating_not?: number
  hyperdriveRating_in?: number[]
  hyperdriveRating_not_in?: number[]
  hyperdriveRating_lt?: number
  hyperdriveRating_lte?: number
  hyperdriveRating_gt?: number
  hyperdriveRating_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  length?: number
  length_not?: number
  length_in?: number[]
  length_not_in?: number[]
  length_lt?: number
  length_lte?: number
  length_gt?: number
  length_gte?: number
  maxAtmospheringSpeed?: number
  maxAtmospheringSpeed_not?: number
  maxAtmospheringSpeed_in?: number[]
  maxAtmospheringSpeed_not_in?: number[]
  maxAtmospheringSpeed_lt?: number
  maxAtmospheringSpeed_lte?: number
  maxAtmospheringSpeed_gt?: number
  maxAtmospheringSpeed_gte?: number
  mglt?: number
  mglt_not?: number
  mglt_in?: number[]
  mglt_not_in?: number[]
  mglt_lt?: number
  mglt_lte?: number
  mglt_gt?: number
  mglt_gte?: number
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  passengers?: number
  passengers_not?: number
  passengers_in?: number[]
  passengers_not_in?: number[]
  passengers_lt?: number
  passengers_lte?: number
  passengers_gt?: number
  passengers_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  pilots_every?: PersonFilter
  pilots_some?: PersonFilter
  pilots_none?: PersonFilter
}
export type VehicleFilter = {
  AND?: VehicleFilter[]
  OR?: VehicleFilter[]
  cargoCapacity?: number
  cargoCapacity_not?: number
  cargoCapacity_in?: number[]
  cargoCapacity_not_in?: number[]
  cargoCapacity_lt?: number
  cargoCapacity_lte?: number
  cargoCapacity_gt?: number
  cargoCapacity_gte?: number
  class?: string
  class_not?: string
  class_in?: string[]
  class_not_in?: string[]
  class_lt?: string
  class_lte?: string
  class_gt?: string
  class_gte?: string
  class_contains?: string
  class_not_contains?: string
  class_starts_with?: string
  class_not_starts_with?: string
  class_ends_with?: string
  class_not_ends_with?: string
  consumables?: string
  consumables_not?: string
  consumables_in?: string[]
  consumables_not_in?: string[]
  consumables_lt?: string
  consumables_lte?: string
  consumables_gt?: string
  consumables_gte?: string
  consumables_contains?: string
  consumables_not_contains?: string
  consumables_starts_with?: string
  consumables_not_starts_with?: string
  consumables_ends_with?: string
  consumables_not_ends_with?: string
  costInCredits?: number
  costInCredits_not?: number
  costInCredits_in?: number[]
  costInCredits_not_in?: number[]
  costInCredits_lt?: number
  costInCredits_lte?: number
  costInCredits_gt?: number
  costInCredits_gte?: number
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  crew?: number
  crew_not?: number
  crew_in?: number[]
  crew_not_in?: number[]
  crew_lt?: number
  crew_lte?: number
  crew_gt?: number
  crew_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  length?: number
  length_not?: number
  length_in?: number[]
  length_not_in?: number[]
  length_lt?: number
  length_lte?: number
  length_gt?: number
  length_gte?: number
  maxAtmospheringSpeed?: number
  maxAtmospheringSpeed_not?: number
  maxAtmospheringSpeed_in?: number[]
  maxAtmospheringSpeed_not_in?: number[]
  maxAtmospheringSpeed_lt?: number
  maxAtmospheringSpeed_lte?: number
  maxAtmospheringSpeed_gt?: number
  maxAtmospheringSpeed_gte?: number
  model?: string
  model_not?: string
  model_in?: string[]
  model_not_in?: string[]
  model_lt?: string
  model_lte?: string
  model_gt?: string
  model_gte?: string
  model_contains?: string
  model_not_contains?: string
  model_starts_with?: string
  model_not_starts_with?: string
  model_ends_with?: string
  model_not_ends_with?: string
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  passengers?: number
  passengers_not?: number
  passengers_in?: number[]
  passengers_not_in?: number[]
  passengers_lt?: number
  passengers_lte?: number
  passengers_gt?: number
  passengers_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  pilots_every?: PersonFilter
  pilots_some?: PersonFilter
  pilots_none?: PersonFilter
}
export type FilmcharactersPerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type PersonhomeworldPlanet = {
  climate?: string[]
  diameter?: number
  gravity?: string
  isPublished?: boolean
  name: string
  orbitalPeriod?: number
  population?: number
  rotationPeriod?: number
  surfaceWater?: number
  terrain?: string[]
  filmsIds?: string[]
  films?: PlanetfilmsFilm[]
  residentsIds?: string[]
  residents?: PlanetresidentsPerson[]
}
export type PlanetfilmsFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type FilmplanetsPlanet = {
  climate?: string[]
  diameter?: number
  gravity?: string
  isPublished?: boolean
  name: string
  orbitalPeriod?: number
  population?: number
  rotationPeriod?: number
  surfaceWater?: number
  terrain?: string[]
  filmsIds?: string[]
  films?: PlanetfilmsFilm[]
  residentsIds?: string[]
  residents?: PlanetresidentsPerson[]
}
export type PlanetresidentsPerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type PersonfilmsFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type FilmspeciesSpecies = {
  averageHeight?: number
  averageLifespan?: number
  classification?: string
  designation?: string
  eyeColor?: SpeciesEyeColor[]
  hairColor?: SpeciesHairColor[]
  isPublished?: boolean
  language?: string
  name: string
  skinColor?: SpeciesSkinColor[]
  filmsIds?: string[]
  films?: SpeciesfilmsFilm[]
  peopleIds?: string[]
  people?: SpeciespeoplePerson[]
}
export type SpeciesfilmsFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type FilmstarshipsStarship = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  hyperdriveRating?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  mglt?: number
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: StarshipfilmsFilm[]
  pilotsIds?: string[]
  pilots?: StarshippilotsPerson[]
}
export type StarshipfilmsFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type FilmvehiclesVehicle = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  model?: string
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: VehiclefilmsFilm[]
  pilotsIds?: string[]
  pilots?: VehiclepilotsPerson[]
}
export type VehiclefilmsFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type VehiclepilotsPerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type PersonspeciesSpecies = {
  averageHeight?: number
  averageLifespan?: number
  classification?: string
  designation?: string
  eyeColor?: SpeciesEyeColor[]
  hairColor?: SpeciesHairColor[]
  isPublished?: boolean
  language?: string
  name: string
  skinColor?: SpeciesSkinColor[]
  filmsIds?: string[]
  films?: SpeciesfilmsFilm[]
  peopleIds?: string[]
  people?: SpeciespeoplePerson[]
}
export type SpeciespeoplePerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type PersonstarshipsStarship = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  hyperdriveRating?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  mglt?: number
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: StarshipfilmsFilm[]
  pilotsIds?: string[]
  pilots?: StarshippilotsPerson[]
}
export type StarshippilotsPerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type PersonvehiclesVehicle = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  model?: string
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: VehiclefilmsFilm[]
  pilotsIds?: string[]
  pilots?: VehiclepilotsPerson[]
}
export type UpdateAsset = {
  fileName?: string
  handle?: string
  height?: number
  id: string
  mimeType?: string
  size?: number
  url?: string
  width?: number
}
export type CreateAsset = {
  fileName: string
  handle: string
  height?: number
  mimeType?: string
  size: number
  url: string
  width?: number
}
export type UpdateFilm = {
  director?: string
  episodeId?: number
  id: string
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title?: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type CreateFilm = {
  director?: string
  episodeId: number
  isPublished?: boolean
  openingCrawl?: string
  producers?: string[]
  releaseDate?: any
  title: string
  charactersIds?: string[]
  characters?: FilmcharactersPerson[]
  planetsIds?: string[]
  planets?: FilmplanetsPlanet[]
  speciesIds?: string[]
  species?: FilmspeciesSpecies[]
  starshipsIds?: string[]
  starships?: FilmstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: FilmvehiclesVehicle[]
}
export type UpdatePerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  id: string
  isPublished?: boolean
  mass?: number
  name?: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type CreatePerson = {
  birthYear?: string
  eyeColor?: PersonEyeColor[]
  gender?: PersonGender
  hairColor?: PersonHairColor[]
  height?: number
  isPublished?: boolean
  mass?: number
  name: string
  skinColor?: PersonSkinColor[]
  homeworldId?: string
  homeworld?: PersonhomeworldPlanet
  filmsIds?: string[]
  films?: PersonfilmsFilm[]
  speciesIds?: string[]
  species?: PersonspeciesSpecies[]
  starshipsIds?: string[]
  starships?: PersonstarshipsStarship[]
  vehiclesIds?: string[]
  vehicles?: PersonvehiclesVehicle[]
}
export type UpdatePlanet = {
  climate?: string[]
  diameter?: number
  gravity?: string
  id: string
  isPublished?: boolean
  name?: string
  orbitalPeriod?: number
  population?: number
  rotationPeriod?: number
  surfaceWater?: number
  terrain?: string[]
  filmsIds?: string[]
  films?: PlanetfilmsFilm[]
  residentsIds?: string[]
  residents?: PlanetresidentsPerson[]
}
export type CreatePlanet = {
  climate?: string[]
  diameter?: number
  gravity?: string
  isPublished?: boolean
  name: string
  orbitalPeriod?: number
  population?: number
  rotationPeriod?: number
  surfaceWater?: number
  terrain?: string[]
  filmsIds?: string[]
  films?: PlanetfilmsFilm[]
  residentsIds?: string[]
  residents?: PlanetresidentsPerson[]
}
export type UpdateSpecies = {
  averageHeight?: number
  averageLifespan?: number
  classification?: string
  designation?: string
  eyeColor?: SpeciesEyeColor[]
  hairColor?: SpeciesHairColor[]
  id: string
  isPublished?: boolean
  language?: string
  name?: string
  skinColor?: SpeciesSkinColor[]
  filmsIds?: string[]
  films?: SpeciesfilmsFilm[]
  peopleIds?: string[]
  people?: SpeciespeoplePerson[]
}
export type CreateSpecies = {
  averageHeight?: number
  averageLifespan?: number
  classification?: string
  designation?: string
  eyeColor?: SpeciesEyeColor[]
  hairColor?: SpeciesHairColor[]
  isPublished?: boolean
  language?: string
  name: string
  skinColor?: SpeciesSkinColor[]
  filmsIds?: string[]
  films?: SpeciesfilmsFilm[]
  peopleIds?: string[]
  people?: SpeciespeoplePerson[]
}
export type UpdateStarship = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  hyperdriveRating?: number
  id: string
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  mglt?: number
  name?: string
  passengers?: number
  filmsIds?: string[]
  films?: StarshipfilmsFilm[]
  pilotsIds?: string[]
  pilots?: StarshippilotsPerson[]
}
export type CreateStarship = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  hyperdriveRating?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  mglt?: number
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: StarshipfilmsFilm[]
  pilotsIds?: string[]
  pilots?: StarshippilotsPerson[]
}
export type UpdateVehicle = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  id: string
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  model?: string
  name?: string
  passengers?: number
  filmsIds?: string[]
  films?: VehiclefilmsFilm[]
  pilotsIds?: string[]
  pilots?: VehiclepilotsPerson[]
}
export type CreateVehicle = {
  cargoCapacity?: number
  class?: string
  consumables?: string
  costInCredits?: number
  crew?: number
  isPublished?: boolean
  length?: number
  manufacturer?: string[]
  maxAtmospheringSpeed?: number
  model?: string
  name: string
  passengers?: number
  filmsIds?: string[]
  films?: VehiclefilmsFilm[]
  pilotsIds?: string[]
  pilots?: VehiclepilotsPerson[]
}
export type InvokeFunctionInput = {
  name: string
  input: string
  clientMutationId?: string
}
export type AssetSubscriptionFilter = {
  AND?: AssetSubscriptionFilter[]
  OR?: AssetSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: AssetSubscriptionFilterNode
}
export type AssetSubscriptionFilterNode = {
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  fileName?: string
  fileName_not?: string
  fileName_in?: string[]
  fileName_not_in?: string[]
  fileName_lt?: string
  fileName_lte?: string
  fileName_gt?: string
  fileName_gte?: string
  fileName_contains?: string
  fileName_not_contains?: string
  fileName_starts_with?: string
  fileName_not_starts_with?: string
  fileName_ends_with?: string
  fileName_not_ends_with?: string
  handle?: string
  handle_not?: string
  handle_in?: string[]
  handle_not_in?: string[]
  handle_lt?: string
  handle_lte?: string
  handle_gt?: string
  handle_gte?: string
  handle_contains?: string
  handle_not_contains?: string
  handle_starts_with?: string
  handle_not_starts_with?: string
  handle_ends_with?: string
  handle_not_ends_with?: string
  height?: number
  height_not?: number
  height_in?: number[]
  height_not_in?: number[]
  height_lt?: number
  height_lte?: number
  height_gt?: number
  height_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  mimeType?: string
  mimeType_not?: string
  mimeType_in?: string[]
  mimeType_not_in?: string[]
  mimeType_lt?: string
  mimeType_lte?: string
  mimeType_gt?: string
  mimeType_gte?: string
  mimeType_contains?: string
  mimeType_not_contains?: string
  mimeType_starts_with?: string
  mimeType_not_starts_with?: string
  mimeType_ends_with?: string
  mimeType_not_ends_with?: string
  size?: number
  size_not?: number
  size_in?: number[]
  size_not_in?: number[]
  size_lt?: number
  size_lte?: number
  size_gt?: number
  size_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  url?: string
  url_not?: string
  url_in?: string[]
  url_not_in?: string[]
  url_lt?: string
  url_lte?: string
  url_gt?: string
  url_gte?: string
  url_contains?: string
  url_not_contains?: string
  url_starts_with?: string
  url_not_starts_with?: string
  url_ends_with?: string
  url_not_ends_with?: string
  width?: number
  width_not?: number
  width_in?: number[]
  width_not_in?: number[]
  width_lt?: number
  width_lte?: number
  width_gt?: number
  width_gte?: number
}
export type FilmSubscriptionFilter = {
  AND?: FilmSubscriptionFilter[]
  OR?: FilmSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: FilmSubscriptionFilterNode
}
export type FilmSubscriptionFilterNode = {
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  director?: string
  director_not?: string
  director_in?: string[]
  director_not_in?: string[]
  director_lt?: string
  director_lte?: string
  director_gt?: string
  director_gte?: string
  director_contains?: string
  director_not_contains?: string
  director_starts_with?: string
  director_not_starts_with?: string
  director_ends_with?: string
  director_not_ends_with?: string
  episodeId?: number
  episodeId_not?: number
  episodeId_in?: number[]
  episodeId_not_in?: number[]
  episodeId_lt?: number
  episodeId_lte?: number
  episodeId_gt?: number
  episodeId_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  openingCrawl?: string
  openingCrawl_not?: string
  openingCrawl_in?: string[]
  openingCrawl_not_in?: string[]
  openingCrawl_lt?: string
  openingCrawl_lte?: string
  openingCrawl_gt?: string
  openingCrawl_gte?: string
  openingCrawl_contains?: string
  openingCrawl_not_contains?: string
  openingCrawl_starts_with?: string
  openingCrawl_not_starts_with?: string
  openingCrawl_ends_with?: string
  openingCrawl_not_ends_with?: string
  releaseDate?: any
  releaseDate_not?: any
  releaseDate_in?: any[]
  releaseDate_not_in?: any[]
  releaseDate_lt?: any
  releaseDate_lte?: any
  releaseDate_gt?: any
  releaseDate_gte?: any
  title?: string
  title_not?: string
  title_in?: string[]
  title_not_in?: string[]
  title_lt?: string
  title_lte?: string
  title_gt?: string
  title_gte?: string
  title_contains?: string
  title_not_contains?: string
  title_starts_with?: string
  title_not_starts_with?: string
  title_ends_with?: string
  title_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  characters_every?: PersonFilter
  characters_some?: PersonFilter
  characters_none?: PersonFilter
  planets_every?: PlanetFilter
  planets_some?: PlanetFilter
  planets_none?: PlanetFilter
  species_every?: SpeciesFilter
  species_some?: SpeciesFilter
  species_none?: SpeciesFilter
  starships_every?: StarshipFilter
  starships_some?: StarshipFilter
  starships_none?: StarshipFilter
  vehicles_every?: VehicleFilter
  vehicles_some?: VehicleFilter
  vehicles_none?: VehicleFilter
}
export type PersonSubscriptionFilter = {
  AND?: PersonSubscriptionFilter[]
  OR?: PersonSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PersonSubscriptionFilterNode
}
export type PersonSubscriptionFilterNode = {
  birthYear?: string
  birthYear_not?: string
  birthYear_in?: string[]
  birthYear_not_in?: string[]
  birthYear_lt?: string
  birthYear_lte?: string
  birthYear_gt?: string
  birthYear_gte?: string
  birthYear_contains?: string
  birthYear_not_contains?: string
  birthYear_starts_with?: string
  birthYear_not_starts_with?: string
  birthYear_ends_with?: string
  birthYear_not_ends_with?: string
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  gender?: PersonGender
  gender_not?: PersonGender
  gender_in?: PersonGender[]
  gender_not_in?: PersonGender[]
  height?: number
  height_not?: number
  height_in?: number[]
  height_not_in?: number[]
  height_lt?: number
  height_lte?: number
  height_gt?: number
  height_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  mass?: number
  mass_not?: number
  mass_in?: number[]
  mass_not_in?: number[]
  mass_lt?: number
  mass_lte?: number
  mass_gt?: number
  mass_gte?: number
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  homeworld?: PlanetFilter
  species_every?: SpeciesFilter
  species_some?: SpeciesFilter
  species_none?: SpeciesFilter
  starships_every?: StarshipFilter
  starships_some?: StarshipFilter
  starships_none?: StarshipFilter
  vehicles_every?: VehicleFilter
  vehicles_some?: VehicleFilter
  vehicles_none?: VehicleFilter
}
export type PlanetSubscriptionFilter = {
  AND?: PlanetSubscriptionFilter[]
  OR?: PlanetSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PlanetSubscriptionFilterNode
}
export type PlanetSubscriptionFilterNode = {
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  diameter?: number
  diameter_not?: number
  diameter_in?: number[]
  diameter_not_in?: number[]
  diameter_lt?: number
  diameter_lte?: number
  diameter_gt?: number
  diameter_gte?: number
  gravity?: string
  gravity_not?: string
  gravity_in?: string[]
  gravity_not_in?: string[]
  gravity_lt?: string
  gravity_lte?: string
  gravity_gt?: string
  gravity_gte?: string
  gravity_contains?: string
  gravity_not_contains?: string
  gravity_starts_with?: string
  gravity_not_starts_with?: string
  gravity_ends_with?: string
  gravity_not_ends_with?: string
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  orbitalPeriod?: number
  orbitalPeriod_not?: number
  orbitalPeriod_in?: number[]
  orbitalPeriod_not_in?: number[]
  orbitalPeriod_lt?: number
  orbitalPeriod_lte?: number
  orbitalPeriod_gt?: number
  orbitalPeriod_gte?: number
  population?: number
  population_not?: number
  population_in?: number[]
  population_not_in?: number[]
  population_lt?: number
  population_lte?: number
  population_gt?: number
  population_gte?: number
  rotationPeriod?: number
  rotationPeriod_not?: number
  rotationPeriod_in?: number[]
  rotationPeriod_not_in?: number[]
  rotationPeriod_lt?: number
  rotationPeriod_lte?: number
  rotationPeriod_gt?: number
  rotationPeriod_gte?: number
  surfaceWater?: number
  surfaceWater_not?: number
  surfaceWater_in?: number[]
  surfaceWater_not_in?: number[]
  surfaceWater_lt?: number
  surfaceWater_lte?: number
  surfaceWater_gt?: number
  surfaceWater_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  residents_every?: PersonFilter
  residents_some?: PersonFilter
  residents_none?: PersonFilter
}
export type SpeciesSubscriptionFilter = {
  AND?: SpeciesSubscriptionFilter[]
  OR?: SpeciesSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: SpeciesSubscriptionFilterNode
}
export type SpeciesSubscriptionFilterNode = {
  averageHeight?: number
  averageHeight_not?: number
  averageHeight_in?: number[]
  averageHeight_not_in?: number[]
  averageHeight_lt?: number
  averageHeight_lte?: number
  averageHeight_gt?: number
  averageHeight_gte?: number
  averageLifespan?: number
  averageLifespan_not?: number
  averageLifespan_in?: number[]
  averageLifespan_not_in?: number[]
  averageLifespan_lt?: number
  averageLifespan_lte?: number
  averageLifespan_gt?: number
  averageLifespan_gte?: number
  classification?: string
  classification_not?: string
  classification_in?: string[]
  classification_not_in?: string[]
  classification_lt?: string
  classification_lte?: string
  classification_gt?: string
  classification_gte?: string
  classification_contains?: string
  classification_not_contains?: string
  classification_starts_with?: string
  classification_not_starts_with?: string
  classification_ends_with?: string
  classification_not_ends_with?: string
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  designation?: string
  designation_not?: string
  designation_in?: string[]
  designation_not_in?: string[]
  designation_lt?: string
  designation_lte?: string
  designation_gt?: string
  designation_gte?: string
  designation_contains?: string
  designation_not_contains?: string
  designation_starts_with?: string
  designation_not_starts_with?: string
  designation_ends_with?: string
  designation_not_ends_with?: string
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  language?: string
  language_not?: string
  language_in?: string[]
  language_not_in?: string[]
  language_lt?: string
  language_lte?: string
  language_gt?: string
  language_gte?: string
  language_contains?: string
  language_not_contains?: string
  language_starts_with?: string
  language_not_starts_with?: string
  language_ends_with?: string
  language_not_ends_with?: string
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  people_every?: PersonFilter
  people_some?: PersonFilter
  people_none?: PersonFilter
}
export type StarshipSubscriptionFilter = {
  AND?: StarshipSubscriptionFilter[]
  OR?: StarshipSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: StarshipSubscriptionFilterNode
}
export type StarshipSubscriptionFilterNode = {
  cargoCapacity?: number
  cargoCapacity_not?: number
  cargoCapacity_in?: number[]
  cargoCapacity_not_in?: number[]
  cargoCapacity_lt?: number
  cargoCapacity_lte?: number
  cargoCapacity_gt?: number
  cargoCapacity_gte?: number
  class?: string
  class_not?: string
  class_in?: string[]
  class_not_in?: string[]
  class_lt?: string
  class_lte?: string
  class_gt?: string
  class_gte?: string
  class_contains?: string
  class_not_contains?: string
  class_starts_with?: string
  class_not_starts_with?: string
  class_ends_with?: string
  class_not_ends_with?: string
  consumables?: string
  consumables_not?: string
  consumables_in?: string[]
  consumables_not_in?: string[]
  consumables_lt?: string
  consumables_lte?: string
  consumables_gt?: string
  consumables_gte?: string
  consumables_contains?: string
  consumables_not_contains?: string
  consumables_starts_with?: string
  consumables_not_starts_with?: string
  consumables_ends_with?: string
  consumables_not_ends_with?: string
  costInCredits?: number
  costInCredits_not?: number
  costInCredits_in?: number[]
  costInCredits_not_in?: number[]
  costInCredits_lt?: number
  costInCredits_lte?: number
  costInCredits_gt?: number
  costInCredits_gte?: number
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  crew?: number
  crew_not?: number
  crew_in?: number[]
  crew_not_in?: number[]
  crew_lt?: number
  crew_lte?: number
  crew_gt?: number
  crew_gte?: number
  hyperdriveRating?: number
  hyperdriveRating_not?: number
  hyperdriveRating_in?: number[]
  hyperdriveRating_not_in?: number[]
  hyperdriveRating_lt?: number
  hyperdriveRating_lte?: number
  hyperdriveRating_gt?: number
  hyperdriveRating_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  length?: number
  length_not?: number
  length_in?: number[]
  length_not_in?: number[]
  length_lt?: number
  length_lte?: number
  length_gt?: number
  length_gte?: number
  maxAtmospheringSpeed?: number
  maxAtmospheringSpeed_not?: number
  maxAtmospheringSpeed_in?: number[]
  maxAtmospheringSpeed_not_in?: number[]
  maxAtmospheringSpeed_lt?: number
  maxAtmospheringSpeed_lte?: number
  maxAtmospheringSpeed_gt?: number
  maxAtmospheringSpeed_gte?: number
  mglt?: number
  mglt_not?: number
  mglt_in?: number[]
  mglt_not_in?: number[]
  mglt_lt?: number
  mglt_lte?: number
  mglt_gt?: number
  mglt_gte?: number
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  passengers?: number
  passengers_not?: number
  passengers_in?: number[]
  passengers_not_in?: number[]
  passengers_lt?: number
  passengers_lte?: number
  passengers_gt?: number
  passengers_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  pilots_every?: PersonFilter
  pilots_some?: PersonFilter
  pilots_none?: PersonFilter
}
export type VehicleSubscriptionFilter = {
  AND?: VehicleSubscriptionFilter[]
  OR?: VehicleSubscriptionFilter[]
  mutation_in?: ModelMutationType[]
  updatedFields_contains?: string
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: VehicleSubscriptionFilterNode
}
export type VehicleSubscriptionFilterNode = {
  cargoCapacity?: number
  cargoCapacity_not?: number
  cargoCapacity_in?: number[]
  cargoCapacity_not_in?: number[]
  cargoCapacity_lt?: number
  cargoCapacity_lte?: number
  cargoCapacity_gt?: number
  cargoCapacity_gte?: number
  class?: string
  class_not?: string
  class_in?: string[]
  class_not_in?: string[]
  class_lt?: string
  class_lte?: string
  class_gt?: string
  class_gte?: string
  class_contains?: string
  class_not_contains?: string
  class_starts_with?: string
  class_not_starts_with?: string
  class_ends_with?: string
  class_not_ends_with?: string
  consumables?: string
  consumables_not?: string
  consumables_in?: string[]
  consumables_not_in?: string[]
  consumables_lt?: string
  consumables_lte?: string
  consumables_gt?: string
  consumables_gte?: string
  consumables_contains?: string
  consumables_not_contains?: string
  consumables_starts_with?: string
  consumables_not_starts_with?: string
  consumables_ends_with?: string
  consumables_not_ends_with?: string
  costInCredits?: number
  costInCredits_not?: number
  costInCredits_in?: number[]
  costInCredits_not_in?: number[]
  costInCredits_lt?: number
  costInCredits_lte?: number
  costInCredits_gt?: number
  costInCredits_gte?: number
  createdAt?: any
  createdAt_not?: any
  createdAt_in?: any[]
  createdAt_not_in?: any[]
  createdAt_lt?: any
  createdAt_lte?: any
  createdAt_gt?: any
  createdAt_gte?: any
  crew?: number
  crew_not?: number
  crew_in?: number[]
  crew_not_in?: number[]
  crew_lt?: number
  crew_lte?: number
  crew_gt?: number
  crew_gte?: number
  id?: string
  id_not?: string
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string
  id_lte?: string
  id_gt?: string
  id_gte?: string
  id_contains?: string
  id_not_contains?: string
  id_starts_with?: string
  id_not_starts_with?: string
  id_ends_with?: string
  id_not_ends_with?: string
  isPublished?: boolean
  isPublished_not?: boolean
  length?: number
  length_not?: number
  length_in?: number[]
  length_not_in?: number[]
  length_lt?: number
  length_lte?: number
  length_gt?: number
  length_gte?: number
  maxAtmospheringSpeed?: number
  maxAtmospheringSpeed_not?: number
  maxAtmospheringSpeed_in?: number[]
  maxAtmospheringSpeed_not_in?: number[]
  maxAtmospheringSpeed_lt?: number
  maxAtmospheringSpeed_lte?: number
  maxAtmospheringSpeed_gt?: number
  maxAtmospheringSpeed_gte?: number
  model?: string
  model_not?: string
  model_in?: string[]
  model_not_in?: string[]
  model_lt?: string
  model_lte?: string
  model_gt?: string
  model_gte?: string
  model_contains?: string
  model_not_contains?: string
  model_starts_with?: string
  model_not_starts_with?: string
  model_ends_with?: string
  model_not_ends_with?: string
  name?: string
  name_not?: string
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string
  name_lte?: string
  name_gt?: string
  name_gte?: string
  name_contains?: string
  name_not_contains?: string
  name_starts_with?: string
  name_not_starts_with?: string
  name_ends_with?: string
  name_not_ends_with?: string
  passengers?: number
  passengers_not?: number
  passengers_in?: number[]
  passengers_not_in?: number[]
  passengers_lt?: number
  passengers_lte?: number
  passengers_gt?: number
  passengers_gte?: number
  updatedAt?: any
  updatedAt_not?: any
  updatedAt_in?: any[]
  updatedAt_not_in?: any[]
  updatedAt_lt?: any
  updatedAt_lte?: any
  updatedAt_gt?: any
  updatedAt_gte?: any
  films_every?: FilmFilter
  films_some?: FilmFilter
  films_none?: FilmFilter
  pilots_every?: PersonFilter
  pilots_some?: PersonFilter
  pilots_none?: PersonFilter
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  assets: ObservableMap<string, AssetModelType>,
  films: ObservableMap<string, FilmModelType>,
  people: ObservableMap<string, PersonModelType>,
  planets: ObservableMap<string, PlanetModelType>,
  species: ObservableMap<string, SpeciesModelType>,
  starships: ObservableMap<string, StarshipModelType>,
  vehicles: ObservableMap<string, VehicleModelType>,
  assetPreviousValues: ObservableMap<string, AssetPreviousValuesModelType>,
  filmPreviousValues: ObservableMap<string, FilmPreviousValuesModelType>,
  personPreviousValues: ObservableMap<string, PersonPreviousValuesModelType>,
  planetPreviousValues: ObservableMap<string, PlanetPreviousValuesModelType>,
  speciesPreviousValues: ObservableMap<string, SpeciesPreviousValuesModelType>,
  starshipPreviousValues: ObservableMap<string, StarshipPreviousValuesModelType>,
  vehiclePreviousValues: ObservableMap<string, VehiclePreviousValuesModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryAllAssets="queryAllAssets",
queryAllFilms="queryAllFilms",
queryAllPersons="queryAllPersons",
queryAllPlanets="queryAllPlanets",
queryAllSpecies="queryAllSpecies",
queryAllStarships="queryAllStarships",
queryAllVehicles="queryAllVehicles",
query_allAssetsMeta="query_allAssetsMeta",
query_allFilmsMeta="query_allFilmsMeta",
query_allPersonsMeta="query_allPersonsMeta",
query_allPlanetsMeta="query_allPlanetsMeta",
query_allSpeciesMeta="query_allSpeciesMeta",
query_allStarshipsMeta="query_allStarshipsMeta",
query_allVehiclesMeta="query_allVehiclesMeta",
queryAsset="queryAsset",
queryFilm="queryFilm",
queryPerson="queryPerson",
queryPlanet="queryPlanet",
querySpecies="querySpecies",
queryStarship="queryStarship",
queryVehicle="queryVehicle",
queryNode="queryNode"
}
export enum RootStoreBaseMutations {
mutateCreateAsset="mutateCreateAsset",
mutateCreateFilm="mutateCreateFilm",
mutateCreatePerson="mutateCreatePerson",
mutateCreatePlanet="mutateCreatePlanet",
mutateCreateSpecies="mutateCreateSpecies",
mutateCreateStarship="mutateCreateStarship",
mutateCreateVehicle="mutateCreateVehicle",
mutateUpdateAsset="mutateUpdateAsset",
mutateUpdateFilm="mutateUpdateFilm",
mutateUpdatePerson="mutateUpdatePerson",
mutateUpdatePlanet="mutateUpdatePlanet",
mutateUpdateSpecies="mutateUpdateSpecies",
mutateUpdateStarship="mutateUpdateStarship",
mutateUpdateVehicle="mutateUpdateVehicle",
mutateUpdateOrCreateAsset="mutateUpdateOrCreateAsset",
mutateUpdateOrCreateFilm="mutateUpdateOrCreateFilm",
mutateUpdateOrCreatePerson="mutateUpdateOrCreatePerson",
mutateUpdateOrCreatePlanet="mutateUpdateOrCreatePlanet",
mutateUpdateOrCreateSpecies="mutateUpdateOrCreateSpecies",
mutateUpdateOrCreateStarship="mutateUpdateOrCreateStarship",
mutateUpdateOrCreateVehicle="mutateUpdateOrCreateVehicle",
mutateDeleteAsset="mutateDeleteAsset",
mutateDeleteFilm="mutateDeleteFilm",
mutateDeletePerson="mutateDeletePerson",
mutateDeletePlanet="mutateDeletePlanet",
mutateDeleteSpecies="mutateDeleteSpecies",
mutateDeleteStarship="mutateDeleteStarship",
mutateDeleteVehicle="mutateDeleteVehicle",
mutateAddToFilmPlanets="mutateAddToFilmPlanets",
mutateAddToFilmSpecies="mutateAddToFilmSpecies",
mutateAddToFilmStarships="mutateAddToFilmStarships",
mutateAddToFilmVehicles="mutateAddToFilmVehicles",
mutateAddToPeopleFilm="mutateAddToPeopleFilm",
mutateAddToPeoplePlanet="mutateAddToPeoplePlanet",
mutateAddToPeopleSpecies="mutateAddToPeopleSpecies",
mutateAddToPeopleStarships="mutateAddToPeopleStarships",
mutateAddToPeopleVehicles="mutateAddToPeopleVehicles",
mutateRemoveFromFilmPlanets="mutateRemoveFromFilmPlanets",
mutateRemoveFromFilmSpecies="mutateRemoveFromFilmSpecies",
mutateRemoveFromFilmStarships="mutateRemoveFromFilmStarships",
mutateRemoveFromFilmVehicles="mutateRemoveFromFilmVehicles",
mutateRemoveFromPeopleFilm="mutateRemoveFromPeopleFilm",
mutateRemoveFromPeoplePlanet="mutateRemoveFromPeoplePlanet",
mutateRemoveFromPeopleSpecies="mutateRemoveFromPeopleSpecies",
mutateRemoveFromPeopleStarships="mutateRemoveFromPeopleStarships",
mutateRemoveFromPeopleVehicles="mutateRemoveFromPeopleVehicles",
mutateInvokeFunction="mutateInvokeFunction"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Asset', () => AssetModel], ['Film', () => FilmModel], ['Person', () => PersonModel], ['Planet', () => PlanetModel], ['_QueryMeta', () => QueryMetaModel], ['Species', () => SpeciesModel], ['Starship', () => StarshipModel], ['Vehicle', () => VehicleModel], ['AddToFilmPlanetsPayload', () => AddToFilmPlanetsPayloadModel], ['AddToFilmSpeciesPayload', () => AddToFilmSpeciesPayloadModel], ['AddToFilmStarshipsPayload', () => AddToFilmStarshipsPayloadModel], ['AddToFilmVehiclesPayload', () => AddToFilmVehiclesPayloadModel], ['AddToPeopleFilmPayload', () => AddToPeopleFilmPayloadModel], ['AddToPeoplePlanetPayload', () => AddToPeoplePlanetPayloadModel], ['AddToPeopleSpeciesPayload', () => AddToPeopleSpeciesPayloadModel], ['AddToPeopleStarshipsPayload', () => AddToPeopleStarshipsPayloadModel], ['AddToPeopleVehiclesPayload', () => AddToPeopleVehiclesPayloadModel], ['RemoveFromFilmPlanetsPayload', () => RemoveFromFilmPlanetsPayloadModel], ['RemoveFromFilmSpeciesPayload', () => RemoveFromFilmSpeciesPayloadModel], ['RemoveFromFilmStarshipsPayload', () => RemoveFromFilmStarshipsPayloadModel], ['RemoveFromFilmVehiclesPayload', () => RemoveFromFilmVehiclesPayloadModel], ['RemoveFromPeopleFilmPayload', () => RemoveFromPeopleFilmPayloadModel], ['RemoveFromPeoplePlanetPayload', () => RemoveFromPeoplePlanetPayloadModel], ['RemoveFromPeopleSpeciesPayload', () => RemoveFromPeopleSpeciesPayloadModel], ['RemoveFromPeopleStarshipsPayload', () => RemoveFromPeopleStarshipsPayloadModel], ['RemoveFromPeopleVehiclesPayload', () => RemoveFromPeopleVehiclesPayloadModel], ['InvokeFunctionPayload', () => InvokeFunctionPayloadModel], ['AssetSubscriptionPayload', () => AssetSubscriptionPayloadModel], ['AssetPreviousValues', () => AssetPreviousValuesModel], ['FilmSubscriptionPayload', () => FilmSubscriptionPayloadModel], ['FilmPreviousValues', () => FilmPreviousValuesModel], ['PersonSubscriptionPayload', () => PersonSubscriptionPayloadModel], ['PersonPreviousValues', () => PersonPreviousValuesModel], ['PlanetSubscriptionPayload', () => PlanetSubscriptionPayloadModel], ['PlanetPreviousValues', () => PlanetPreviousValuesModel], ['SpeciesSubscriptionPayload', () => SpeciesSubscriptionPayloadModel], ['SpeciesPreviousValues', () => SpeciesPreviousValuesModel], ['StarshipSubscriptionPayload', () => StarshipSubscriptionPayloadModel], ['StarshipPreviousValues', () => StarshipPreviousValuesModel], ['VehicleSubscriptionPayload', () => VehicleSubscriptionPayloadModel], ['VehiclePreviousValues', () => VehiclePreviousValuesModel]], ['Asset', 'Film', 'Person', 'Planet', 'Species', 'Starship', 'Vehicle', 'AssetPreviousValues', 'FilmPreviousValues', 'PersonPreviousValues', 'PlanetPreviousValues', 'SpeciesPreviousValues', 'StarshipPreviousValues', 'VehiclePreviousValues'], "js"))
  .props({
    assets: types.optional(types.map(types.late((): any => AssetModel)), {}),
    films: types.optional(types.map(types.late((): any => FilmModel)), {}),
    people: types.optional(types.map(types.late((): any => PersonModel)), {}),
    planets: types.optional(types.map(types.late((): any => PlanetModel)), {}),
    species: types.optional(types.map(types.late((): any => SpeciesModel)), {}),
    starships: types.optional(types.map(types.late((): any => StarshipModel)), {}),
    vehicles: types.optional(types.map(types.late((): any => VehicleModel)), {}),
    assetPreviousValues: types.optional(types.map(types.late((): any => AssetPreviousValuesModel)), {}),
    filmPreviousValues: types.optional(types.map(types.late((): any => FilmPreviousValuesModel)), {}),
    personPreviousValues: types.optional(types.map(types.late((): any => PersonPreviousValuesModel)), {}),
    planetPreviousValues: types.optional(types.map(types.late((): any => PlanetPreviousValuesModel)), {}),
    speciesPreviousValues: types.optional(types.map(types.late((): any => SpeciesPreviousValuesModel)), {}),
    starshipPreviousValues: types.optional(types.map(types.late((): any => StarshipPreviousValuesModel)), {}),
    vehiclePreviousValues: types.optional(types.map(types.late((): any => VehiclePreviousValuesModel)), {})
  })
  .actions(self => ({
    queryAllAssets(variables: { filter?: AssetFilter, orderBy?: AssetOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allAssets: AssetModelType[]}>(`query allAssets($filter: AssetFilter, $orderBy: AssetOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allAssets(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllFilms(variables: { filter?: FilmFilter, orderBy?: FilmOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allFilms: FilmModelType[]}>(`query allFilms($filter: FilmFilter, $orderBy: FilmOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allFilms(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPersons(variables: { filter?: PersonFilter, orderBy?: PersonOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPersons: PersonModelType[]}>(`query allPersons($filter: PersonFilter, $orderBy: PersonOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allPersons(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPlanets(variables: { filter?: PlanetFilter, orderBy?: PlanetOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPlanets: PlanetModelType[]}>(`query allPlanets($filter: PlanetFilter, $orderBy: PlanetOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allPlanets(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllSpecies(variables: { filter?: SpeciesFilter, orderBy?: SpeciesOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSpecies: SpeciesModelType[]}>(`query allSpecies($filter: SpeciesFilter, $orderBy: SpeciesOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allSpecies(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllStarships(variables: { filter?: StarshipFilter, orderBy?: StarshipOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allStarships: StarshipModelType[]}>(`query allStarships($filter: StarshipFilter, $orderBy: StarshipOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allStarships(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllVehicles(variables: { filter?: VehicleFilter, orderBy?: VehicleOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allVehicles: VehicleModelType[]}>(`query allVehicles($filter: VehicleFilter, $orderBy: VehicleOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { allVehicles(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allAssetsMeta(variables: { filter?: AssetFilter, orderBy?: AssetOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allAssetsMeta: QueryMetaModelType}>(`query _allAssetsMeta($filter: AssetFilter, $orderBy: AssetOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allAssetsMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allFilmsMeta(variables: { filter?: FilmFilter, orderBy?: FilmOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allFilmsMeta: QueryMetaModelType}>(`query _allFilmsMeta($filter: FilmFilter, $orderBy: FilmOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allFilmsMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allPersonsMeta(variables: { filter?: PersonFilter, orderBy?: PersonOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allPersonsMeta: QueryMetaModelType}>(`query _allPersonsMeta($filter: PersonFilter, $orderBy: PersonOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allPersonsMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allPlanetsMeta(variables: { filter?: PlanetFilter, orderBy?: PlanetOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allPlanetsMeta: QueryMetaModelType}>(`query _allPlanetsMeta($filter: PlanetFilter, $orderBy: PlanetOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allPlanetsMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allSpeciesMeta(variables: { filter?: SpeciesFilter, orderBy?: SpeciesOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allSpeciesMeta: QueryMetaModelType}>(`query _allSpeciesMeta($filter: SpeciesFilter, $orderBy: SpeciesOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allSpeciesMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allStarshipsMeta(variables: { filter?: StarshipFilter, orderBy?: StarshipOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allStarshipsMeta: QueryMetaModelType}>(`query _allStarshipsMeta($filter: StarshipFilter, $orderBy: StarshipOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allStarshipsMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    query_allVehiclesMeta(variables: { filter?: VehicleFilter, orderBy?: VehicleOrderBy, skip?: number, after?: string, before?: string, first?: number, last?: number }, resultSelector: string | ((qb: QueryMetaModelSelector) => QueryMetaModelSelector) = queryMetaModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allVehiclesMeta: QueryMetaModelType}>(`query _allVehiclesMeta($filter: VehicleFilter, $orderBy: VehicleOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) { _allVehiclesMeta(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new QueryMetaModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAsset(variables: { id?: string }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Asset: AssetModelType}>(`query Asset($id: ID) { Asset(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryFilm(variables: { id?: string, title?: string }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Film: FilmModelType}>(`query Film($id: ID, $title: String) { Film(id: $id, title: $title) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPerson(variables: { id?: string, name?: string }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Person: PersonModelType}>(`query Person($id: ID, $name: String) { Person(id: $id, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPlanet(variables: { id?: string, name?: string }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Planet: PlanetModelType}>(`query Planet($id: ID, $name: String) { Planet(id: $id, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySpecies(variables: { id?: string, name?: string }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Species: SpeciesModelType}>(`query Species($id: ID, $name: String) { Species(id: $id, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryStarship(variables: { id?: string, name?: string }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Starship: StarshipModelType}>(`query Starship($id: ID, $name: String) { Starship(id: $id, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryVehicle(variables: { id?: string, name?: string }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ Vehicle: VehicleModelType}>(`query Vehicle($id: ID, $name: String) { Vehicle(id: $id, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryNode(variables: { id: string }, resultSelector: string | ((qb: NodeModelSelector) => NodeModelSelector) = nodeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ node: NodeModelType}>(`query node($id: ID!) { node(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new NodeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateAsset(variables: { fileName: string, handle: string, height?: number, mimeType?: string, size: number, url: string, width?: number }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAsset: AssetModelType}>(`mutation createAsset($fileName: String!, $handle: String!, $height: Float, $mimeType: String, $size: Float!, $url: String!, $width: Float) { createAsset(fileName: $fileName, handle: $handle, height: $height, mimeType: $mimeType, size: $size, url: $url, width: $width) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateFilm(variables: { director?: string, episodeId: number, isPublished?: boolean, openingCrawl?: string, producers?: string[], releaseDate?: any, title: string, charactersIds?: string[], characters?: FilmcharactersPerson[], planetsIds?: string[], planets?: FilmplanetsPlanet[], speciesIds?: string[], species?: FilmspeciesSpecies[], starshipsIds?: string[], starships?: FilmstarshipsStarship[], vehiclesIds?: string[], vehicles?: FilmvehiclesVehicle[] }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createFilm: FilmModelType}>(`mutation createFilm($director: String, $episodeId: Int!, $isPublished: Boolean, $openingCrawl: String, $producers: [String!], $releaseDate: DateTime, $title: String!, $charactersIds: [ID!], $characters: [FilmcharactersPerson!], $planetsIds: [ID!], $planets: [FilmplanetsPlanet!], $speciesIds: [ID!], $species: [FilmspeciesSpecies!], $starshipsIds: [ID!], $starships: [FilmstarshipsStarship!], $vehiclesIds: [ID!], $vehicles: [FilmvehiclesVehicle!]) { createFilm(director: $director, episodeId: $episodeId, isPublished: $isPublished, openingCrawl: $openingCrawl, producers: $producers, releaseDate: $releaseDate, title: $title, charactersIds: $charactersIds, characters: $characters, planetsIds: $planetsIds, planets: $planets, speciesIds: $speciesIds, species: $species, starshipsIds: $starshipsIds, starships: $starships, vehiclesIds: $vehiclesIds, vehicles: $vehicles) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePerson(variables: { birthYear?: string, eyeColor?: PersonEyeColor[], gender?: PersonGender, hairColor?: PersonHairColor[], height?: number, isPublished?: boolean, mass?: number, name: string, skinColor?: PersonSkinColor[], homeworldId?: string, homeworld?: PersonhomeworldPlanet, filmsIds?: string[], films?: PersonfilmsFilm[], speciesIds?: string[], species?: PersonspeciesSpecies[], starshipsIds?: string[], starships?: PersonstarshipsStarship[], vehiclesIds?: string[], vehicles?: PersonvehiclesVehicle[] }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPerson: PersonModelType}>(`mutation createPerson($birthYear: String, $eyeColor: [PERSON_EYE_COLOR!], $gender: PERSON_GENDER, $hairColor: [PERSON_HAIR_COLOR!], $height: Int, $isPublished: Boolean, $mass: Float, $name: String!, $skinColor: [PERSON_SKIN_COLOR!], $homeworldId: ID, $homeworld: PersonhomeworldPlanet, $filmsIds: [ID!], $films: [PersonfilmsFilm!], $speciesIds: [ID!], $species: [PersonspeciesSpecies!], $starshipsIds: [ID!], $starships: [PersonstarshipsStarship!], $vehiclesIds: [ID!], $vehicles: [PersonvehiclesVehicle!]) { createPerson(birthYear: $birthYear, eyeColor: $eyeColor, gender: $gender, hairColor: $hairColor, height: $height, isPublished: $isPublished, mass: $mass, name: $name, skinColor: $skinColor, homeworldId: $homeworldId, homeworld: $homeworld, filmsIds: $filmsIds, films: $films, speciesIds: $speciesIds, species: $species, starshipsIds: $starshipsIds, starships: $starships, vehiclesIds: $vehiclesIds, vehicles: $vehicles) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePlanet(variables: { climate?: string[], diameter?: number, gravity?: string, isPublished?: boolean, name: string, orbitalPeriod?: number, population?: number, rotationPeriod?: number, surfaceWater?: number, terrain?: string[], filmsIds?: string[], films?: PlanetfilmsFilm[], residentsIds?: string[], residents?: PlanetresidentsPerson[] }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPlanet: PlanetModelType}>(`mutation createPlanet($climate: [String!], $diameter: Int, $gravity: String, $isPublished: Boolean, $name: String!, $orbitalPeriod: Int, $population: Float, $rotationPeriod: Int, $surfaceWater: Float, $terrain: [String!], $filmsIds: [ID!], $films: [PlanetfilmsFilm!], $residentsIds: [ID!], $residents: [PlanetresidentsPerson!]) { createPlanet(climate: $climate, diameter: $diameter, gravity: $gravity, isPublished: $isPublished, name: $name, orbitalPeriod: $orbitalPeriod, population: $population, rotationPeriod: $rotationPeriod, surfaceWater: $surfaceWater, terrain: $terrain, filmsIds: $filmsIds, films: $films, residentsIds: $residentsIds, residents: $residents) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateSpecies(variables: { averageHeight?: number, averageLifespan?: number, classification?: string, designation?: string, eyeColor?: SpeciesEyeColor[], hairColor?: SpeciesHairColor[], isPublished?: boolean, language?: string, name: string, skinColor?: SpeciesSkinColor[], filmsIds?: string[], films?: SpeciesfilmsFilm[], peopleIds?: string[], people?: SpeciespeoplePerson[] }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createSpecies: SpeciesModelType}>(`mutation createSpecies($averageHeight: Int, $averageLifespan: Int, $classification: String, $designation: String, $eyeColor: [SPECIES_EYE_COLOR!], $hairColor: [SPECIES_HAIR_COLOR!], $isPublished: Boolean, $language: String, $name: String!, $skinColor: [SPECIES_SKIN_COLOR!], $filmsIds: [ID!], $films: [SpeciesfilmsFilm!], $peopleIds: [ID!], $people: [SpeciespeoplePerson!]) { createSpecies(averageHeight: $averageHeight, averageLifespan: $averageLifespan, classification: $classification, designation: $designation, eyeColor: $eyeColor, hairColor: $hairColor, isPublished: $isPublished, language: $language, name: $name, skinColor: $skinColor, filmsIds: $filmsIds, films: $films, peopleIds: $peopleIds, people: $people) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateStarship(variables: { cargoCapacity?: number, class?: string, consumables?: string, costInCredits?: number, crew?: number, hyperdriveRating?: number, isPublished?: boolean, length?: number, manufacturer?: string[], maxAtmospheringSpeed?: number, mglt?: number, name: string, passengers?: number, filmsIds?: string[], films?: StarshipfilmsFilm[], pilotsIds?: string[], pilots?: StarshippilotsPerson[] }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createStarship: StarshipModelType}>(`mutation createStarship($cargoCapacity: Float, $class: String, $consumables: String, $costInCredits: Float, $crew: Int, $hyperdriveRating: Float, $isPublished: Boolean, $length: Float, $manufacturer: [String!], $maxAtmospheringSpeed: Int, $mglt: Int, $name: String!, $passengers: Int, $filmsIds: [ID!], $films: [StarshipfilmsFilm!], $pilotsIds: [ID!], $pilots: [StarshippilotsPerson!]) { createStarship(cargoCapacity: $cargoCapacity, class: $class, consumables: $consumables, costInCredits: $costInCredits, crew: $crew, hyperdriveRating: $hyperdriveRating, isPublished: $isPublished, length: $length, manufacturer: $manufacturer, maxAtmospheringSpeed: $maxAtmospheringSpeed, mglt: $mglt, name: $name, passengers: $passengers, filmsIds: $filmsIds, films: $films, pilotsIds: $pilotsIds, pilots: $pilots) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateVehicle(variables: { cargoCapacity?: number, class?: string, consumables?: string, costInCredits?: number, crew?: number, isPublished?: boolean, length?: number, manufacturer?: string[], maxAtmospheringSpeed?: number, model?: string, name: string, passengers?: number, filmsIds?: string[], films?: VehiclefilmsFilm[], pilotsIds?: string[], pilots?: VehiclepilotsPerson[] }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createVehicle: VehicleModelType}>(`mutation createVehicle($cargoCapacity: Int, $class: String, $consumables: String, $costInCredits: Int, $crew: Int, $isPublished: Boolean, $length: Float, $manufacturer: [String!], $maxAtmospheringSpeed: Int, $model: String, $name: String!, $passengers: Int, $filmsIds: [ID!], $films: [VehiclefilmsFilm!], $pilotsIds: [ID!], $pilots: [VehiclepilotsPerson!]) { createVehicle(cargoCapacity: $cargoCapacity, class: $class, consumables: $consumables, costInCredits: $costInCredits, crew: $crew, isPublished: $isPublished, length: $length, manufacturer: $manufacturer, maxAtmospheringSpeed: $maxAtmospheringSpeed, model: $model, name: $name, passengers: $passengers, filmsIds: $filmsIds, films: $films, pilotsIds: $pilotsIds, pilots: $pilots) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAsset(variables: { fileName?: string, handle?: string, height?: number, id: string, mimeType?: string, size?: number, url?: string, width?: number }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAsset: AssetModelType}>(`mutation updateAsset($fileName: String, $handle: String, $height: Float, $id: ID!, $mimeType: String, $size: Float, $url: String, $width: Float) { updateAsset(fileName: $fileName, handle: $handle, height: $height, id: $id, mimeType: $mimeType, size: $size, url: $url, width: $width) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFilm(variables: { director?: string, episodeId?: number, id: string, isPublished?: boolean, openingCrawl?: string, producers?: string[], releaseDate?: any, title?: string, charactersIds?: string[], characters?: FilmcharactersPerson[], planetsIds?: string[], planets?: FilmplanetsPlanet[], speciesIds?: string[], species?: FilmspeciesSpecies[], starshipsIds?: string[], starships?: FilmstarshipsStarship[], vehiclesIds?: string[], vehicles?: FilmvehiclesVehicle[] }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFilm: FilmModelType}>(`mutation updateFilm($director: String, $episodeId: Int, $id: ID!, $isPublished: Boolean, $openingCrawl: String, $producers: [String!], $releaseDate: DateTime, $title: String, $charactersIds: [ID!], $characters: [FilmcharactersPerson!], $planetsIds: [ID!], $planets: [FilmplanetsPlanet!], $speciesIds: [ID!], $species: [FilmspeciesSpecies!], $starshipsIds: [ID!], $starships: [FilmstarshipsStarship!], $vehiclesIds: [ID!], $vehicles: [FilmvehiclesVehicle!]) { updateFilm(director: $director, episodeId: $episodeId, id: $id, isPublished: $isPublished, openingCrawl: $openingCrawl, producers: $producers, releaseDate: $releaseDate, title: $title, charactersIds: $charactersIds, characters: $characters, planetsIds: $planetsIds, planets: $planets, speciesIds: $speciesIds, species: $species, starshipsIds: $starshipsIds, starships: $starships, vehiclesIds: $vehiclesIds, vehicles: $vehicles) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePerson(variables: { birthYear?: string, eyeColor?: PersonEyeColor[], gender?: PersonGender, hairColor?: PersonHairColor[], height?: number, id: string, isPublished?: boolean, mass?: number, name?: string, skinColor?: PersonSkinColor[], homeworldId?: string, homeworld?: PersonhomeworldPlanet, filmsIds?: string[], films?: PersonfilmsFilm[], speciesIds?: string[], species?: PersonspeciesSpecies[], starshipsIds?: string[], starships?: PersonstarshipsStarship[], vehiclesIds?: string[], vehicles?: PersonvehiclesVehicle[] }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePerson: PersonModelType}>(`mutation updatePerson($birthYear: String, $eyeColor: [PERSON_EYE_COLOR!], $gender: PERSON_GENDER, $hairColor: [PERSON_HAIR_COLOR!], $height: Int, $id: ID!, $isPublished: Boolean, $mass: Float, $name: String, $skinColor: [PERSON_SKIN_COLOR!], $homeworldId: ID, $homeworld: PersonhomeworldPlanet, $filmsIds: [ID!], $films: [PersonfilmsFilm!], $speciesIds: [ID!], $species: [PersonspeciesSpecies!], $starshipsIds: [ID!], $starships: [PersonstarshipsStarship!], $vehiclesIds: [ID!], $vehicles: [PersonvehiclesVehicle!]) { updatePerson(birthYear: $birthYear, eyeColor: $eyeColor, gender: $gender, hairColor: $hairColor, height: $height, id: $id, isPublished: $isPublished, mass: $mass, name: $name, skinColor: $skinColor, homeworldId: $homeworldId, homeworld: $homeworld, filmsIds: $filmsIds, films: $films, speciesIds: $speciesIds, species: $species, starshipsIds: $starshipsIds, starships: $starships, vehiclesIds: $vehiclesIds, vehicles: $vehicles) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePlanet(variables: { climate?: string[], diameter?: number, gravity?: string, id: string, isPublished?: boolean, name?: string, orbitalPeriod?: number, population?: number, rotationPeriod?: number, surfaceWater?: number, terrain?: string[], filmsIds?: string[], films?: PlanetfilmsFilm[], residentsIds?: string[], residents?: PlanetresidentsPerson[] }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePlanet: PlanetModelType}>(`mutation updatePlanet($climate: [String!], $diameter: Int, $gravity: String, $id: ID!, $isPublished: Boolean, $name: String, $orbitalPeriod: Int, $population: Float, $rotationPeriod: Int, $surfaceWater: Float, $terrain: [String!], $filmsIds: [ID!], $films: [PlanetfilmsFilm!], $residentsIds: [ID!], $residents: [PlanetresidentsPerson!]) { updatePlanet(climate: $climate, diameter: $diameter, gravity: $gravity, id: $id, isPublished: $isPublished, name: $name, orbitalPeriod: $orbitalPeriod, population: $population, rotationPeriod: $rotationPeriod, surfaceWater: $surfaceWater, terrain: $terrain, filmsIds: $filmsIds, films: $films, residentsIds: $residentsIds, residents: $residents) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSpecies(variables: { averageHeight?: number, averageLifespan?: number, classification?: string, designation?: string, eyeColor?: SpeciesEyeColor[], hairColor?: SpeciesHairColor[], id: string, isPublished?: boolean, language?: string, name?: string, skinColor?: SpeciesSkinColor[], filmsIds?: string[], films?: SpeciesfilmsFilm[], peopleIds?: string[], people?: SpeciespeoplePerson[] }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSpecies: SpeciesModelType}>(`mutation updateSpecies($averageHeight: Int, $averageLifespan: Int, $classification: String, $designation: String, $eyeColor: [SPECIES_EYE_COLOR!], $hairColor: [SPECIES_HAIR_COLOR!], $id: ID!, $isPublished: Boolean, $language: String, $name: String, $skinColor: [SPECIES_SKIN_COLOR!], $filmsIds: [ID!], $films: [SpeciesfilmsFilm!], $peopleIds: [ID!], $people: [SpeciespeoplePerson!]) { updateSpecies(averageHeight: $averageHeight, averageLifespan: $averageLifespan, classification: $classification, designation: $designation, eyeColor: $eyeColor, hairColor: $hairColor, id: $id, isPublished: $isPublished, language: $language, name: $name, skinColor: $skinColor, filmsIds: $filmsIds, films: $films, peopleIds: $peopleIds, people: $people) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateStarship(variables: { cargoCapacity?: number, class?: string, consumables?: string, costInCredits?: number, crew?: number, hyperdriveRating?: number, id: string, isPublished?: boolean, length?: number, manufacturer?: string[], maxAtmospheringSpeed?: number, mglt?: number, name?: string, passengers?: number, filmsIds?: string[], films?: StarshipfilmsFilm[], pilotsIds?: string[], pilots?: StarshippilotsPerson[] }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateStarship: StarshipModelType}>(`mutation updateStarship($cargoCapacity: Float, $class: String, $consumables: String, $costInCredits: Float, $crew: Int, $hyperdriveRating: Float, $id: ID!, $isPublished: Boolean, $length: Float, $manufacturer: [String!], $maxAtmospheringSpeed: Int, $mglt: Int, $name: String, $passengers: Int, $filmsIds: [ID!], $films: [StarshipfilmsFilm!], $pilotsIds: [ID!], $pilots: [StarshippilotsPerson!]) { updateStarship(cargoCapacity: $cargoCapacity, class: $class, consumables: $consumables, costInCredits: $costInCredits, crew: $crew, hyperdriveRating: $hyperdriveRating, id: $id, isPublished: $isPublished, length: $length, manufacturer: $manufacturer, maxAtmospheringSpeed: $maxAtmospheringSpeed, mglt: $mglt, name: $name, passengers: $passengers, filmsIds: $filmsIds, films: $films, pilotsIds: $pilotsIds, pilots: $pilots) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateVehicle(variables: { cargoCapacity?: number, class?: string, consumables?: string, costInCredits?: number, crew?: number, id: string, isPublished?: boolean, length?: number, manufacturer?: string[], maxAtmospheringSpeed?: number, model?: string, name?: string, passengers?: number, filmsIds?: string[], films?: VehiclefilmsFilm[], pilotsIds?: string[], pilots?: VehiclepilotsPerson[] }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateVehicle: VehicleModelType}>(`mutation updateVehicle($cargoCapacity: Int, $class: String, $consumables: String, $costInCredits: Int, $crew: Int, $id: ID!, $isPublished: Boolean, $length: Float, $manufacturer: [String!], $maxAtmospheringSpeed: Int, $model: String, $name: String, $passengers: Int, $filmsIds: [ID!], $films: [VehiclefilmsFilm!], $pilotsIds: [ID!], $pilots: [VehiclepilotsPerson!]) { updateVehicle(cargoCapacity: $cargoCapacity, class: $class, consumables: $consumables, costInCredits: $costInCredits, crew: $crew, id: $id, isPublished: $isPublished, length: $length, manufacturer: $manufacturer, maxAtmospheringSpeed: $maxAtmospheringSpeed, model: $model, name: $name, passengers: $passengers, filmsIds: $filmsIds, films: $films, pilotsIds: $pilotsIds, pilots: $pilots) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreateAsset(variables: { update: UpdateAsset, create: CreateAsset }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreateAsset: AssetModelType}>(`mutation updateOrCreateAsset($update: UpdateAsset!, $create: CreateAsset!) { updateOrCreateAsset(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreateFilm(variables: { update: UpdateFilm, create: CreateFilm }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreateFilm: FilmModelType}>(`mutation updateOrCreateFilm($update: UpdateFilm!, $create: CreateFilm!) { updateOrCreateFilm(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreatePerson(variables: { update: UpdatePerson, create: CreatePerson }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreatePerson: PersonModelType}>(`mutation updateOrCreatePerson($update: UpdatePerson!, $create: CreatePerson!) { updateOrCreatePerson(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreatePlanet(variables: { update: UpdatePlanet, create: CreatePlanet }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreatePlanet: PlanetModelType}>(`mutation updateOrCreatePlanet($update: UpdatePlanet!, $create: CreatePlanet!) { updateOrCreatePlanet(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreateSpecies(variables: { update: UpdateSpecies, create: CreateSpecies }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreateSpecies: SpeciesModelType}>(`mutation updateOrCreateSpecies($update: UpdateSpecies!, $create: CreateSpecies!) { updateOrCreateSpecies(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreateStarship(variables: { update: UpdateStarship, create: CreateStarship }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreateStarship: StarshipModelType}>(`mutation updateOrCreateStarship($update: UpdateStarship!, $create: CreateStarship!) { updateOrCreateStarship(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrCreateVehicle(variables: { update: UpdateVehicle, create: CreateVehicle }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrCreateVehicle: VehicleModelType}>(`mutation updateOrCreateVehicle($update: UpdateVehicle!, $create: CreateVehicle!) { updateOrCreateVehicle(update: $update, create: $create) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAsset(variables: { id: string }, resultSelector: string | ((qb: AssetModelSelector) => AssetModelSelector) = assetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAsset: AssetModelType}>(`mutation deleteAsset($id: ID!) { deleteAsset(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFilm(variables: { id: string }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFilm: FilmModelType}>(`mutation deleteFilm($id: ID!) { deleteFilm(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePerson(variables: { id: string }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePerson: PersonModelType}>(`mutation deletePerson($id: ID!) { deletePerson(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePlanet(variables: { id: string }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePlanet: PlanetModelType}>(`mutation deletePlanet($id: ID!) { deletePlanet(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteSpecies(variables: { id: string }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteSpecies: SpeciesModelType}>(`mutation deleteSpecies($id: ID!) { deleteSpecies(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteStarship(variables: { id: string }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteStarship: StarshipModelType}>(`mutation deleteStarship($id: ID!) { deleteStarship(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteVehicle(variables: { id: string }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteVehicle: VehicleModelType}>(`mutation deleteVehicle($id: ID!) { deleteVehicle(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToFilmPlanets(variables: { planetsPlanetId: string, filmsFilmId: string }, resultSelector: string | ((qb: AddToFilmPlanetsPayloadModelSelector) => AddToFilmPlanetsPayloadModelSelector) = addToFilmPlanetsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToFilmPlanets: AddToFilmPlanetsPayloadModelType}>(`mutation addToFilmPlanets($planetsPlanetId: ID!, $filmsFilmId: ID!) { addToFilmPlanets(planetsPlanetId: $planetsPlanetId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToFilmPlanetsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToFilmSpecies(variables: { speciesSpeciesId: string, filmsFilmId: string }, resultSelector: string | ((qb: AddToFilmSpeciesPayloadModelSelector) => AddToFilmSpeciesPayloadModelSelector) = addToFilmSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToFilmSpecies: AddToFilmSpeciesPayloadModelType}>(`mutation addToFilmSpecies($speciesSpeciesId: ID!, $filmsFilmId: ID!) { addToFilmSpecies(speciesSpeciesId: $speciesSpeciesId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToFilmSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToFilmStarships(variables: { starshipsStarshipId: string, filmsFilmId: string }, resultSelector: string | ((qb: AddToFilmStarshipsPayloadModelSelector) => AddToFilmStarshipsPayloadModelSelector) = addToFilmStarshipsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToFilmStarships: AddToFilmStarshipsPayloadModelType}>(`mutation addToFilmStarships($starshipsStarshipId: ID!, $filmsFilmId: ID!) { addToFilmStarships(starshipsStarshipId: $starshipsStarshipId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToFilmStarshipsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToFilmVehicles(variables: { vehiclesVehicleId: string, filmsFilmId: string }, resultSelector: string | ((qb: AddToFilmVehiclesPayloadModelSelector) => AddToFilmVehiclesPayloadModelSelector) = addToFilmVehiclesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToFilmVehicles: AddToFilmVehiclesPayloadModelType}>(`mutation addToFilmVehicles($vehiclesVehicleId: ID!, $filmsFilmId: ID!) { addToFilmVehicles(vehiclesVehicleId: $vehiclesVehicleId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToFilmVehiclesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToPeopleFilm(variables: { filmsFilmId: string, charactersPersonId: string }, resultSelector: string | ((qb: AddToPeopleFilmPayloadModelSelector) => AddToPeopleFilmPayloadModelSelector) = addToPeopleFilmPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToPeopleFilm: AddToPeopleFilmPayloadModelType}>(`mutation addToPeopleFilm($filmsFilmId: ID!, $charactersPersonId: ID!) { addToPeopleFilm(filmsFilmId: $filmsFilmId, charactersPersonId: $charactersPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToPeopleFilmPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToPeoplePlanet(variables: { homeworldPlanetId: string, residentsPersonId: string }, resultSelector: string | ((qb: AddToPeoplePlanetPayloadModelSelector) => AddToPeoplePlanetPayloadModelSelector) = addToPeoplePlanetPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToPeoplePlanet: AddToPeoplePlanetPayloadModelType}>(`mutation addToPeoplePlanet($homeworldPlanetId: ID!, $residentsPersonId: ID!) { addToPeoplePlanet(homeworldPlanetId: $homeworldPlanetId, residentsPersonId: $residentsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToPeoplePlanetPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToPeopleSpecies(variables: { speciesSpeciesId: string, peoplePersonId: string }, resultSelector: string | ((qb: AddToPeopleSpeciesPayloadModelSelector) => AddToPeopleSpeciesPayloadModelSelector) = addToPeopleSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToPeopleSpecies: AddToPeopleSpeciesPayloadModelType}>(`mutation addToPeopleSpecies($speciesSpeciesId: ID!, $peoplePersonId: ID!) { addToPeopleSpecies(speciesSpeciesId: $speciesSpeciesId, peoplePersonId: $peoplePersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToPeopleSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToPeopleStarships(variables: { starshipsStarshipId: string, pilotsPersonId: string }, resultSelector: string | ((qb: AddToPeopleStarshipsPayloadModelSelector) => AddToPeopleStarshipsPayloadModelSelector) = addToPeopleStarshipsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToPeopleStarships: AddToPeopleStarshipsPayloadModelType}>(`mutation addToPeopleStarships($starshipsStarshipId: ID!, $pilotsPersonId: ID!) { addToPeopleStarships(starshipsStarshipId: $starshipsStarshipId, pilotsPersonId: $pilotsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToPeopleStarshipsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddToPeopleVehicles(variables: { vehiclesVehicleId: string, pilotsPersonId: string }, resultSelector: string | ((qb: AddToPeopleVehiclesPayloadModelSelector) => AddToPeopleVehiclesPayloadModelSelector) = addToPeopleVehiclesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addToPeopleVehicles: AddToPeopleVehiclesPayloadModelType}>(`mutation addToPeopleVehicles($vehiclesVehicleId: ID!, $pilotsPersonId: ID!) { addToPeopleVehicles(vehiclesVehicleId: $vehiclesVehicleId, pilotsPersonId: $pilotsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new AddToPeopleVehiclesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromFilmPlanets(variables: { planetsPlanetId: string, filmsFilmId: string }, resultSelector: string | ((qb: RemoveFromFilmPlanetsPayloadModelSelector) => RemoveFromFilmPlanetsPayloadModelSelector) = removeFromFilmPlanetsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromFilmPlanets: RemoveFromFilmPlanetsPayloadModelType}>(`mutation removeFromFilmPlanets($planetsPlanetId: ID!, $filmsFilmId: ID!) { removeFromFilmPlanets(planetsPlanetId: $planetsPlanetId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromFilmPlanetsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromFilmSpecies(variables: { speciesSpeciesId: string, filmsFilmId: string }, resultSelector: string | ((qb: RemoveFromFilmSpeciesPayloadModelSelector) => RemoveFromFilmSpeciesPayloadModelSelector) = removeFromFilmSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromFilmSpecies: RemoveFromFilmSpeciesPayloadModelType}>(`mutation removeFromFilmSpecies($speciesSpeciesId: ID!, $filmsFilmId: ID!) { removeFromFilmSpecies(speciesSpeciesId: $speciesSpeciesId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromFilmSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromFilmStarships(variables: { starshipsStarshipId: string, filmsFilmId: string }, resultSelector: string | ((qb: RemoveFromFilmStarshipsPayloadModelSelector) => RemoveFromFilmStarshipsPayloadModelSelector) = removeFromFilmStarshipsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromFilmStarships: RemoveFromFilmStarshipsPayloadModelType}>(`mutation removeFromFilmStarships($starshipsStarshipId: ID!, $filmsFilmId: ID!) { removeFromFilmStarships(starshipsStarshipId: $starshipsStarshipId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromFilmStarshipsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromFilmVehicles(variables: { vehiclesVehicleId: string, filmsFilmId: string }, resultSelector: string | ((qb: RemoveFromFilmVehiclesPayloadModelSelector) => RemoveFromFilmVehiclesPayloadModelSelector) = removeFromFilmVehiclesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromFilmVehicles: RemoveFromFilmVehiclesPayloadModelType}>(`mutation removeFromFilmVehicles($vehiclesVehicleId: ID!, $filmsFilmId: ID!) { removeFromFilmVehicles(vehiclesVehicleId: $vehiclesVehicleId, filmsFilmId: $filmsFilmId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromFilmVehiclesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromPeopleFilm(variables: { filmsFilmId: string, charactersPersonId: string }, resultSelector: string | ((qb: RemoveFromPeopleFilmPayloadModelSelector) => RemoveFromPeopleFilmPayloadModelSelector) = removeFromPeopleFilmPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromPeopleFilm: RemoveFromPeopleFilmPayloadModelType}>(`mutation removeFromPeopleFilm($filmsFilmId: ID!, $charactersPersonId: ID!) { removeFromPeopleFilm(filmsFilmId: $filmsFilmId, charactersPersonId: $charactersPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromPeopleFilmPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromPeoplePlanet(variables: { homeworldPlanetId: string, residentsPersonId: string }, resultSelector: string | ((qb: RemoveFromPeoplePlanetPayloadModelSelector) => RemoveFromPeoplePlanetPayloadModelSelector) = removeFromPeoplePlanetPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromPeoplePlanet: RemoveFromPeoplePlanetPayloadModelType}>(`mutation removeFromPeoplePlanet($homeworldPlanetId: ID!, $residentsPersonId: ID!) { removeFromPeoplePlanet(homeworldPlanetId: $homeworldPlanetId, residentsPersonId: $residentsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromPeoplePlanetPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromPeopleSpecies(variables: { speciesSpeciesId: string, peoplePersonId: string }, resultSelector: string | ((qb: RemoveFromPeopleSpeciesPayloadModelSelector) => RemoveFromPeopleSpeciesPayloadModelSelector) = removeFromPeopleSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromPeopleSpecies: RemoveFromPeopleSpeciesPayloadModelType}>(`mutation removeFromPeopleSpecies($speciesSpeciesId: ID!, $peoplePersonId: ID!) { removeFromPeopleSpecies(speciesSpeciesId: $speciesSpeciesId, peoplePersonId: $peoplePersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromPeopleSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromPeopleStarships(variables: { starshipsStarshipId: string, pilotsPersonId: string }, resultSelector: string | ((qb: RemoveFromPeopleStarshipsPayloadModelSelector) => RemoveFromPeopleStarshipsPayloadModelSelector) = removeFromPeopleStarshipsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromPeopleStarships: RemoveFromPeopleStarshipsPayloadModelType}>(`mutation removeFromPeopleStarships($starshipsStarshipId: ID!, $pilotsPersonId: ID!) { removeFromPeopleStarships(starshipsStarshipId: $starshipsStarshipId, pilotsPersonId: $pilotsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromPeopleStarshipsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFromPeopleVehicles(variables: { vehiclesVehicleId: string, pilotsPersonId: string }, resultSelector: string | ((qb: RemoveFromPeopleVehiclesPayloadModelSelector) => RemoveFromPeopleVehiclesPayloadModelSelector) = removeFromPeopleVehiclesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFromPeopleVehicles: RemoveFromPeopleVehiclesPayloadModelType}>(`mutation removeFromPeopleVehicles($vehiclesVehicleId: ID!, $pilotsPersonId: ID!) { removeFromPeopleVehicles(vehiclesVehicleId: $vehiclesVehicleId, pilotsPersonId: $pilotsPersonId) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveFromPeopleVehiclesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInvokeFunction(variables: { input: InvokeFunctionInput }, resultSelector: string | ((qb: InvokeFunctionPayloadModelSelector) => InvokeFunctionPayloadModelSelector) = invokeFunctionPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ invokeFunction: InvokeFunctionPayloadModelType}>(`mutation invokeFunction($input: InvokeFunctionInput!) { invokeFunction(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new InvokeFunctionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    subscribeAsset(variables: { filter?: AssetSubscriptionFilter }, resultSelector: string | ((qb: AssetSubscriptionPayloadModelSelector) => AssetSubscriptionPayloadModelSelector) = assetSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Asset: AssetSubscriptionPayloadModelType}>(`subscription Asset($filter: AssetSubscriptionFilter) { Asset(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AssetSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeFilm(variables: { filter?: FilmSubscriptionFilter }, resultSelector: string | ((qb: FilmSubscriptionPayloadModelSelector) => FilmSubscriptionPayloadModelSelector) = filmSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Film: FilmSubscriptionPayloadModelType}>(`subscription Film($filter: FilmSubscriptionFilter) { Film(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribePerson(variables: { filter?: PersonSubscriptionFilter }, resultSelector: string | ((qb: PersonSubscriptionPayloadModelSelector) => PersonSubscriptionPayloadModelSelector) = personSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Person: PersonSubscriptionPayloadModelType}>(`subscription Person($filter: PersonSubscriptionFilter) { Person(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribePlanet(variables: { filter?: PlanetSubscriptionFilter }, resultSelector: string | ((qb: PlanetSubscriptionPayloadModelSelector) => PlanetSubscriptionPayloadModelSelector) = planetSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Planet: PlanetSubscriptionPayloadModelType}>(`subscription Planet($filter: PlanetSubscriptionFilter) { Planet(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeSpecies(variables: { filter?: SpeciesSubscriptionFilter }, resultSelector: string | ((qb: SpeciesSubscriptionPayloadModelSelector) => SpeciesSubscriptionPayloadModelSelector) = speciesSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Species: SpeciesSubscriptionPayloadModelType}>(`subscription Species($filter: SpeciesSubscriptionFilter) { Species(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeStarship(variables: { filter?: StarshipSubscriptionFilter }, resultSelector: string | ((qb: StarshipSubscriptionPayloadModelSelector) => StarshipSubscriptionPayloadModelSelector) = starshipSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Starship: StarshipSubscriptionPayloadModelType}>(`subscription Starship($filter: StarshipSubscriptionFilter) { Starship(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeVehicle(variables: { filter?: VehicleSubscriptionFilter }, resultSelector: string | ((qb: VehicleSubscriptionPayloadModelSelector) => VehicleSubscriptionPayloadModelSelector) = vehicleSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ Vehicle: VehicleSubscriptionPayloadModelType}>(`subscription Vehicle($filter: VehicleSubscriptionFilter) { Vehicle(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
  })))
