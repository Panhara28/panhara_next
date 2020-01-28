const Contact = () => (
  <div id="contact" className="section">        
  <div className="addo-contact">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12"> <span className="heading-meta">Location</span>
          <h2 className="addo-heading animate-box" data-animate-effect="fadeInLeft">Contact Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInLeft">
          <p><b>Panhara.work FREELANCER</b>
            <br />We make project live.
        <br />and responsive.</p>
          <p>PHONE: +85595477325</p>
          <p>EMAIL: titpanhara@gmail.com</p>
          <p>ADDRESS: #57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork.</p>
        </div>

        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <p><b>GET IN TOUCH</b></p>
          <form method="post" className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" required /> </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" /> </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <textarea name="message" id="message" cols={30} rows={5} className="form-control"
                  placeholder="Message"></textarea>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <button className="btn" type="submit">Say Hello!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


)

export default Contact;