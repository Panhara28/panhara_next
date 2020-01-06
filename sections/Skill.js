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
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="skill-content">
              <h2>My Professional Strengths</h2>
              <span>“The strength of a man's virtue should not be measured by his special exertions, but by his habitual acts”</span>
              <p>My Professional Strengths Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit error culpa unde, esse quam quasi, necessitatibus voluptatem possimus, repellendus. <br /><br />
                The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry, sincerity, Justice, moderation, cleanliness, tranquility, chastity and humility. For the summary order he followed a little scheme of employing his time each day. From five to seven each morning he spent in bodily personal attention, saying a short prayer, thinking over the day’s business and resolutions, studying and eating breakfast. From eight till twelve he worked at his trade. From twelve to one he read or overlooked his accounts and dined. From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or diversion of some sort. </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="skill">
              <ul>
                <li>Web &amp; Graphic Design
                 <div className="bar_container">
                    <span className="bar" style={{ backgroundColor: "rgb(7, 203, 121)", width: "70%" }}>
                      <span className="pct" style={{ color: "rgb(7, 203, 121)", opacity: 1 }}>70%</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="skill-chart">
                <div className="skill-chart-expand clearfix">
                  <div className="expand expand-left">
                    <p>Newbie</p>
                  </div>
                  <div className="expand expand-left">
                    <p>Decent</p>
                  </div>
                  <div className="expand expand-right">
                    <p>Pretty Good</p>
                  </div>
                  <div className="expand expand-right">
                    <p>Master</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Skill;