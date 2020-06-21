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
import { SpeciesEyeColorEnumType } from "./SpeciesEyeColorEnum"
import { SpeciesHairColorEnumType } from "./SpeciesHairColorEnum"
import { SpeciesSkinColorEnumType } from "./SpeciesSkinColorEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  films: IObservableArray<FilmModelType>;
  people: IObservableArray<PersonModelType>;
}

/**
 * SpeciesBase
 * auto generated base class for the model SpeciesModel.
 */
export const SpeciesModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Species')
  .props({
    __typename: types.optional(types.literal("Species"), "Species"),
    averageHeight: types.union(types.undefined, types.null, types.integer),
    averageLifespan: types.union(types.undefined, types.null, types.integer),
    classification: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    designation: types.union(types.undefined, types.null, types.string),
    eyeColor: types.union(types.undefined, types.null, types.array(SpeciesEyeColorEnumType)),
    films: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => FilmModel)))),
    hairColor: types.union(types.undefined, types.null, types.array(SpeciesHairColorEnumType)),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    language: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.string),
    people: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => PersonModel)))),
    skinColor: types.union(types.undefined, types.null, types.array(SpeciesSkinColorEnumType)),
    updatedAt: types.union(types.undefined, types.frozen()),
    _filmsMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
    _peopleMeta: types.union(types.undefined, types.late((): any => QueryMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesModelSelector extends QueryBuilder {
  get averageHeight() { return this.__attr(`averageHeight`) }
  get averageLifespan() { return this.__attr(`averageLifespan`) }
  get classification() { return this.__attr(`classification`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get designation() { return this.__attr(`designation`) }
  get eyeColor() { return this.__attr(`eyeColor`) }
  get hairColor() { return this.__attr(`hairColor`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get language() { return this.__attr(`language`) }
  get name() { return this.__attr(`name`) }
  get skinColor() { return this.__attr(`skinColor`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  films(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`films`, FilmModelSelector, builder) }
  people(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`people`, PersonModelSelector, builder) }
  _filmsMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_filmsMeta`, QueryMetaModelSelector, builder) }
  _peopleMeta(builder?: string | QueryMetaModelSelector | ((selector: QueryMetaModelSelector) => QueryMetaModelSelector)) { return this.__child(`_peopleMeta`, QueryMetaModelSelector, builder) }
}
export function selectFromSpecies() {
  return new SpeciesModelSelector()
}

export const speciesModelPrimitives = selectFromSpecies().averageHeight.averageLifespan.classification.createdAt.designation.eyeColor.hairColor.isPublished.language.name.skinColor.updatedAt
