import '../styles/about.scss';

const data = {
  name: "Chhouk Tit Panhara",
  email: "titpanhara@gmail.com",
  phone: "095477325",
  dob: "28 April 1992",
  address: "#57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork",
  nationality: "Khmer"
}

const About = () => (
  <div>
    <section id="about" className="about white-bg page-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="about-image">
              <img className="img-responsive" src="/panhara.png" alt="" />
            </div>	
            <div className="about-social">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i> </a></li>
                <li><a href="#"><i className="fa fa-vimeo"></i> </a></li>
                <li><a href="#"><i className="fa fa-pinterest-p"></i> </a></li>
                <li><a href="#"><i className="fa fa-behance"></i> </a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8"> 
            <div className="section-title">
              <div className="section-title-name">
                <span>Know about me</span>
                <h2>About Me</h2>
              </div>	
              <div className="title-name-gray">
                <strong>About me</strong>
              </div>
            </div>
            <div className="contact-block"> 
            <div className="row">  

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                    <span className="ti-user"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Name:</h4>
                    <p>{ data.name }</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                    <span className="ti-email"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Email:</h4>
                    <p> { data.email } </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                    <span className="ti-mobile"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Phone:</h4>
                    <p> { data.phone } </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">  
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                    <span className="ti-calendar"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Date of birth: </h4>
                    <p> { data.dob } </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                    <span className="ti-direction-alt"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Address: </h4>
                    <p> { data.address } </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="my-contact clearfix">
                  <div className="contact-icon">
                  <span className="ti-flag-alt-2"></span>
                  </div>
                  <div className="contact-info">
                    <h4>Nationality: </h4>
                    <p> { data.nationality } </p>
                  </div>
                </div>
              </div>
            </div>	
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="about-block clearfix">
                <p>I have more than <b>5 years of experience</b> in the field of Computer Science/Information Technology. 
                Specialized in HTML, CSS, JavaScript, Ruby, <b>Ruby On Rails</b>, Nodejs, NextJs, ReactJS. Professional in building Point Of Sale, 
                Human Resource Management System,<b> Web Development,</b> etc.</p>
                <p>Panhara.work as a Freelance Developer and a Designer</p>
                <img className="pull-right" src="images/signature.png" alt="" />
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

export default About;