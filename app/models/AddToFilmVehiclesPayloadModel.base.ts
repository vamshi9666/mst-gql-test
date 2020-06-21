/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  filmsFilm: FilmModelType;
  vehiclesVehicle: VehicleModelType;
}

/**
 * AddToFilmVehiclesPayloadBase
 * auto generated base class for the model AddToFilmVehiclesPayloadModel.
 */
export const AddToFilmVehiclesPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToFilmVehiclesPayload')
  .props({
    __typename: types.optional(types.literal("AddToFilmVehiclesPayload"), "AddToFilmVehiclesPayload"),
    filmsFilm: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    vehiclesVehicle: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehicleModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToFilmVehiclesPayloadModelSelector extends QueryBuilder {
  filmsFilm(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`filmsFilm`, FilmModelSelector, builder) }
  vehiclesVehicle(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehiclesVehicle`, VehicleModelSelector, builder) }
}
export function selectFromAddToFilmVehiclesPayload() {
  return new AddToFilmVehiclesPayloadModelSelector()
}

export const addToFilmVehiclesPayloadModelPrimitives = selectFromAddToFilmVehiclesPayload()
