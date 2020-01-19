const Skill = () => (
  <div>
    <section id="skill" className="my-skill white-bg page-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title">
              <div className="section-title-name">
                <span>I am good at</span>
                <h2>My Skill</h2>
              </div>
              <div className="title-name-gray">
                <strong>My Skill</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="language-skills">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="chart-bar">
                <div className="chart" data-percent="73">
                  <span className="percent">73</span>
                  <canvas height="150" width="150"></canvas></div>
                <h3>English <br /> Experienced</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="chart-bar">
                <div className="chart" data-percent="55">
                  <span className="percent">55</span>
                  <canvas height="150" width="150"></canvas></div>
                <h3>French <br />Advanced</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="chart-bar">
                <div className="chart" data-percent="89">
                  <span className="percent">89</span>
                  <canvas height="150" width="150"></canvas></div>
                <h3>Spanish <br />Basic</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="chart-bar">
                <div className="chart" data-percent="95">
                  <span className="percent">95</span>
                  <canvas height="150" width="150"></canvas></div>
                <h3>German <br />Basic</h3>
              </div>
            </div>
          </div>
          <div className="knowledge">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>Knowledge</h2>
                <p>Auis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul>
                  <li><span className="ti-hand-point-right"></span> Web design and development</li>
                  <li><span className="ti-hand-point-right"></span> Multimedia design</li>
                  <li><span className="ti-hand-point-right"></span> Digital media development</li>
                  <li><span className="ti-hand-point-right"></span> Interactive computing</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul>
                  <li><span className="ti-hand-point-right"></span> Strong creative skills</li>
                  <li><span className="ti-hand-point-right"></span> The ability to pay attention to detail</li>
                  <li><span className="ti-hand-point-right"></span> Ability to work to deadlines</li>
                  <li><span className="ti-hand-point-right"></span> Comfortable with a CMS</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul>
                  <li><span className="ti-hand-point-right"></span> Cultivate a design sense</li>
                  <li><span className="ti-hand-point-right"></span> Right balance of tools </li>
                  <li><span className="ti-hand-point-right"></span> Approach every new skill</li>
                  <li><span className="ti-hand-point-right"></span> Good business management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Skill;