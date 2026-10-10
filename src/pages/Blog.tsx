import InterfaceIcon from "../components/common/InterfaceIcon";
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

      <section className="news-section fix section-padding pb-[0px]!">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3!">
            {POSTS.map((p, i) => (
              <div
                key={i}
                className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[768px]:w-6/12! wow fadeInUp"
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
                      Read More <InterfaceIcon name="arrow-right"  />
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
