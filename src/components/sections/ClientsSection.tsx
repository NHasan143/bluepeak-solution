const ROW_ONE = ["client1-1.png", "client1-2.png", "client1-3.png"];
const ROW_TWO = ["client1-2.png", "client1-1.png", "client1-3.png"];

function ClientLogo({ img }: { img: string }) {
  return (
    <div className="client-block-two col-lg-3 col-md-4 col-sm-4">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <a href="#">
              <img src={`/images/resource/${img}`} alt="Image" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return (
    <div className="client-block-two col-lg-3 col-md-4 col-sm-4 d-none d-lg-block">
      <div className="inner-box">
        <div className="image-box">
          <br />
        </div>
      </div>
    </div>
  );
}

/** "Working with 30+ Brands" — shared by the homepage and the About page. */
export default function ClientsSection({
  heading = true,
}: {
  heading?: boolean;
}) {
  return (
    <section className="clients-section-1">
      <div className="ellipse-1">
        <img src="/images/icons/client1-1ellipse.png" alt="img" />
      </div>
      <div className="ellipse-2">
        <img src="/images/icons/client1-2ellipse.png" alt="img" />
      </div>
      <div className="object-1 d-none d-xxl-block tm-gsap-animate-circle">
        <img src="/images/icons/object-vec.png" alt="img" />
      </div>
      <div className="clients-wrapper section-bg section-padding">
        <div className="client-shape">
          <img src="/images/icons/client1-shape-1.png" alt="img" />
        </div>
        <div className="line-shape">
          <img src="/images/icons/client1-line-1.png" alt="img" />
        </div>
        <div className="container">
          {heading && (
            <div className="section-title mb-60 text-center">
              <h2 className="title text-anim">
                Working with <span>30+ Brands</span> Worldwide
              </h2>
            </div>
          )}
          <div className="brand-outer-box wow fadeInUp" data-wow-delay=".3s">
            <div className="row gx-0">
              {ROW_ONE.map((img, i) => (
                <ClientLogo key={i} img={img} />
              ))}
              <Spacer />
            </div>
            <div className="row gx-0">
              <Spacer />
              {ROW_TWO.map((img, i) => (
                <ClientLogo key={i} img={img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
