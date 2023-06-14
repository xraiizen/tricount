import React, { useState } from 'react';
import ExpenseCreate from '../components/ExpenseCreate';
import ExpenseList from '../components/ExpenseList';
const ExpenseScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshExpenseList = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div>
 <ExpenseCreate refreshExpenseList={refreshExpenseList} />
      <ExpenseList key={refreshFlag} />
    </div>
  );
};

export default ExpenseScreen;
