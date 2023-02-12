import React from 'react';
import './App.css';
import MoreShoopingList from './compoents/demo/MoreShoppingList';
import { ShoppingList } from './compoents/demo/ShoppingList';
import { SimpleH } from './compoents/demo/SimpleH';
import TodoList from './compoents/todo/TodoList';

const App: React.FC = () => {
  return (
    <>
      <div>
        <SimpleH />
        <ShoppingList />
        <MoreShoopingList shopping="shopping" />
      </div>
      <div className="todo-app">
          <TodoList />
       </div>
    </>

  );
}

export default App;
