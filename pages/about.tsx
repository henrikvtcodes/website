
import StdLayout from "layouts/std";
import AboutCard from "~component/aboutcard";

const About = (props) => {
  return (
    <StdLayout>
      <section className=" p-8 containerfill ">
        <div className=" ">
          <AboutCard />
        </div>
      </section>
    </StdLayout>
  );
};

export default About;