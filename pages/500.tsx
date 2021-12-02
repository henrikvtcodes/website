import StdLayout from "layouts/standard";

const Error500 = () => {
  return (
    <StdLayout>
      <h1 className="prose prose-xl">
        Hey! Whatever door you&apos;re trying to open, we can&apos;t find it.
        Sorry!
      </h1>
    </StdLayout>
  );
};

export default Error500;
