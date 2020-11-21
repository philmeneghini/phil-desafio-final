import React from 'react';

export default function Transaction({ description, value, type }) {
  if (type === '-') {
    return (
      <div styles={styles.negativeColor}>
        {description} - {value}
      </div>
    );
  }
  if (type === '+') {
    return (
      <div styles={styles.positiveColor}>
        {description} + {value}
      </div>
    );
  }
}

const styles = {
  positiveColor: {
    color: '#27ae60',
    fontWeight: 'bold',
  },

  negativeColor: {
    color: '#c0392b',
    fontWeight: 'bold',
  },
};
