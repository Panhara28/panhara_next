import { useQuery } from "@apollo/react-hooks";
import client from "../lib/apollo";

interface QueryType {
  query: any,
  variables: any
}
export function useMultipleQuery(queries: QueryType[]) {
  const res = queries.map(x => useQuery(x.query, { variables: x.variables, fetchPolicy: 'network-only' }));
  
  let loading = false;
  for(const r of res) {
    loading = loading || r.loading;
  }

  return { loading, data: res.map(x => x.data) };
}

export async function runMultipleQuery(queries: QueryType[]) {
  const res = [];
 
  for(const query of queries) {
    res.push(await client.query({ ...query, fetchPolicy: 'network-only' }));
  }

  return res.map(x => x.data);
}