import React, { useEffect, useState } from 'react';
import IncomeTotal from './components/IncomeTotal.js';
import ExpensesTotal from './components/ExpensesTotal.js';
import ChooseMonth from './components/ChooseMonth.js';
import date_create from './helpers/dateHelper.js';
import { getCurrentDate } from './helpers/dateHelper';

export default function App() {
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [mesCorrente, setMesCorrente] = useState(date_create);

  /*
  const handleChosenMonth = (chosenMonth) => {
    setMesCorrente(chosenMonth);
  };
  onChosenMonth={handleChosenMonth}
  */

  return (
    <div>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      <ChooseMonth selectedMonth={mesCorrente} />
      <IncomeTotal selectedMonth={mesCorrente} />
      <ExpensesTotal selectedMonth={mesCorrente} />
    </div>
  );
}
