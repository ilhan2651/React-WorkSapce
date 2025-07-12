import './App.css'
import Container from './Container';
import Product from './Product'

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <Product productName="Pantolon" price={900} />
      <Product productName={productName} price={15000}></Product> */}
      <Container>
        <Product productName="Dolap" price={10000} />
      </Container>


    </div>
  )
}

export default App
