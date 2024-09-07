import SectionFaq from "../components/SectionFaq";
import SectionFeatures from "../components/SectionFeatures";
import SectionFooter from "../components/SectionFooter";
import SectionHouse from "../components/SectionHouse";
import SectionCard from "../components/SectionHow";
import SectionSwiper from "../components/SectionSwiper";
import SectionVideo from "../components/SectionVideo";

function Home() {
  return (
    <>
      <main>
        <SectionHouse />
        <SectionFeatures />
        <SectionSwiper />

        <SectionCard />
        <SectionVideo />
        <SectionFaq />
        <SectionFooter />
      </main>
    </>
  );
}

export default Home;
