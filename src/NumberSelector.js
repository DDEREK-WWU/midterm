import {React, useState} from "react";
import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function NumberSelector({ selectedNumbers, onNumberClick, onClearNumbers, onRandomNumbers, cashTotal }) {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const popupOpen = (message) => {
    setAlertMessage(message);
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
    onClearNumbers();
  };

  const checkout = () => {
    if (selectedNumbers.length < 5) {
      alert("You must select 5 numbers to checkout.");
    } else if (cashTotal === 0) {
      alert("You must enter a cash amount to checkout.");
    } else {
      popupOpen(`You have selected the numbers ${selectedNumbers.join(", ")} for a total of $${cashTotal}.`);
    }
      
  }

  return (
    <div className="number-selector-container">
    <div className="number-selector">
        {[...Array(20).keys()].map(i => (
            <Button variant = "contained"
            key={i + 1}
            className={`number-button ${selectedNumbers.includes(i + 1) ? 'selected' : ''}`}
            onClick={() => onNumberClick(i + 1)}
            >
            {i+1}
            </Button>
        ))}

        </div>
        <div className = "reset-random-button"  style = {{marginTop: '20px', alignItems: 'center'}}>
            <ButtonGroup variant = "contained">
                <Button variant = "contained" color = "error" onClick={onClearNumbers}>Clear</Button>
                <Button variant = "contained" onClick={onRandomNumbers}>Random</Button>
                <Button variant = "contained" color = "success" onClick = {checkout} >Cash</Button>
            </ButtonGroup>
        </div>

   <Dialog
        open={open}
        onClose={popupClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Lottery Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={popupClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NumberSelector;