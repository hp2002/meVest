import { useEffect, useState } from 'react';
import {Button, Card, ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const DAYS_IN_A_MONTH = 31;

function InputToday(props) {
  function handleNo() {
    props.decrement();
  }

  function handleYes() {
    props.increment();
  }

  return(
    <div>
      <Card className="today">
       Did you complete your goal today? 💪
        <Button onClick={handleNo} className="today-button" variant="danger">No.</Button>
        <Button onClick={handleYes} variant="success">Yes!</Button>
      </Card>
      <div>*The balance that you lose is donated to charities</div>
    </div>
  )
}

function App() {
  const [startAmount, setStartAmount] = useState(0.00);
  const [amount, setAmount] = useState(startAmount);
  const [goal, setGoal] = useState('...');
  const [days, setDays] = useState(1);
  const [noDays, setNoDays] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  function checkDays(TotalDays) {
    if(TotalDays >= DAYS_IN_A_MONTH) {
      alert("✨Congradulations! You completed a month, here are your stats✨\n The leftover balance has been added back to your account!\n Successful Days: " + days + "\n Unsuccessful Days: " + noDays);
      setDays(1);
      setNoDays(0);
      setAmount(0.0);
      setIsVisible(true);
    }
  }

  function handleInvest(e) {
    let money = prompt("Enter the amount you would like to meVest");
    setAmount(amount + parseFloat(money));
    setStartAmount(amount + parseFloat(money));
  }

  function incrementYesDays() {
    
    setDays(days + 1);
    checkDays(days + noDays);
  }

  function incrementNoDays() {
    
    if((amount - (startAmount/DAYS_IN_A_MONTH))<0) {
      setAmount(0);
    }
    else {
      setAmount(amount - (startAmount/DAYS_IN_A_MONTH));
    }
    setNoDays(noDays + 1);
    checkDays(days + noDays);
  }

  return (
    <div className="App">
      <h1>📈meVest📈</h1>
      <Card className='goal-card'>
        My goal is {goal}
        {isVisible && <Button className='add-goal-button' onClick={()=>{setGoal(prompt("My goal is...",""));setIsVisible(false)}}>Set Goal</Button>}
      </Card>
      
      <Card className='money-card'>
      Balance💸 ${amount.toFixed(2)}
      <Button onClick={handleInvest} className='invest-button' variant='success'>meVest</Button>
      </Card>

      <div className='progress-div'>
        <h3 className='progress-title'> Day {days + noDays}</h3>
        <ProgressBar>
          <ProgressBar variant="success" label={`${days-1}`} striped animated now={((days-1)/DAYS_IN_A_MONTH)*100} key={1}/>
          <ProgressBar variant="danger" label={`${noDays}`} striped animated now={(noDays/DAYS_IN_A_MONTH)*100} key={2}/>
        </ProgressBar>
      </div>
      <InputToday increment={incrementYesDays} decrement={incrementNoDays} />
    </div>
  );
}

export default App;
