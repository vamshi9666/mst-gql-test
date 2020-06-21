import { Instance } from "mobx-state-tree"
import { FilmSubscriptionPayloadModelBase } from "./FilmSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of FilmSubscriptionPayloadModel */
export interface FilmSubscriptionPayloadModelType extends Instance<typeof FilmSubscriptionPayloadModel.Type> {}

/* A graphql query fragment builders for FilmSubscriptionPayloadModel */
export { selectFromFilmSubscriptionPayload, filmSubscriptionPayloadModelPrimitives, FilmSubscriptionPayloadModelSelector } from "./FilmSubscriptionPayloadModel.base"

/**
 * FilmSubscriptionPayloadModel
 */
export const FilmSubscriptionPayloadModel = FilmSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
