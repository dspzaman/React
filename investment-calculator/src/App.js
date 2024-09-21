import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {
  const [usersInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 12,
  });

const inputIsValid = usersInput.duration >= 1;
  function handleChange(inputIdentifier, newValue){
    setUserInput(preUserInput => ({
            ...preUserInput,
            [inputIdentifier]: +newValue
    }));
}

  return (
    <>
    <Header />
    <UserInput usersInput={usersInput} onChangeInput={handleChange} />
    {inputIsValid ? <Results inputchange = { usersInput } /> : <p className='center'>Please Enter Valid Data</p>}
    </>
  );
}

export default App;
