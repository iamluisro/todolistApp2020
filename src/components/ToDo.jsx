import React, { useState, useEffect } from "react";
import Items from "./Items";
import Forms from "./Forms";
import useLocalStore from "./useLocalStorage";

const ToDo = () => {
  const [items, setItems] = useLocalStore("items", [
    {
      todoItem: "These are demo items",
      isCompleted: false
    },
    {
      todoItem: "Click on 'Complete' to mark the task as Complete.",
      isCompleted: false
    },
    {
      todoItem: "Click on the 'X' to delete an item.",
      isCompleted: false
    },
    {
      todoItem: "Click on 'Clear List' at the bottom to start your own list.",
      isCompleted: false
    },
    {
      todoItem: "Remember to call your Mom",
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

  const clearList = () => {
    setItems([]);
  };

  return (
    <div className='Todo-Container'>
      <div>
        <h5>Hi, there! Here's what you've got going on this week.</h5>
        <h3>Feb 10-17, 2020 </h3>
      </div>
      <div>
        <ol>
          {items.map((item, index) => (
            <Items
              key={index}
              index={index}
              item={item}
              completedItem={completedItem}
              removeItem={removeItem}
            />
          ))}
        </ol>
        <Forms addTodo={addTodo} />
        <button className='ClearList-Button' onClick={() => clearList()}>
          {" "}
          Clear list{" "}
        </button>
      </div>
    </div>
  );
};

export default ToDo;
