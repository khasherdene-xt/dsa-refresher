const maxProfit = (prices: number[]) => {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];
    minPrice = Math.min(minPrice, currPrice);
    maxProfit = Math.max(maxProfit, currPrice - minPrice);
  }

  return maxProfit;
};

const prices = [7, 15, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
