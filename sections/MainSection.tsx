import Portfolioes from "./Portfolioes";
import About from "./About";
import Skill from "./Skill";
import Reference from "./Reference";
import Service from "./Service";
import Blog from "./Blog";
import Contact from "./Contact";

interface Props {
  data?: any
  loading: boolean
}

function MainSection(props: Props) {
  return (
    <>
      <About />
      <Skill />
      <Service />
      <Reference />
      <div id="portfolio" className="section">
        <div className="addo-projects">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12"> <span className="heading-meta">Portfolio</span>
                <h2 className="addo-heading animate-box" data-animate-effect="fadeInLeft">Creative Works</h2>
              </div>
            </div>
            <div className="row">
              {
                props.data.portfolioes.map((x, idx) => {
                  return <Portfolioes key={idx} {...x} {...x.category} />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div id="news" className="section">
        <div className="addo-blog">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12"> <span className="heading-meta">Read</span>
                <h2 className="addo-heading animate-box" data-animate-effect="fadeInLeft">LATEST NEWS</h2>
              </div>
            </div>
            <div className="row">
              {
                props.data.blogs.map((x, idx)=> {
                  return <Blog key={idx} {...x} {...x.category}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default MainSection;