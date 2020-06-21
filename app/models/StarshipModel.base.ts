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
  pilots: IObservableArray<PersonModelType>;
}

/**
 * StarshipBase
 * auto generated base class for the model StarshipModel.
 */
export const StarshipModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Starship')
  .props({
    __typename: types.optional(types.literal("Starship"), "Starship"),
    cargoCapacity: types.union(types.undefined, types.null, types.number),
    class: types.union(types.undefined, types.null, types.string),
    consumables: types.union(types.undefined, types.null, types.string),
    costInCredits: types.union(types.undefined, types.null, types.number),
    createdAt: types.union(types.undefined, types.frozen()),
    crew: types.union(types.undefined, types.null, types.integer),
    films: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => FilmModel)))),
    hyperdriveRating: types.union(types.undefined, types.null, types.number),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    length: types.union(types.undefined, types.null, types.number),
    manufacturer: types.union(types.undefined, types.null, types.array(types.string)),
    maxAtmospheringSpeed: types.union(types.undefined, types.null, types.integer),
    mglt: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    passengers: types.union(types.undefined, types.null, types.integer),
    pilots: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => PersonModel)))),
    updatedAt: types.union(types.undefined, types.frozen()),
    _filmsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _pilotsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class StarshipModelSelector extends QueryBuilder {
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
  films(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`films`, FilmModelSelector, builder) }
  pilots(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`pilots`, PersonModelSelector, builder) }
  _filmsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_filmsMeta`, QueryMetaModelSelector, builder) }
  _pilotsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_pilotsMeta`, QueryMetaModelSelector, builder) }
}
export function selectFromStarship() {
  return new StarshipModelSelector()
}

export const starshipModelPrimitives = selectFromStarship().cargoCapacity.class.consumables.costInCredits.createdAt.crew.hyperdriveRating.isPublished.length.manufacturer.maxAtmospheringSpeed.mglt.name.passengers.updatedAt
