import React, { useEffect, useState } from 'react';
import ChooseMonth from './components/ChooseMonth.js';
import Transactions from './components/Transactions';
import Summary from './components/Summary';
import Form from './components/Form';
import { toFilterText } from './helpers/filterHelper';
import date_create from './helpers/dateHelper.js';
import { searchDate } from './helpers/monthYearConverter.js';
import api from './api/apiService.js';
import { getCurrentDate } from './helpers/dateHelper';

export default function App() {
  // const [totalReceitas, setTotalReceitas] = useState(0);
  // const [totalDespesas, setTotalDespesas] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(date_create);
  const [currentTransactions, setCurrentTransactions] = useState([]);

  const [filterText, setFilterText] = useState('');

  // useEffect(() => {
  //   const getAllPeriods = async () => {
  //     const data = await api.getAllPeriods();
  //     setAllPeriods(data);
  //     setCurrentPeriod(getCurrentPeriod(data));
  //   };

  //   getAllPeriods();
  // }, []);

  const handleChangedMonth = (changedMonth) => {
    setCurrentMonth(changedMonth);
  };

  const handleFilterTyping = (filterTyped) => {
    setFilterText(filterTyped);
  };

  useEffect(() => {
    setCurrentMonth(currentMonth);
  }, [currentMonth]);

  useEffect(() => {
    const getSelectedTransactions = async () => {
      const data = await api.getTransactions(searchDate(currentMonth));
      setCurrentTransactions(data);
    };
    getSelectedTransactions();
  }, [currentMonth]);

  useEffect(() => {
    /*  if (filterText.trim() === '') {
      setCurrentTransactions([...currentTransactions]);
    } else {
    */ const filterTransactions = () => {
      const filteredTransactions = toFilterText(
        currentTransactions,
        filterText
      );
      setCurrentTransactions(filteredTransactions);
    };
    filterTransactions();
    //}
    //}, [filterText, currentTransactions]);
  }, [filterText]);

  return (
    <div>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      <ChooseMonth selectedMonth={currentMonth} />
      <Summary
        onMonthChange={handleChangedMonth}
        transactions={currentTransactions}
      />
      <Form onFilterType={handleFilterTyping} />
      <Transactions
        onMonthChange={handleChangedMonth}
        transactions={currentTransactions}
        //   onDeleteTransaction={handleDeleteTransaction}
        //     onEditTransaction={handleEditTransaction}
      />
    </div>
  );
}

/*
startar com const pro hook (usestate)
current transactions state[]
filtered transactions state[]
selected transactions statenull

allperiods []
currentperiod null
filtertext ''
summary null
ismodalopen false

effects
useEffect
const getAllPeriods = async() =>{
  const data = await api.getAllperiods();
  setAllPeriods(data);
  setCurrentPeriod(getCurrentPeriod(data));
};

getallPeriods();

outro effect
const fetchData = async () => {
  if (!currentPeriod) return

  else 
}

criar effect com o texto filtrado

if filterText
const newFilteredTransactions = currentTransactions.filter(transaction)=>
[filterText, currenttransactions]

effect para filtered transaction

effect para summaryze data
transactions

Renderização
period selector verificar se !isModalOpen

handles
atributo prefixo On -> evento (algo trocado, chega como prop)
aí precisa de uma função handle
pra receber o valor e renderizar na tela

<Actions
filterText
onFilter
IsModalOpen
onNewTransaction

handleInsertTransaction -> setSElectedTransaction(Null), ismodalopen True

<summary>

<transactions
transaction-filtered
onDeleteTransaction-handle
onEditTransaction-handle


const handleedittransaction = (id) => new find

delete chama do backend pra deletar


<modalTransaction

handleModalSave = async(newTransaction, mode) => {
  setIsModalOpen(false);
  if(mode ==='insert'){
    await api.postTransaction
    let newTransactions = [...currentTransactions, postedTransactions]
    newTransactions = sortTransactions
    setCurrentTransactions (newTransactions)
    setFilteredTransactions( newTransactions)
    setSelectedTransaction(null)
    inserir no frontend sem dar refresh na página, n precisa fazer um get denovo
  }
  if(mode ==='edit'){
    troca tudo abaixo pra update ao inves de new
    await api.postTransaction
    let newTransactions = [...currentTransactions, postedTransactions]
    newTransactions = sortTransactions
    setCurrentTransactions (newTransactions)
    setFilteredTransactions( newTransactions)
    setSelectedTransaction(null)
    inserir no frontend sem dar refresh na página, n precisa fazer um get denovo
  }
}


*/
