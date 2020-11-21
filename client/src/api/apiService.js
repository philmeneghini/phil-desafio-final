import axios from 'axios';
/*
revisar isso aqui
*/

const API_URL = 'http://localhost:3001/api/transaction';

//serve pra jogar pro backend
//const algumacoisa = await api.get(`${RESOURCE}?period={yearMonth}`)

// fazer com api.métodoHTTP pra buscar do backend

//implementar getAllPeriods
/*

function _prepareTransaction(transaction){
  const { description, category, _id: id, month, ...otherFields} = transaction;
  return {
    id, description,
    cateory,
    month,
    descriptionLowerCase: description.tolowercase();
    categorylowercase
    montDescription
    ...otherFields
  }
}
*/

// async function getAllTransactions() {
//   const res = await axios.get(`${API_URL}/findAll`);

//   const transactions = res.data.transactions.map((transaction) => {
//     const { description, value, yearMonth, type } = transaction;
//     return {
//       ...transaction,
//       descriptionLowerCase: description.toLowerCase(),
//     };
//   });

//   return transactions;
// }

async function getTransactions(period) {
  const res = await axios.get(`${API_URL}/findTP/?period=${period}`);

  console.log(res.data);

  const transactions = res.data.map((transaction) => {
    const { description, value, yearMonth, type } = transaction;
    return {
      description,
      value,
      yearMonth,
      type,
      descriptionLowerCase: description.toLowerCase(),
    };
  });

  return transactions;
}

// async function getOneTransaction(id) {
//   const res = await axios.get(`${API_URL}/findOne/${id}`);

//   const transaction = {
//     ...res.data.transactions,
//     descriptionLowerCase: res.data.transactions.description.toLowerCase(),
//   };

//   return transaction;
// }

async function insertTransaction(transaction) {
  const response = await axios.post(`${API_URL}/create`, transaction);
  return response.data.id;
}

async function updateTransaction(transaction) {
  const response = await axios.put(API_URL, transaction);
  return response.data;
}

async function deleteTransaction(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

export default {
  // getAllTransactions,
  getTransactions,
  // getOneTransaction,
  insertTransaction,
  updateTransaction,
  deleteTransaction,
};
