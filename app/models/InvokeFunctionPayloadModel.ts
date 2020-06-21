import { Instance } from "mobx-state-tree"
import { InvokeFunctionPayloadModelBase } from "./InvokeFunctionPayloadModel.base"

/* The TypeScript type of an instance of InvokeFunctionPayloadModel */
export interface InvokeFunctionPayloadModelType extends Instance<typeof InvokeFunctionPayloadModel.Type> {}

/* A graphql query fragment builders for InvokeFunctionPayloadModel */
export { selectFromInvokeFunctionPayload, invokeFunctionPayloadModelPrimitives, InvokeFunctionPayloadModelSelector } from "./InvokeFunctionPayloadModel.base"

/**
 * InvokeFunctionPayloadModel
 */
export const InvokeFunctionPayloadModel = InvokeFunctionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
