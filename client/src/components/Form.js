import React from 'react';

export default function Form(props) {
  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    props.onFilterType(newFilter);
  };
  return (
    <div>
      <input
        type="text"
        title="Filtro:"
        placeholder="Texto do filtro"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
