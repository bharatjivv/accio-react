import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 0.9 },
    { id: 3, name: 'Cherry', price: 2.0 }
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const handleAddItem = () => {
    if (!newItemName || !newItemPrice) return alert("Please fill both fields");

    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: parseFloat(newItemPrice)
    };

    setCartItems(prev => [...prev, newItem]);
    setNewItemName('');
    setNewItemPrice('');
  };


  return (
    <div className="parent">
      <h2>Parent Component</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          id="itemName"
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          id="itemPrice"
          type="number"
          placeholder="Item price"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ChildComponent cartItems={cartItems} onRemove={handleRemoveItem} />
    </div>
  );
};

export default ParentComponent;