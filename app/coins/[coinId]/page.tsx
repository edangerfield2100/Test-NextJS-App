import Axios from "axios";
import React from "react";

import { Coin } from "@/typings";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    coinId: string;
  };
};

// Note: can force SSR, SSG or ISR using Fetch
//  SSG w/ Fetch: default (no second parm) or add second param {cache: 'no-cache'}
//  SSR w/ Fetch: add second param ({cache:'force-cache'})
//  ISR w/ Fecth: add second param ({next: {revalidate: X}})

const FetchCoin = async (coinId: string) => {
  // Axios example
  // const data = await Axios.get(
  //   `https://api.coinstats.app/public/v1/coins/${coinId}`
  // );
  //const coin: Coin = await data.data.coin;

  // Example using ISR
  const data = await fetch(
    `https://api.coinstats.app/public/v1/coins/${coinId}`,
    { next: { revalidate: 60 } }
  );
  const coin = await data.json();
  return coin.coin;
};

async function CoinPage({ params: { coinId } }: PageProps) {
  const coin = await FetchCoin(coinId);

  if (!coin) return notFound();

  return (
    <div className="p-2">
      <ul className="m-4 p-2 bg-gray-300 border-2 border-gray-300 shadow-lg">
        <li>
          Name:<span className="pl-2">{coin.name}</span>
        </li>
        <li>
          Price:<span className="pl-2">{coin.price}</span>
        </li>
        <li>
          Website:<span className="pl-2">{coin.websiteUrl}</span>
        </li>
        <li>
          Rank:<span className="pl-2">{coin.rank}</span>
        </li>
      </ul>
    </div>
  );
}

export default CoinPage;

// Statically prebuild the first ten coin pages
export async function generateStaticParams() {
  const data = await fetch(`https://api.coinstats.app/public/v1/coins/`);
  const coins = await data.json();

  const subsetOfCoins = coins.coins.splice(0, 10);

  // est array of the following format: [(coinId: <id>),...]
  const coinsArray = subsetOfCoins.map((coin: Coin) => ({
    coinId: coin.id.toString(),
  }));
  return coinsArray;
}
