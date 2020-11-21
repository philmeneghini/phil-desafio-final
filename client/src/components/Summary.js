/*if saldo > 0 style de receita (no css)
if saldo < 0 style de despesa (no css)

*/

import React from 'react';
import {
  calculateSum,
  calculateExpenses,
  calculateIncome,
} from '../helpers/mathHelper.js';

export default function Summary({ transactions }) {
  let launchesValues = [];
  let qtLaunches = 0;

  console.log('Transactions no summary abaixo');

  console.log(transactions);

  const prepareLaunches = () => {
    qtLaunches = transactions.length;
    for (let i = 0; i < transactions.length; i++) {
      launchesValues.push({
        value: transactions[i].value,
        type: transactions[i].type,
      });
      // launchesValues.push(transactions[i].value);
      // launchesValues.push(transactions[i].value);
    }
  };

  prepareLaunches();

  console.log('Launches Values abaixo');
  console.log(launchesValues);

  const totalSum = calculateSum(launchesValues);
  const totalIncome = calculateIncome(launchesValues);
  const totalExpenses = calculateExpenses(launchesValues);

  return (
    <div>
      <p>Lançamentos: {qtLaunches}</p>
      <p>Receitas: {totalIncome}</p>
      <p>Despesas: {totalExpenses}</p>
      <p>Saldo: {totalSum}</p>
    </div>
  );
}
