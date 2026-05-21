import './App.css'
import { useState } from 'react'

function App() {
 
  //useState
  const [count, setCount] = useState(0);

  
  
  return (
    <>
     <h1>{count}</h1>
     <button onClick={() => setCount(count - 1)}>Minus</button>
     <button onClick={() => setCount(count + 1)}>Plus</button>
    </>
  )
}

export default App
