import React , {useState} from 'react';
import './App.css';
import NumberSelector from './NumberSelector';
import LotteryTicket from './LotteryTicket';
import CashInput from './CashInput';


function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [cashTotal, setCashTotal] = useState(0);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("You can only select up to 5 numbers.");
    }
  };
  
  const clearNumbers = () => {
    setSelectedNumbers([]);
    setCashTotal(0);
  };
  
  const randomNumbers = () => {
    const numbers = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setSelectedNumbers(numbers);
  }



  return (

    <div className="App">
      <h1>WHE WHE on D' Avenue</h1>
      <div className="main-container">
        <div className="left-column">
        <h2>Choose 5 numbers</h2>
          <NumberSelector 
            selectedNumbers={selectedNumbers} 
            onNumberClick={handleNumberClick}
            onClearNumbers={clearNumbers}
            onRandomNumbers={randomNumbers}
            cashTotal={cashTotal}
          />
          <CashInput 
            cashTotal={cashTotal} 
            setCashTotal={setCashTotal} 
            selectedNumbers={selectedNumbers} 
          />
        </div>
        <div className="right-column">
          <LotteryTicket 
            selectedNumbers={selectedNumbers} 
            cashTotal={cashTotal} 
          />
        </div>
      </div>
    </div>

  );
}

export default App;
