import {Layout} from '../components/Layout';
import MainSection from '../sections/MainSection';
import { createQuery } from '../functions/createQuery';
import { transform } from '../functions/transform';
import { runMultipleQuery, useMultipleQuery } from '../functions/multipleQuery';

interface Props {
  data: any;
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
        <MainSection loading={false} data={transform(props.data)}/>
      </>
    )
  }
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