import { pageClasses } from "../styles/pageUtilities";
import InterfaceIcon from "../components/common/InterfaceIcon";
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
      <div className="flex! flex-wrap! -mx-3!">
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input name="name" className={pageClasses("field-input")} type="text" placeholder="Enter Name" />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="email"
              className={pageClasses("field-input required email")}
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-[16px]!">
        <textarea
          name="message"
          className={pageClasses("field-input required")}
          rows={5}
          placeholder="Enter Message"
        />
      </div>
      <div className={pageClasses("mb-[16px]! theme-btn-main")}>
        <input name="botcheck" className={pageClasses("field-input")} type="hidden" value="" />
        <button
          type="submit"
          className={pageClasses("theme-btn btn-style-one transform")}
          data-loading-text="Please wait..."
          disabled={status.state === "submitting"}
        >
          <span className="btn-title">
            {status.state === "submitting" ? "Please wait..." : "Submit Comment"}
          </span>
        </button>
      </div>
      {status.state === "success" && (
        <div className={pageClasses("form-notice form-notice-success")} role="alert">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className={pageClasses("form-notice form-notice-error")} role="alert">
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

      <section className={pageClasses("blog-details pt-[120px]! pb-[0px]!")}>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-8/12! min-[992px]:w-7/12!">
              <div className={pageClasses("blog-details__left")}>
                <div className={pageClasses("blog-details__img")}>
                  <div className={pageClasses("blog-details__date")}>
                    <span className="day">28</span>
                    <span className="month">Aug</span>
                  </div>
                </div>
                <div className={pageClasses("blog-details__content")}>
                  <ul className={pageClasses("list-none! pl-0! blog-details__meta")}>
                    <li>
                      <a href="#">
                        <InterfaceIcon name="user"  /> Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <InterfaceIcon name="comments"  /> 02 Comments
                      </a>
                    </li>
                  </ul>
                  <h3 className={pageClasses("blog-details__title")}>
                    Your business absolutely needs a updated daily
                  </h3>
                  <p className="blog-details__text-2">{PARA}</p>
                  <p className="blog-details__text-2">{PARA}</p>
                  <p className="blog-details__text-2">{PARA}</p>
                </div>
                <div className={pageClasses("blog-details__bottom")}>
                  <p className={pageClasses("blog-details__tags")}>
                    <span>Tags</span> <a href="#">Business</a> <a href="#">Agency</a>
                  </p>
                  <div className={pageClasses("blog-details__social-list")}>
                    <a href="#">
                      <InterfaceIcon name="x"  />
                    </a>{" "}
                    <a href="#">
                      <InterfaceIcon name="facebook"  />
                    </a>{" "}
                    <a href="#">
                      <InterfaceIcon name="pinterest"  />
                    </a>{" "}
                    <a href="#">
                      <InterfaceIcon name="instagram"  />
                    </a>
                  </div>
                </div>
                <div className={pageClasses("nav-links")}>
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
                <div className={pageClasses("comment-one")}>
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
                        <a href="#" className={pageClasses("theme-btn btn-style-one comment-one__btn")}>
                          <span className="btn-title">Reply</span>
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className={pageClasses("comment-form")}>
                    <h3 className="comment-form__title mb-[16px]!">Leave a Comment</h3>
                    <CommentForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-5/12!">
              <div className={pageClasses("sidebar")}>
                <div className={pageClasses("sidebar__single sidebar__search")}>
                  <form
                    action="#"
                    className={pageClasses("sidebar__search-form")}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <InterfaceIcon name="search"  />
                    </button>
                  </form>
                </div>
                <div className={pageClasses("sidebar__single sidebar__post")}>
                  <h3 className={pageClasses("sidebar__title")}>Latest Posts</h3>
                  <ul className="sidebar__post-list list-none! pl-0!">
                    {LATEST.map((p, i) => (
                      <li key={i}>
                        <div className="sidebar__post-content">
                          <h3>
                            <span className="sidebar__post-content-meta">
                              <InterfaceIcon name="user"  />
                              Admin
                            </span>{" "}
                            <a href="#">{p.title}</a>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={pageClasses("sidebar__single sidebar__category")}>
                  <h3 className={pageClasses("sidebar__title")}>Categories</h3>
                  <ul className={pageClasses("sidebar__category-list list-none! pl-0!")}>
                    {CATEGORIES.map((c, i) => (
                      <li key={i} className={i === 1 ? "active" : undefined}>
                        <a href="#">
                          {c}
                          <InterfaceIcon name="arrow-right"  />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={pageClasses("sidebar__single sidebar__tags")}>
                  <h3 className={pageClasses("sidebar__title")}>Tags</h3>
                  <div className={pageClasses("sidebar__tags-list")}>
                    {TAGS.map((t, i) => (
                      <a key={i} href="#">
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
                <div className={pageClasses("sidebar__single sidebar__comments")}>
                  <h3 className={pageClasses("sidebar__title")}>Recent Comments</h3>
                  <ul className={pageClasses("sidebar__comments-list list-none! pl-0!")}>
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i}>
                        <div className={pageClasses("sidebar__comments-icon")}>
                          <InterfaceIcon name="comments"  />
                        </div>
                        <div className={pageClasses("sidebar__comments-text-box")}>
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
