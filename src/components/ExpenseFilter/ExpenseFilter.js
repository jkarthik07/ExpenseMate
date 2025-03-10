// import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const filterHandler = (event) => {
    if (event && event.target && event.target.value) {
      console.log(event.target.value);
      props.filterYear(event.target.value);
    }
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={filterHandler}>
          <option value='All'>All</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;