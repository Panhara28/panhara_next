import {Layout} from '../components/Layout';
import MainSection from '../sections/MainSection';
import client from '../lib/apollo';
import gql from 'graphql-tag';
import getConfig from 'next/config'
import { useQuery } from '@apollo/react-hooks';

interface Props {
  title: string;
  author: string;
  thumbnail: string;
  publishedDateTime: any;
  contentWriter: any;
  nameDisplay: string;
  categoryName: any;
  data: {
    top: any,
  }
}

const QUERY_PORTFOLIO = gql`
  query portfolioList($offset: Int = 0, $limit: Int = 10){
    portfolioList(offset: $offset, limit: $limit){
      id
      title
      category{
        id
        category_name
      }
      image
    }
  }
`

const { publicRuntimeConfig } = getConfig();

function createQuery() {

  const date = new Date();

  return [
    {
      query: QUERY_PORTFOLIO,
      variables: {
        offset: 0,
        limit: 10
       
      }
    }
  ]
  
}

const Home = (props: Props) => {
  return (
    <Layout>
      <HomeScreen {...props} />
    </Layout>
  )
};

let cache = undefined;

function HomeScreen(props: Props) {
  if (process.browser) {  
    let data = undefined;
    let loading = false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    if (!cache && props.data) cache = transform(props.data);
    
    if (cache) {
      data = cache;
    } else if (!props.data) {
      const r = useMultipleQuery(createQuery());
      loading = r.loading;

      if (!loading) { 
        data = transform(r.data);
        cache = data;
      }
    } else {
      data = transform(props.data);
      cache = data;
    }

    return (
      <>
        <MainSection loading={loading} data={ data } />
      </>
    )
  } else {
    return (
      <>
        <MainSection loading={false} data={transform(props.data)} />
      </>
    )
  }
}

function transform(data: any) {
  const [ result ] = data;
  const list = result.portfolioList
  return { list }
}

interface QueryType {
  query: any,
  variables: any
}

function useMultipleQuery(queries: QueryType[]) {
  const res = queries.map(x => useQuery(x.query, { variables: x.variables, fetchPolicy: 'network-only' }));
  
  let loading = false;
  for(const r of res) {
    loading = loading || r.loading;
  }

  return { loading, data: res.map(x => x.data) };
}

async function runMultipleQuery(queries: QueryType[]) {
  const res = [];
 
  for(const query of queries) {
    res.push(await client.query({ ...query, fetchPolicy: 'network-only' }));
  }

  return res.map(x => x.data);
}

Home.getInitialProps = async function() {

  if (!process.browser) {
    return {
      data: await runMultipleQuery(createQuery())
    };
  }

  return { 
    data: undefined
  };
}


export default Home;