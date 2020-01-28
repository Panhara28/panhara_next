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
  <div id="about" className="section">
    <div className="addo-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12"> <span className="heading-meta">Information</span>
            <h2 className="addo-heading animate-box" data-animate-effect="fadeInLeft">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5"> <img src="/panhara.png" className="img-fluid mb-30 animate-box"
            data-animate-effect="fadeInLeft" alt="" /> </div>
          <div className="col-md-7 animate-box" data-animate-effect="fadeInLeft"> <span className="heading-meta">ABOUT
                ME</span>
            <h2 className="cd-headline clip">
              <span>I'm Chhouk Tit Panhara &amp; </span>
              <span className="">
                <b className="is-visible"> Web Developer</b>
                <b>Freelancer</b>
                <b>Web Designer</b>
              </span>
            </h2>
            <p>Hi, My name is Chhouk Tit Panhara. I am a Web Developer, and I'm very passionate and dedicated to
              my work. With 4 years experience as a web designer and development, I have acquired the skills and knowledge necessary
              to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept
              and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
              
            </p>
            <div className="addo-about-contact-wrap">
              <div className="row">
                <div className="col-md-6">
                  <p><b>Birthday:</b> 28 April 1992</p>
                  <p><b>Website:</b> panhara.work</p>
                  <p><b>Phone:</b> +85595477325</p>
                </div>
                <div className="col-md-6">
                  <p><b>Degree:</b> Web Development & Design</p>
                  <p><b>Mail:</b> titpanhara@gmail.com</p>
                  <p><b>Facebook Page:</b> /codevlog</p>
                </div>
              </div>
            </div>
            <ul className="toolbar">
              <li><button className="btn">HIRE ME</button></li>
              <li><button className="btn">DOWNLOAD CV</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default About;