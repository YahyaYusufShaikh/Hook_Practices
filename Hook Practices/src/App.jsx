import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [render, setRender] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setRender(false);
    }, 5000)
  })
    return (
    <>
      <MyComponent/>
      {render?<MyComponent2/>:<div>Render is false</div>} 
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
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>);
}

function MyComponent2()
{
  useEffect(()=>{
    console.log("Component Mounted");
    return ()=>{
      console.log("Component Unmounted");
    }
  }, []);
  return <div>
    From Inside my Component
  </div>
}

export default App
