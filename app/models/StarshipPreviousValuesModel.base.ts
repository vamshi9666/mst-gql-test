/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * StarshipPreviousValuesBase
 * auto generated base class for the model StarshipPreviousValuesModel.
 */
export const StarshipPreviousValuesModelBase = ModelBase
  .named('StarshipPreviousValues')
  .props({
    __typename: types.optional(types.literal("StarshipPreviousValues"), "StarshipPreviousValues"),
    cargoCapacity: types.union(types.undefined, types.null, types.number),
    class: types.union(types.undefined, types.null, types.string),
    consumables: types.union(types.undefined, types.null, types.string),
    costInCredits: types.union(types.undefined, types.null, types.number),
    createdAt: types.union(types.undefined, types.frozen()),
    crew: types.union(types.undefined, types.null, types.integer),
    hyperdriveRating: types.union(types.undefined, types.null, types.number),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    length: types.union(types.undefined, types.null, types.number),
    manufacturer: types.union(types.undefined, types.null, types.array(types.string)),
    maxAtmospheringSpeed: types.union(types.undefined, types.null, types.integer),
    mglt: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    passengers: types.union(types.undefined, types.null, types.integer),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class StarshipPreviousValuesModelSelector extends QueryBuilder {
  get cargoCapacity() { return this.__attr(`cargoCapacity`) }
  get class() { return this.__attr(`class`) }
  get consumables() { return this.__attr(`consumables`) }
  get costInCredits() { return this.__attr(`costInCredits`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get crew() { return this.__attr(`crew`) }
  get hyperdriveRating() { return this.__attr(`hyperdriveRating`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get length() { return this.__attr(`length`) }
  get manufacturer() { return this.__attr(`manufacturer`) }
  get maxAtmospheringSpeed() { return this.__attr(`maxAtmospheringSpeed`) }
  get mglt() { return this.__attr(`mglt`) }
  get name() { return this.__attr(`name`) }
  get passengers() { return this.__attr(`passengers`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromStarshipPreviousValues() {
  return new StarshipPreviousValuesModelSelector()
}

export const starshipPreviousValuesModelPrimitives = selectFromStarshipPreviousValues().cargoCapacity.class.consumables.costInCredits.createdAt.crew.hyperdriveRating.isPublished.length.manufacturer.maxAtmospheringSpeed.mglt.name.passengers.updatedAt
