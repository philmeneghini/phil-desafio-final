import React from 'react';
import Transaction from './Transaction.js';

export default function Transactions({
  transactions,
  //  onDeleteTransaction,
  //  onEditTransaction,
}) {
  let transactionsRender = [];
  const renderTransactions = () => {
    for (let i = 0; i < transactions.length; i++) {
      console.log('entrou no for');
      transactionsRender.push(
        <Transaction
          key={i}
          description={transactions[i].description}
          value={transactions[i].value}
          type={transactions[i].type}
        />
      );
    }
  };

  renderTransactions();
  console.log('Transactions Render abaixo:');
  console.log(transactionsRender);
  return <div style={styles.flexColumn}>{transactionsRender}</div>;
  /*
  //<Transaction />
  return (
    <div>
      <p>TRANSACTIONS CARAI</p>
      {sabara}
    </div>
  );
  */
}

const styles = {
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center-align',
    marginBottom: '40px',
  },
};
