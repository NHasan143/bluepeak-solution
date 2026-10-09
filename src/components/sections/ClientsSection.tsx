/** Shared client band heading for the homepage and About page. */
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
            <div className="section-title mb-0 text-center">
              <h2 className="title text-anim">
                Powering Growth for <span>Businesses Across Industries</span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
