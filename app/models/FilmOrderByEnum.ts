/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum FilmOrderBy {
  createdAt_ASC="createdAt_ASC",
createdAt_DESC="createdAt_DESC",
director_ASC="director_ASC",
director_DESC="director_DESC",
episodeId_ASC="episodeId_ASC",
episodeId_DESC="episodeId_DESC",
id_ASC="id_ASC",
id_DESC="id_DESC",
isPublished_ASC="isPublished_ASC",
isPublished_DESC="isPublished_DESC",
openingCrawl_ASC="openingCrawl_ASC",
openingCrawl_DESC="openingCrawl_DESC",
releaseDate_ASC="releaseDate_ASC",
releaseDate_DESC="releaseDate_DESC",
title_ASC="title_ASC",
title_DESC="title_DESC",
updatedAt_ASC="updatedAt_ASC",
updatedAt_DESC="updatedAt_DESC"
}

/**
* FilmOrderBy
*/
export const FilmOrderByEnumType = types.enumeration("FilmOrderBy", [
        "createdAt_ASC",
  "createdAt_DESC",
  "director_ASC",
  "director_DESC",
  "episodeId_ASC",
  "episodeId_DESC",
  "id_ASC",
  "id_DESC",
  "isPublished_ASC",
  "isPublished_DESC",
  "openingCrawl_ASC",
  "openingCrawl_DESC",
  "releaseDate_ASC",
  "releaseDate_DESC",
  "title_ASC",
  "title_DESC",
  "updatedAt_ASC",
  "updatedAt_DESC",
      ])
