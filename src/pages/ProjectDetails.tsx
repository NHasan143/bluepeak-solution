import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const META = [
  { label: "Clients:", value: "Brooklyn Simmons" },
  { label: "Category:", value: "Website Design" },
  { label: "Date:", value: "25 February, 2026" },
  { label: "Location:", value: "6391 Elgin St, Celina." },
];

export default function ProjectDetails() {
  return (
    <>
      <PageTitle title="Protfolio Details" crumb="Protfolio Details" />

      <section className="project-details pt-120 pb-0">
        <div className="container">
          <div className="project-details__top">
            <div className="project-details__details-box">
              <ul className="list-unstyled project-details__details-list">
                {META.map((m, i) => (
                  <li key={i}>
                    <p className="project-details__client">{m.label}</p>
                    <h6 className="project-details__name">{m.value}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-details__content">
            <h3 className="title mb-3">Best Digital Solution</h3>
            <p className="text">
              But I must explain to you how all this mistaken idea of denouncing pleasure and
              praising pain was born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but because occasionally
              circumstances occur in which toil and pain can procure him some great pleasure. To take
              a trivial example, which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault with a man who
              chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
              that produces no resultant pleasure
            </p>
            <p className="text mb-5">
              On the other hand, we denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
              that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
              belongs to those who fail in their duty through weakness of will, which is the same as
              saying through shrinking from toil and pain. These cases are perfectly simple and easy
              to distinguish. In a free hour
            </p>
            <p className="text mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              archi beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit, sed quia non numqua
            </p>
            <div className="row">
              <div className="col-lg-5">
                <h2 className="project-title-big-title">Interesting Facts In Development</h2>
              </div>
              <div className="col-lg-7">
                <p className="text">
                  Must explain to you how all this mistaken idea of denouncing pleasure and praising
                  pain was born and I will give you a complete account of the system, and expound the
                  actual teachings of the great explorer of the truth, the master-builder of human
                  happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                  pleasure, but because those who do not know how to pursue pleasure rationally
                  encounter
                </p>
                <div className="feature-list mt-4">
                  <ul>
                    <li>
                      <i className="icon fa-solid fa-circle-check" /> Efficient Sprint Planning
                    </li>
                    <li>
                      <i className="icon fa-solid fa-circle-check" /> Efficient Sprint Planning
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="icon fa-solid fa-circle-check" /> Iterative Delivery Approach
                    </li>
                    <li>
                      <i className="icon fa-solid fa-circle-check" /> Problem-solving
                    </li>
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
