import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import { useWeb3Forms } from "../lib/web3forms";

const PARA =
  "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet";

const COMMENTS = [
  { name: "Kevin Martin" },
  { name: "Sarah Albert" },
];

const LATEST = [
  { title: "The Future of Smart Homes in Construction" },
  { title: "Tensive quality vectors life through strategies" },
  { title: "How to stay motivated until a project is finished" },
];

const CATEGORIES = [
  "Brand & Strategy",
  "Creative & Design",
  "Web & Product",
  "Marketing & Growth",
  "Content & Production",
  "Technology & Development",
];

const TAGS = ["Logo Design", "UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems"];

function CommentForm() {
  const { status, submit } = useWeb3Forms();
  return (
    <form
      id="contact_form"
      name="contact_form"
      onSubmit={(e) => {
        e.preventDefault();
        void submit(e.currentTarget);
      }}
    >
      <input type="hidden" name="subject" value="New blog comment from Bluepeak Solution" />
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input name="name" className="form-control" type="text" placeholder="Enter Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="email"
              className="form-control required email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          className="form-control required"
          rows={5}
          placeholder="Enter Message"
        />
      </div>
      <div className="mb-3 theme-btn-main">
        <input name="botcheck" className="form-control" type="hidden" value="" />
        <button
          type="submit"
          className="theme-btn btn-style-one transform"
          data-loading-text="Please wait..."
          disabled={status.state === "submitting"}
        >
          <span className="btn-title">
            {status.state === "submitting" ? "Please wait..." : "Submit Comment"}
          </span>
        </button>
      </div>
      {status.state === "success" && (
        <div className="alert alert-success" role="alert">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className="alert alert-danger" role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}

export default function BlogDetails() {
  return (
    <>
      <PageTitle title="News" crumb="News" />

      <section className="blog-details pt-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <div className="blog-details__date">
                    <span className="day">28</span>
                    <span className="month">Aug</span>
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li>
                      <a href="#">
                        <i className="fas fa-user-circle" /> Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comments" /> 02 Comments
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-details__title">
                    Your business absolutely needs a updated daily
                  </h3>
                  <p className="blog-details__text-2">{PARA}</p>
                  <p className="blog-details__text-2">{PARA}</p>
                  <p className="blog-details__text-2">{PARA}</p>
                </div>
                <div className="blog-details__bottom">
                  <p className="blog-details__tags">
                    <span>Tags</span> <a href="#">Business</a> <a href="#">Agency</a>
                  </p>
                  <div className="blog-details__social-list">
                    <a href="#">
                      <i className="fa fa-x" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>{" "}
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="nav-links">
                  <div className="prev">
                    <a href="#" rel="prev">
                      Bring to the table win-win survival strategies
                    </a>
                  </div>
                  <div className="next">
                    <a href="#" rel="next">
                      How to lead a healthy &amp; well-balanced life
                    </a>
                  </div>
                </div>
                <div className="comment-one">
                  <h3 className="comment-one__title">2 Comments</h3>
                  {COMMENTS.map((c, i) => (
                    <div key={i} className="comment-one__single">
                      <div className="comment-one__content">
                        <h3>{c.name}</h3>
                        <p>
                          Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                          Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
                          sollicitudin at euismod.
                        </p>
                        <a href="#" className="theme-btn btn-style-one comment-one__btn">
                          <span className="btn-title">Reply</span>
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="comment-form">
                    <h3 className="comment-form__title mb-3">Leave a Comment</h3>
                    <CommentForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__single sidebar__search">
                  <form
                    action="#"
                    className="sidebar__search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <i className="lnr-icon-search" />
                    </button>
                  </form>
                </div>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Latest Posts</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {LATEST.map((p, i) => (
                      <li key={i}>
                        <div className="sidebar__post-content">
                          <h3>
                            <span className="sidebar__post-content-meta">
                              <i className="fas fa-user-circle" />
                              Admin
                            </span>{" "}
                            <a href="#">{p.title}</a>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">Categories</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    {CATEGORIES.map((c, i) => (
                      <li key={i} className={i === 1 ? "active" : undefined}>
                        <a href="#">
                          {c}
                          <span className="icon-right-arrow" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">Tags</h3>
                  <div className="sidebar__tags-list">
                    {TAGS.map((t, i) => (
                      <a key={i} href="#">
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="sidebar__single sidebar__comments">
                  <h3 className="sidebar__title">Recent Comments</h3>
                  <ul className="sidebar__comments-list list-unstyled">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i}>
                        <div className="sidebar__comments-icon">
                          <i className="fas fa-comments" />
                        </div>
                        <div className="sidebar__comments-text-box">
                          {i % 2 === 0 ? (
                            <p>
                              A wordpress commenter on <br />
                              launch new mobile app
                            </p>
                          ) : (
                            <>
                              <p>
                                <span>John Doe</span> on template:
                              </p>
                              <h5>comments</h5>
                            </>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
