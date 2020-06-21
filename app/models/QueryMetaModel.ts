import { Instance } from "mobx-state-tree"
import { QueryMetaModelBase } from "./QueryMetaModel.base"

/* The TypeScript type of an instance of QueryMetaModel */
export interface QueryMetaModelType extends Instance<typeof QueryMetaModel.Type> {}

/* A graphql query fragment builders for QueryMetaModel */
export { selectFromQueryMeta, queryMetaModelPrimitives, QueryMetaModelSelector } from "./QueryMetaModel.base"

/**
 * QueryMetaModel
 */
export const QueryMetaModel = QueryMetaModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
