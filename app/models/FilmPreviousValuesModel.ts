import { Instance } from "mobx-state-tree"
import { FilmPreviousValuesModelBase } from "./FilmPreviousValuesModel.base"

/* The TypeScript type of an instance of FilmPreviousValuesModel */
export interface FilmPreviousValuesModelType extends Instance<typeof FilmPreviousValuesModel.Type> {}

/* A graphql query fragment builders for FilmPreviousValuesModel */
export { selectFromFilmPreviousValues, filmPreviousValuesModelPrimitives, FilmPreviousValuesModelSelector } from "./FilmPreviousValuesModel.base"

/**
 * FilmPreviousValuesModel
 */
export const FilmPreviousValuesModel = FilmPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
