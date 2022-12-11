import React from "react";
import CoinSearch from "../components/CoinSearch";
import TrendingCoins from "../components/TrendingCoins";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <TrendingCoins />
    </div>
  );
};

export default Home;
