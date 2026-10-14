const total = totalPrice(prices);
function receipt(name, prices) {
  return name + ' ordered nothing';
}
module.exports.receipt = receipt;

function receipt(name, prices) {
  const total = totalPrice(prices);
  if (prices.length === 0) {
    return name + ' ordered nothing';
  }
  return name + ' pays ' + total;
}
module.exports.receipt = receipt;
