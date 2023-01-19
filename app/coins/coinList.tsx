import { Coin } from "@/typings";
import Axios from "axios";
import Link from "next/link";
import React from "react";

const FetchCoins = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  const coins: Coin[] = await data.data.coins;
  return coins;
};

async function CoinList() {
  const coins = await FetchCoins();
  return (
    <>
      {coins.map((coin: Coin) => {
        return (
          <div key={coin.id}>
            <Link href={`/coins/${coin.id}`} className="flex items-center m-4">
              <img src={coin.icon} className="w-8 mr-4" />
              <span className="mr-4">{coin.name}</span>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default CoinList;
