import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { dispatch , currency} = useContext(AppContext);

   

    const increaseAllocation = (name, cost) => {
        const expense = {
            name: name,
            cost: cost,
        };
    
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='1.5em' onClick={event => increaseAllocation(props.name, 10)}></FcPlus></td><td>
            <FaMinusCircle
                size='1.5em'
                onClick={event => increaseAllocation(props.name, -10)}
                style={{ color: 'red' }}
            />
        </td>
    </tr>
    );
};

export default ExpenseItem;