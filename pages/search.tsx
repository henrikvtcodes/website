import { useRouter } from "next/router";

import StdLayout from "../layouts/newStandard";

const Home = () => {
  const router = useRouter();

  return (
    <StdLayout>
      <div className=""></div>
    </StdLayout>
  );
};

export default Home;
