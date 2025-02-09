import React , {useState} from 'react';
import './App.css';
import NumberSelector from './NumberSelector';
import LotteryTicket from './LotteryTicket';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

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
  }
  
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
      <h1>Number Selector</h1>
        <NumberSelector 
          selectedNumbers={selectedNumbers} 
          onNumberClick={handleNumberClick}
          onClearNumbers={clearNumbers}
          onRandomNumbers={randomNumbers}
          />
        <LotteryTicket selectedNumbers={selectedNumbers}/>
    </div>
  );
}

export default App;
