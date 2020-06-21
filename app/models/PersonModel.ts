import { Instance } from "mobx-state-tree"
import { PersonModelBase } from "./PersonModel.base"

/* The TypeScript type of an instance of PersonModel */
export interface PersonModelType extends Instance<typeof PersonModel.Type> {}

/* A graphql query fragment builders for PersonModel */
export { selectFromPerson, personModelPrimitives, PersonModelSelector } from "./PersonModel.base"

/**
 * PersonModel
 */
export const PersonModel = PersonModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
