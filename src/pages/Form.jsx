import React, { useState } from 'react';
import Navbar from '../components/Navbar'

export default function FormInput() {
  const [hasil, setHasil] = useState({
    num1:"",
    num2:"",
    output:''
  });
  
  function handleChange(e) {
    const { name, value } = e.target;

    setHasil(prevValue => {
      const updatedValue = { ...prevValue, [name]: value };
      return updatedValue;
    });
    
  }

  function handleTambah() {
    const result = Number(hasil.num1) + Number(hasil.num2);
    setHasil({ ...hasil, output: result });
  }

  function handleKurang() {
    const result = Number(hasil.num1) - Number(hasil.num2);
    setHasil({ ...hasil, output: result });
  }

  function handleKali() {
    const result = Number(hasil.num1) * Number(hasil.num2);
    setHasil({ ...hasil, output: result });
  }

  function handleBagi() {
    const result = Number(hasil.num1) / Number(hasil.num2);
    setHasil({ ...hasil, output: result });
  }

  return (
    <>
      <Navbar/>
      <div className="mt-5 ms-5 ">
        <h1>Hasil: {hasil.output}</h1>
        <input className='me-2' placeholder="Number One" name="num1" type='number' value={hasil.num1} onChange={handleChange} />
        <input placeholder="Number Two" name="num2" type='number' value={hasil.num2} onChange={handleChange}/>
      </div>
      <div className='container mt-2 ms-5'>
        <button color='primary' onClick={handleKali}>KALI</button>
        <button className='ms-2 me-2' onClick={handleBagi}>BAGI</button>
        <button onClick={handleKurang}>KURANG</button>
        <button className='ms-2' onClick={handleTambah}>TAMBAH</button>
      </div>
    </>
  );
}
