import { Layout } from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import client from '../../lib/apollo';
import gql from "graphql-tag";
import { BlogScreen } from "../../sections/BlogScreen";

const DETAIL_DATA = gql`
  query blog($id: Int!){
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

  return (
    <Layout>
      <div className="addo-projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7"> <span className="heading-meta">Blog</span>
              <h2 className="addo-post-heading animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                {props.data.blog.title}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 image-content animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <img src="http://duruthemes.com/demo/html/addo/black/images/post.jpg" className="img-fluid mb-30" alt="" /> 
            </div>
            </div>
            <div className="row">
              <div className="col-md-7 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <p>
                  {props.data.blog.description}
                </p>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

Blog.getInitialProps = async function (ctx) {
  const { id } = ctx.query;

  const { data } = await client.query({
    query: DETAIL_DATA,
    variables: {
      id: Number(id)
    }
  })
  return { data }
}

export default Blog;