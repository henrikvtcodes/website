
import StdLayout from "~/layouts/old/std";
import AboutCard from "~component/old/aboutcard";

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