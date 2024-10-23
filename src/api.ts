const BASE_URL = "https://api.coinpaprika.com/v1";

const fetchCoins = async () => {
  const response = await fetch(`${BASE_URL}/coins`);
  return await response.json();
};

const fetchCoinInfo = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await response.json();
};

const fetchCoinTickers = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await response.json();
};

const fetchCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 3;
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  );
  return await response.json();
};

export { fetchCoins, fetchCoinInfo, fetchCoinTickers, fetchCoinHistory };
