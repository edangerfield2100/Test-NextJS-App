import React from "react";
import CoinList from "./coinList";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <div className="w-48">
        {/* @ts-ignore */}
        <CoinList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default Layout;
