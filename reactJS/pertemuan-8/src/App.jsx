import './App.css'
import { useState } from 'react'

function App() {

  const [nama,setNama] = useState("")

  // const handleClick = () => {
  //   alert("Hello world")
  // };

  const handleChange = (event) => {
    setNama(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()//supaya tidak reload page
    alert(`ketikan dari user adalah: ${ketik}`)
  };


  return (
    <>
      <h2>Belajar event handler</h2>
      {/* <button onClick={() => handleClick()}>Klik saya</button> */}
      {/* <input type="text" name="nama" value={nama} onChange={() => handleChange(event)} /> */}
      <h2>{nama}</h2>
    </>
  );
}

export default App
