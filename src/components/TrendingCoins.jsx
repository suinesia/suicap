import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  const truncateStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  //   console.log(trending);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className="rounded-div flex justify-between p-4 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 w-full items-center md:items-start justify-between">
              <Link to={`/coin/${coin.item.id}`}>
                <div className="flex items-center">
                  <img
                    className="h-10 mr-4 rounded-full"
                    src={coin.item.small}
                    alt={coin.item.name}
                  />

                  <div>
                    <p className="font-bold">
                      {truncateStr(coin.item.name, 10)}
                    </p>
                    <p className="text-xs">{coin.item.symbol}</p>
                  </div>
                </div>
              </Link>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="bitcoin"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
