export function formatTotalPrice(prices: number[]) {
  // Calculate the total price
  const totalPrice = prices.reduce((sum, price) => sum + price, 0);

  // Format the total price with two decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  return formattedTotalPrice;
}
