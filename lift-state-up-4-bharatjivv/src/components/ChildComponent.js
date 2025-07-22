import React from 'react';

const ChildComponent = ({ cartItems, onRemove }) => {
  return (
    <div className="child">
      { (
        <>
        <h2>Child Component</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span id="itemName">{item.name}</span> - 
              <span id="itemPrice"> ${item.price.toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        </>
      )}
    </div>
  );
};

export default ChildComponent;
