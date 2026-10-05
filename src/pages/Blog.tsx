import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const POSTS = [
  { img: "news1-1.jpg", title: "The ultimate guide to content marketing for businesses" },
  { img: "news1-2.jpg", title: "Web3 marketing breakthroughs agency case study" },
  { img: "news1-3.jpg", title: "Innovative web3 marketing campaigns agency" },
  { img: "news1-2.jpg", title: "Web3 marketing breakthroughs agency case study" },
  { img: "news1-3.jpg", title: "Innovative web3 marketing campaigns agency" },
  { img: "news1-1.jpg", title: "The ultimate guide to content marketing for businesses" },
];

export default function Blog() {
  return (
    <>
      <PageTitle title="News" crumb="News" />

      <section className="news-section fix section-padding pb-0">
        <div className="container">
          <div className="row">
            {POSTS.map((p, i) => (
              <div
                key={i}
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="news-box-items">
                  <div className="thumb">
                    <img src={`/images/resource/${p.img}`} alt="img" />
                    <img src={`/images/resource/${p.img}`} alt="img" />
                    <span className="user-box">
                      <span>UI Design</span> / admin
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="/blog-details">{p.title}</Link>
                    </h4>
                    <Link to="/blog-details" className="link-btn">
                      Read More <i className="fa-regular fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
