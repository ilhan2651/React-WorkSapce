import { useEffect, useState } from 'react'

import './App.css'



function App() {
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');
  useEffect(() => {
    console.log("Her Zaman Çalışır")
  });
  useEffect(() => {
    console.log("İlk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("İlk render edildiğinde ve FİRSTNAME state değeri değiştiğinde çalışır.")
  }, [firstName])

  useEffect(() => {
    console.log("İlk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır.")
  }, [lastName])

  useEffect(() => {
    console.log("İlk render edildiğinde ve hem LASTNAME hem FİRSTNAME state değeri değiştiğinde çalışır.")
  }, [lastName, firstName])

  return (
    <div>
      <div><button onClick={() => setFirstName("İlhan")}> Adı Değiştir</button></div>

      <div><button onClick={() => setLastName("Randa")}> Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
