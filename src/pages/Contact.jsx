import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const fileRef = useRef();
  const [img, setImg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImg(reader.result);
    }, false);

    if (file.type.includes('image/')) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <Navbar />
      <h1 className='mt-5 ms-5'>Contact</h1>
      <img src={img} alt='' />
      <form onSubmit={handleSubmit}>
        <input type='file' ref={fileRef} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
