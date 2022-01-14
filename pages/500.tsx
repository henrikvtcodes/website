import Link from "next/link";

import StdLayout from "layouts/standard";

const Error500 = () => {
  return (
    <StdLayout>
      <div className="flex flex-col justify-center space-y-8 h-full">
        <div>
          <h1 className="dark:text-white text-6xl text-center font-sans">
            Error 500
          </h1>
        </div>
        <div>
          <h2 className="dark:text-white text-center text-3xl">Server Error</h2>
        </div>
        <Link href={`/`} passHref>
          <a className="self-center hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded w-32 text-center bg-gray-200 dark:bg-zinc-800 hover:bg-gray-400 dark:hover:bg-zinc-700  transition-all">
            <span className="capsize">🔙 Go Home</span>
          </a>
        </Link>
      </div>
    </StdLayout>
  );
};

export default Error500;
