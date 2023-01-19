import Axios from "axios";
import React from "react";

import { Coin } from "@/typings";

type PageProps = {
  params: {
    coinId: string;
  };
};

// This is a server-side render (rendered at request time)
const FetchCoin = async (coinId: string) => {
  const data = await Axios.get(
    `https://api.coinstats.app/public/v1/coins/${coinId}`
  );
  const coin: Coin = await data.data.coin;
  return coin;
};

async function CoinPage({ params: { coinId } }: PageProps) {
  const coin = await FetchCoin(coinId);

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
