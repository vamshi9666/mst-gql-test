import { Instance } from "mobx-state-tree"
import { RemoveFromPeopleFilmPayloadModelBase } from "./RemoveFromPeopleFilmPayloadModel.base"

/* The TypeScript type of an instance of RemoveFromPeopleFilmPayloadModel */
export interface RemoveFromPeopleFilmPayloadModelType extends Instance<typeof RemoveFromPeopleFilmPayloadModel.Type> {}

/* A graphql query fragment builders for RemoveFromPeopleFilmPayloadModel */
export { selectFromRemoveFromPeopleFilmPayload, removeFromPeopleFilmPayloadModelPrimitives, RemoveFromPeopleFilmPayloadModelSelector } from "./RemoveFromPeopleFilmPayloadModel.base"

/**
 * RemoveFromPeopleFilmPayloadModel
 */
export const RemoveFromPeopleFilmPayloadModel = RemoveFromPeopleFilmPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
