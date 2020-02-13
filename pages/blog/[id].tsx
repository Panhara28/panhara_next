import { Layout } from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import client from '../../lib/apollo';
import gql from "graphql-tag";
import { BlogScreen } from "../../sections/BlogScreen";

const DETAIL_DATA = gql`
  query blog($id: Int){
    blog(id: $id){
      id
      title
      description
      image
      category{
        id
        category_name
      }
    }
  }
`

const Blog = (props: any) => {
  return(
    <Layout>
      <BlogLoader key={props.articleId} {...props} />
    </Layout>
  )
}

const BlogLoader = (props: any) =>{
  const { data, loading, error } = useQuery(DETAIL_DATA, {
    variables: {
      id: props.blogId
    },
    skip: props.willLoadFromServer
  })

  return(
    <BlogScreen 
      title={props.title}
      description={props.description}
      image={props.image}
    />
  )
}

Blog.getInitialProps = async function (ctx){
  const { id } = ctx.query;
  let dataFromServer = undefined;
  let dataSmall = undefined;

  if(!process.browser){
    const res = await client.query({
      query: DETAIL_DATA, variables: {
        id: Number(id)
      }
    })
    dataFromServer = res.data.blog
  }

  return{
    willLoadFromServer: !process.browser
    blogId: Number(id)
  }
}

export default Blog;