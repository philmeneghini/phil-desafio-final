// function calculateSum(filteredTransactions) {
//   const values = filteredTransactions.map((transaction) => transaction.value);
//   const totalSum = values.reduce((acc, curr) => acc + curr, 0);
//   return totalSum;
// }

function calculateSum(launches) {
  const totalSum = launches.reduce((acc, curr) => {
    if (curr.type === '-') {
      return acc - curr.value;
    } else {
      return acc + curr.value;
    }
  }, 0);
  return totalSum;
}

function calculateIncome(launches) {
  const totalIncome = launches
    .filter((launch) => launch.type === '+')
    .reduce((acc, curr) => acc + curr.value, 0);

  return totalIncome;
}

function calculateExpenses(launches) {
  const totalExpenses = launches
    .filter((launch) => launch.type === '-')
    .reduce((acc, curr) => acc + curr.value, 0);

  return totalExpenses;
}

export { calculateSum, calculateIncome, calculateExpenses };
