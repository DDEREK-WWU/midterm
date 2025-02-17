import React from "react";

function LotteryTicket({selectedNumbers, cashTotal}) {


    return (
        <div className="lottery-ticket">
            <h2>Numbers Selected</h2>
            <ul className = "number-list">
                {selectedNumbers.map((number, index) => (
                    <li key={index}> Derek: {number}</li>
                ))}
            </ul>
            <p className = "total"> Total: ${cashTotal}</p>
        </div>
    );
}

export default LotteryTicket;
