import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import TeamSection from "../components/sections/TeamSection";

export default function Team() {
  return (
    <>
      <PageTitle title="Team" crumb="Team" />

      <TeamSection showHeading={false} className="team-section-five section-padding pt-[90px]! pb-[0px]!" />

      <Footer padded />
    </>
  );
}
