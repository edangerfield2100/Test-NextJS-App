import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-4 bg-slate-800">
      <div className="text-white">
        <Link href="/" className="ml-4 text-4xl">
          Home
        </Link>
        <Link href="/about" className="ml-4 text-4xl">
          About
        </Link>
        <Link href="/profile" className="ml-4 text-4xl">
          Profile
        </Link>
        <Link href="/coins" className="ml-4 text-4xl">
          Coins
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
