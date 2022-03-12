import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const Store=useSelector((store)=>store)
  let dispatch=useDispatch()
console.warn(Store)
  const handleMul=()=>{
    dispatch({type:'MULTIPLY_NUM'})
  }
  console.warn(Store)
  return (
    <>
    <div className="App">
      <header className="App-header">
      <div>Counter:{Store.calculator.count}</div>
      <div><button onClick={handleMul}>MULT RESULT</button></div>
      <div>
        {Store.todoList.map(todo=><div>{todo}</div>)}
      </div>
        
      </header>
    </div>
    </>
  );
}

export default App;
