/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FilmPreviousValuesBase
 * auto generated base class for the model FilmPreviousValuesModel.
 */
export const FilmPreviousValuesModelBase = ModelBase
  .named('FilmPreviousValues')
  .props({
    __typename: types.optional(types.literal("FilmPreviousValues"), "FilmPreviousValues"),
    createdAt: types.union(types.undefined, types.frozen()),
    director: types.union(types.undefined, types.null, types.string),
    episodeId: types.union(types.undefined, types.integer),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    openingCrawl: types.union(types.undefined, types.null, types.string),
    producers: types.union(types.undefined, types.null, types.array(types.string)),
    releaseDate: types.union(types.undefined, types.null, types.frozen()),
    title: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FilmPreviousValuesModelSelector extends QueryBuilder {
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
}
export function selectFromFilmPreviousValues() {
  return new FilmPreviousValuesModelSelector()
}

export const filmPreviousValuesModelPrimitives = selectFromFilmPreviousValues().createdAt.director.episodeId.isPublished.openingCrawl.producers.releaseDate.title.updatedAt
