import { useState } from 'react'
import './App.css'

function App() {
    return (
    <>
      <MyComponent/>
    </>
  )
}

function MyComponent(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);

  const incrementCount=()=>{
    setCount(count+1);
  };

      return (<div>
        <p>
          {count}
        </p>
        <button onClick={incrementCount}>
          Increment
        </button>
      </div>);

}

export default App
