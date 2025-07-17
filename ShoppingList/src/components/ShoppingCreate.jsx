import React, { useState } from 'react'
import '../css/all.css'

function ShoppingCreate({ onAddItem }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');

    const HandleAdd = () => {
        if (!name || !amount || !price) return;
        const item = {
            id: Date.now(),
            name,
            amount: Number(amount),
            price: Number(price)
        };
        onAddItem(item);
        setName('');
        setPrice('');
        setAmount('');
    }

    return (
        <div className='create-inputs'>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Product Name' />
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='Product Amount' />
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder='Product Price' />
            <button className='create-button' onClick={HandleAdd}>Add</button>
        </div>
    )
}

export default ShoppingCreate