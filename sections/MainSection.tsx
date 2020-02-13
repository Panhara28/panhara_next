import Portfolioes from "./Articles/Portfolioes";
import About from "./About";
import Skill from "./Skill";
import Reference from "./Reference";
import Service from "./Service";
import Blog from "./Blog";
interface Props {
  data?: any
  loading: boolean
}


function MainSection(props: Props) {
  return (
    <>
      <About />
      <Skill />
      <Reference />
      <Service />
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
                props.data.list.map((x, idx) => {
                  return <Portfolioes key={idx} {...x} />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </>
  )
}

export default MainSection;