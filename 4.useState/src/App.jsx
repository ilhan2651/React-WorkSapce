import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// bir  statenin değeri set modunu kullanarak değiştirdiğinde component yeniden render edilir.
function App() {
  const [firstName, setFirstname] = useState('İlhan');
  const [lastName, setLastName] = useState('İlhan');
  const [names, setNames] = useState(["İlhan,Gökdeniz,Kader"]);
  const [userInfo, setUserInfo] = useState({ userName: "ilo", password: "2651" });
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setFirstname("Gök Deniz");
  }
  const showInfo = () => {
    setShow(true);
  }
  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if (count > 0)
      setCount(count - 1)
  }
  console.log("component render edildi")
  return (
    <div>
      {/* <div>{firstName} </div>
      <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}
      {/* {names.map((fName, index) => (
        <div key={index}>{fName}</div>

      ))} */}

      {/* {userInfo.userName} {userInfo.password} */}

      {show ? <div>{userInfo.userName} {userInfo.password} </div> : <div>Bilgiler Gösterilemedi </div>}
      <div><button onClick={showInfo}>Bilgileri Göster</button></div>
      <div>
        <div>{count}</div>
        <div><button onClick={arttir}>Arttır </button></div>
        <div><button onClick={azalt}>Azalt </button></div>

      </div>
    </div>

  )
}

export default App
