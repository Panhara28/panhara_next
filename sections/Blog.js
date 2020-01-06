const Blog = () => (
  <div>
    <section id="blog" className="blog white-bg page-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title">
              <div className="section-title-name">
                <span>My Latest Blog Posts</span>
                <h2>From the blog </h2>
              </div>
              <div className="title-name-gray">
                <strong>Blog</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="blog-block">
              <div className="blog-image">
                <img className="img-responsive" src="images/blog/01.jpg" alt="" />
                <div className="blog-date">
                  <span>June <br />05</span>
                </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <p><span className="ti-comment-alt"></span> <a href="#">4</a></p>
                  <p><span className="ti-user"></span> <a href="#">Admin </a></p>
                  <p><span className="ti-folder"></span> <a href="#">Development</a></p>
                </div>
                <div className="blog-content">
                  <a href="blog-single.html">Are You Famous Or Focused</a>
                  <p>Commodo consequat ut enim ad minim niam, quis nostrud ullamco  nisi ut aliquip exea non veritatis illum laudantium</p>
                  <div className="blog-bottom clearfix">
                    <div className="button-small">
                      <a href="#">Read More..</a>
                    </div>
                    <div className="social pull-right">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
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

export default Blog;