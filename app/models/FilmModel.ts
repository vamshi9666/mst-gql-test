import { Instance } from "mobx-state-tree"
import { FilmModelBase } from "./FilmModel.base"

/* The TypeScript type of an instance of FilmModel */
export interface FilmModelType extends Instance<typeof FilmModel.Type> {}

/* A graphql query fragment builders for FilmModel */
export { selectFromFilm, filmModelPrimitives, FilmModelSelector } from "./FilmModel.base"

/**
 * FilmModel
 */
export const FilmModel = FilmModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
