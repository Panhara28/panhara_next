import { Layout } from '../components/Layout';
import About from '../sections/About';
import Skill from '../sections/Skill';
import Reference from '../sections/Reference';
import Service from '../sections/Service';
import Resume from '../sections/Resume';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import getConfig from 'next/config'

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

function createQuery(){
  return [
    {
      query: QUERY_PORTFOLIO,
      variables: {
        offset: 0,
        limit: 10,
      }
    }
  ]
}

console.log(createQuery);


const Index = () => (
  <Layout>
    <About />
    <Skill />
    <Reference />
    <Service />
    <Resume />
    <Blog />
    <Contact />
  </Layout>
);

export default Index;