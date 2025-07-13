import { useState } from 'react'

import './App.css'

function App() {

  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortlamaBul = () => {
    debugger;
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  }
  const topla = () => {
    debugger;
    const toplam = vize1 + vize2;
    return toplam;
  }
  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortlama : " + sonuc)
  }

  return (

    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => { setVize1(Number(e.target.value)) }}></input>
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => { setVize2(Number(e.target.value)) }}></input>
      </div>
      <div>
        <button onClick={ortlamaBul}>Ortlama Bul</button>
      </div>
    </div>





  )
}

export default App
