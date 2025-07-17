import React from 'react'

function ShoppingItem({ item, onRemoveItem }) {
    return (
        <div style={{ border: '1px solid gray', margin: '8px', padding: '8px' }}>
            <p>🧺 {item.name} — {item.amount} x {item.price} ₺</p>
            <button onClick={() => onRemoveItem(item.id)}>Sil</button>
        </div>
    );
}

export default ShoppingItem;