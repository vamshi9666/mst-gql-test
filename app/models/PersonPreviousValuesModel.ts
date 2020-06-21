import { Instance } from "mobx-state-tree"
import { PersonPreviousValuesModelBase } from "./PersonPreviousValuesModel.base"

/* The TypeScript type of an instance of PersonPreviousValuesModel */
export interface PersonPreviousValuesModelType extends Instance<typeof PersonPreviousValuesModel.Type> {}

/* A graphql query fragment builders for PersonPreviousValuesModel */
export { selectFromPersonPreviousValues, personPreviousValuesModelPrimitives, PersonPreviousValuesModelSelector } from "./PersonPreviousValuesModel.base"

/**
 * PersonPreviousValuesModel
 */
export const PersonPreviousValuesModel = PersonPreviousValuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
