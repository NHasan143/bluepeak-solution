import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import ServiceList from "../components/sections/ServiceList";

export default function Services() {
  return (
    <>
      <PageTitle title="Services" crumb="Services" />

      <section className="service-section fix section-padding section-bg">
        <div className="container">
          <ServiceList />
        </div>
      </section>

      <Footer padded />
    </>
  );
}
