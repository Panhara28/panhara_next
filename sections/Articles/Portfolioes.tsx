interface Props {
  id: number;
  title: string;
}

const Portfolioes = (props: Props) => (
  <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
    <a href="projects-single.html" className="desc">
      <div className="project"> <img src="images/portfolio/01.jpg" className="img-fluid" alt="" />
        <div className="desc">
          <div className="con">
            <h3>{props.title}</h3> <span>Branding Desing</span>
          </div>
        </div>
      </div>
    </a>
  </div>
)

export default Portfolioes;

