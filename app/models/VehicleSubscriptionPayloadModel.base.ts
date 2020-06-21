/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelMutationTypeEnumType } from "./ModelMutationTypeEnum"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { VehiclePreviousValuesModel, VehiclePreviousValuesModelType } from "./VehiclePreviousValuesModel"
import { VehiclePreviousValuesModelSelector } from "./VehiclePreviousValuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: VehicleModelType;
  previousValues: VehiclePreviousValuesModelType;
}

/**
 * VehicleSubscriptionPayloadBase
 * auto generated base class for the model VehicleSubscriptionPayloadModel.
 */
export const VehicleSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('VehicleSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("VehicleSubscriptionPayload"), "VehicleSubscriptionPayload"),
    mutation: types.union(types.undefined, ModelMutationTypeEnumType),
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehicleModel))),
    updatedFields: types.union(types.undefined, types.null, types.array(types.string)),
    previousValues: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehiclePreviousValuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class VehicleSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  get updatedFields() { return this.__attr(`updatedFields`) }
  node(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`node`, VehicleModelSelector, builder) }
  previousValues(builder?: string | VehiclePreviousValuesModelSelector | ((selector: VehiclePreviousValuesModelSelector) => VehiclePreviousValuesModelSelector)) { return this.__child(`previousValues`, VehiclePreviousValuesModelSelector, builder) }
}
export function selectFromVehicleSubscriptionPayload() {
  return new VehicleSubscriptionPayloadModelSelector()
}

export const vehicleSubscriptionPayloadModelPrimitives = selectFromVehicleSubscriptionPayload().mutation.updatedFields
