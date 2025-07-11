import './App.css'

function App() {
  // let a = 23;
  // const firstName = "Enes";
  // let vize = 60;
  // let final = 40;
  // let sonuc = true;
  let isimler = [
    "Enes",
    "Adem",
    "İlhan",
    "Mert"
  ]
  return (
    <div>
      {/* <p>İlhan {a} yaşında</p>
      <p>Müşterinin adı : {firstName}</p> */}
      {/* <p>Ortalama:{(vize + final) / 2}</p> */}
      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın,kaybol</p>} */}
      {
        // (vize + final) / 2 >= 50 ? <p>Dersten geçtin.</p> : <p>Kaldın</p>
      }
      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
