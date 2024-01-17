import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404 - Not Found</h1>
      <p className="text-lg my-8">
        Looks like you&apos;ve ventured into uncharted territory.
      </p>
      <Link href="/">
        <p className="text-blue-500 underline">Go back home</p>
      </Link>
    </div>
  );
};

export default NotFound;
