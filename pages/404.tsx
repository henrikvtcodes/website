import StdLayout from "layouts/standard";



const Error404 = () => {
  return (
    <StdLayout>
      <h1 className="prose prose-xl">
        Hey! Whatever door you&apos;re trying to open, it doesn&apos;t exist.
        Sorry!
      </h1>
    </StdLayout>
  );
}

export default Error404;