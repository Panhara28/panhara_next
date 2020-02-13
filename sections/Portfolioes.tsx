interface Props {
  id: number;
  title: string;
  image: string;
  category_name: any;
}

const Portfolioes = (props: Props) => (
  <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
    <a href="projects-single.html" className="desc">
      <div className="project">
        <img src="images/portfolio/01.jpg" className="img-fluid" alt="" />
        <div className="desc">
          <div className="con">
            <h3>{props.title}</h3> <span>{props.category_name}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
)

export default Portfolioes;

