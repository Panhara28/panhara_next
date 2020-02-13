import { graphql } from '../lib/graphql';

export function createQuery() {    
  return [
    {
      query: graphql.QUERY_PORTFOLIO,
      variables: {
        offset: 0,
        limit: 10
      }
    },
    {
      query: graphql.QUERY_BLOG,
      variables: {
        offset: 0,
        limit: 10
      }
    }
  ]
}
