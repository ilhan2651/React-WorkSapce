import React from 'react'
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, onRemoveItem }) {
    const total = items.reduce((acc, item) => acc + item.amount * item.price, 0);
    return (
        <div>
            <h3>Ürünler</h3>
            {
                items.map(item => (
                    <ShoppingItem key={item.id} item={item} onRemoveItem={onRemoveItem} />

                ))
            }
            <h4> Toplam:{total.toFixed(2)} ₺</h4>

        </div>
    );
}

export default ShoppingList