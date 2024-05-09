import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            setNewBudget(totalExpenses)
            alert("You cannot reduce the budget value lower than the spending");
        } else if (event.target.value > 20000) {
            setNewBudget(20000)
            alert(`The value cannot exceed remaining funds ${currency}20,000`);
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            {<span>Budget: {currency}</span> /*{budget} */}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;