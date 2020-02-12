import React, { useState } from "react";
import Items from "./Items";
import Forms from "./Forms";

const ToDo = () => {
  const [items, setItems] = useState([
    {
      todoItem: "Deploy on netlify",
      isCompleted: false
    },
    {
      todoItem: "build really cool todo App",
      isCompleted: false
    },
    {
      todoItem: "Call Mom",
      isCompleted: false
    }
  ]);

  const addTodo = todoItem => {
    const newItems = [...items, { todoItem }];
    setItems(newItems);
  };

  const completedItem = index => {
    const newItems = [...items];
    newItems[index].isCompleted = true;
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className='Todo-Container'>
      <div>
        <h5>Hi, Luis. Here's what you've got going on this week.</h5>
        <h3>Feb 10, 2020 </h3>
      </div>
      <div>
        {items.map((item, index) => (
          <Items
            key={index}
            index={index}
            item={item}
            completedItem={completedItem}
            removeItem={removeItem}
          />
        ))}
        <Forms addTodo={addTodo} />
      </div>
    </div>
  );
};

export default ToDo;
