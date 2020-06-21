/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pilotsPerson: PersonModelType;
  vehiclesVehicle: VehicleModelType;
}

/**
 * RemoveFromPeopleVehiclesPayloadBase
 * auto generated base class for the model RemoveFromPeopleVehiclesPayloadModel.
 */
export const RemoveFromPeopleVehiclesPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RemoveFromPeopleVehiclesPayload')
  .props({
    __typename: types.optional(types.literal("RemoveFromPeopleVehiclesPayload"), "RemoveFromPeopleVehiclesPayload"),
    pilotsPerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    vehiclesVehicle: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehicleModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RemoveFromPeopleVehiclesPayloadModelSelector extends QueryBuilder {
  pilotsPerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`pilotsPerson`, PersonModelSelector, builder) }
  vehiclesVehicle(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehiclesVehicle`, VehicleModelSelector, builder) }
}
export function selectFromRemoveFromPeopleVehiclesPayload() {
  return new RemoveFromPeopleVehiclesPayloadModelSelector()
}

export const removeFromPeopleVehiclesPayloadModelPrimitives = selectFromRemoveFromPeopleVehiclesPayload()
