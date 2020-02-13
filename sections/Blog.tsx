
interface Props {
  id: number,
  title: string,
  image: string,
  description: string,
  category_name: string
}

const Blog = (props: Props) => (
  <div className="col-md-4 col-sm-4">
    <div className="blog-entry animate-box" data-animate-effect="fadeInLeft">
      <a href="post.html" className="blog-img">
        <img src="images/blog/blog-05.jpg" className="img-fluid" alt="" />
      </a>
      <div className="desc"> <span>In <b><a href="#"> {props.category_name} </a></b></span>
        <h3><a href="post.html"> {props.title} </a></h3>
        <p> {props.description} </p>
      </div>
    </div>
  </div>
)

export default Blog;

