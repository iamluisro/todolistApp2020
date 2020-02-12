import React from "react";
import "../styles/App.css";

const Items = ({ item, index, completedItem, removeItem }) => {
  return (
    <div style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
      <div key={index}>
        {item.todoItem}

        <button
          className='Complete-Button'
          onClick={() => completedItem(index)}
        >
          Complete
        </button>
        <button className='Remove-Button' onClick={() => removeItem(index)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Items;
