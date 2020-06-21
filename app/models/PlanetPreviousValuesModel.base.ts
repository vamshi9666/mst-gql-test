/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PlanetPreviousValuesBase
 * auto generated base class for the model PlanetPreviousValuesModel.
 */
export const PlanetPreviousValuesModelBase = ModelBase
  .named('PlanetPreviousValues')
  .props({
    __typename: types.optional(types.literal("PlanetPreviousValues"), "PlanetPreviousValues"),
    climate: types.union(types.undefined, types.null, types.array(types.string)),
    createdAt: types.union(types.undefined, types.frozen()),
    diameter: types.union(types.undefined, types.null, types.integer),
    gravity: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    orbitalPeriod: types.union(types.undefined, types.null, types.integer),
    population: types.union(types.undefined, types.null, types.number),
    rotationPeriod: types.union(types.undefined, types.null, types.integer),
    surfaceWater: types.union(types.undefined, types.null, types.number),
    terrain: types.union(types.undefined, types.null, types.array(types.string)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PlanetPreviousValuesModelSelector extends QueryBuilder {
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
}
export function selectFromPlanetPreviousValues() {
  return new PlanetPreviousValuesModelSelector()
}

export const planetPreviousValuesModelPrimitives = selectFromPlanetPreviousValues().climate.createdAt.diameter.gravity.isPublished.name.orbitalPeriod.population.rotationPeriod.surfaceWater.terrain.updatedAt
