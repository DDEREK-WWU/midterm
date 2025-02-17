import React from 'react';
import { Button } from '@mui/material';

function CashInput({cashTotal, setCashTotal, selectedNumbers}) {
   
    const handleCashClick = (amount) => {
        if (selectedNumbers.length < 5) {
          alert("You must select 5 numbers to play.");
        } else if (cashTotal + amount > 100) {
            alert("You can only spend up to $100.");
        } else {
            setCashTotal(cashTotal + amount);
        }
    };

    return (
        <div className="cash-input">
            <h2>Cash Input</h2>
            <Button variant="contained" color="primary" onClick={() => handleCashClick(1)}>$1</Button>
            <Button variant="contained" color="primary" onClick={() => handleCashClick(5)}>$5</Button>
            <Button variant="contained" color="primary" onClick={() => handleCashClick(10)}>$10</Button>
            <Button variant="contained" color="primary" onClick={() => handleCashClick(20)}>$20</Button>
        </div>
    );
}

export default CashInput;