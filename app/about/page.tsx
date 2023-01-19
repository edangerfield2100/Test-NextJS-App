import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="mt-8">
      <h3 className="flex justify-center text-2xl mb-4">About Page</h3>
      <div className="flex justify-center">
        <Link
          href="/"
          className="text-xl p-2 border-2 border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default About;
