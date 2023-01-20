// Define this a client-side component
"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <form className="mb-8" onSubmit={handleSearch}>
      <label>
        <span className="pr-4">News Type:</span>
        <select className="w-40 mr-4" value={search} onChange={handleChange}>
          <option value="handpicked">Handpicked</option>
          <option value="trending">Trending</option>
          <option value="latest">Latest</option>
          <option value="bullish">Bullish</option>
          <option value="bearish">Bearish</option>
        </select>
      </label>
      <input
        className="p-1 border-2 border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default Search;
