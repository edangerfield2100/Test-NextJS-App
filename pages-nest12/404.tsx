import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center text-3xl">Page Not Found</div>
      <div className="flex justify-center text-xl mt-8">
        Please verify the URL
      </div>
      <Link href="/" className="flex justify-center text-xl">
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
