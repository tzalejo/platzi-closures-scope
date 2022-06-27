/* function monyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`);
}

monyBox(5);
monyBox(5);
 */

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBoxAna = moneyBox();
console.log("Ana");
myMoneyBoxAna(5);
myMoneyBoxAna(5);
myMoneyBoxAna(5);

const myMoneyBoxPepe = moneyBox();
console.log("Pepe");
myMoneyBoxPepe(5);
myMoneyBoxPepe(35);
myMoneyBoxPepe(5);
