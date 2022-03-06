import './App.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
import { actionCreators } from './state/index';
import SelectGenre from './components/molecules/SelectGenre/SelectGenre';
import SelectSubgenre from './components/molecules/SelectSubgenre/SelectSubgenre';

function App() {
  const state = useSelector((state) => state.bank);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // const [displayedStep, setDisplayedStep] = useState(0);

  return (
    <div className="mainContainer">
      {/* <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button> */}
      <SelectGenre />
      <SelectSubgenre />
    </div>
  );
}

export default App;
