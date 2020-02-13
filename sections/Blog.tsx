
import Link from 'next/link';

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
      <Link href="#">
        <a className="blog-img">
          <img src="images/blog/blog-05.jpg" className="img-fluid" alt="" />
        </a>
      </Link>
      <div className="desc"> 
        <span>In 
          <b>
            <Link href="#">
              <a> {props.category_name} </a>
            </Link>
          </b>
        </span>
        <h3>
          <Link href="#">
            <a>{props.title}</a>
          </Link>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
)

export default Blog;

