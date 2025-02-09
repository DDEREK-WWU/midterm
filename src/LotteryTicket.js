import React from "react";

function LotteryTicket({selectedNumbers}) {


    return (
        <div className="lottery-ticket">
            <h2>Lottery Ticket</h2>
            <ul>
                {selectedNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
}

export default LotteryTicket;
