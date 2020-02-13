import gql from 'graphql-tag';


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
`;

const QUERY_BLOG = gql`
  query blogList($offset: Int = 0, $limit: Int = 10){
    blogList(offset: $offset, limit: $limit){
      id
      title
      image
      description
      category{
        id
        category_name
      }
    }
  }
`

export const graphql ={
    QUERY_PORTFOLIO,
    QUERY_BLOG
  }
