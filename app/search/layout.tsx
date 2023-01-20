import React from "react";
import Search from "./search";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div className="w-48">
        <h1>News Search</h1>
      </div>
      <div className="flex-1 pl-5">
        {/* @ts-ignore */}
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
