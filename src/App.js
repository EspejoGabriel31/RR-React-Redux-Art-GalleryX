import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, setID, fetchData } from './features/dataSlice'

function App() {
  
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  const renderImage = () => {
    if(data.data){
      return <img style={{'width' : '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title}/>
    }
    else{
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(reset())}>Clear</button>
        <button onClick={() => dispatch(increment())}>Next</button>
        <button onClick={() => dispatch(decrement())}>Back</button>
      </div>
      <input onChange={(e) => {dispatch(setID(Number(e.target.value))) }} />
      <div>
        {renderImage()}
      </div>
    </div>
  );
}

export default App;
