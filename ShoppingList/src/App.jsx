import { useState } from 'react'
import './css/all.css'

import './App.css'
import ShoppingCreate from './components/ShoppingCreate'
import ShoppingList from './components/ShoppingList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className='shop-list'>
      <h2 style={{ alignItems: 'center' }}> 🛒Shopping List</h2>
      <ShoppingCreate onAddItem={addItem} />
      <ShoppingList items={items} onRemoveItem={removeItem} />
    </div>
  )
}

export default App
