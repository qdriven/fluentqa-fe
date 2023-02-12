import React, { useState } from "react";
import { EditTodo, ITodo, RemoveTodo, ToggleTodo, UpdateTodo } from "../../todo/types";
import ToDoForm from "./TodoForm";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface TodoItemProps {
    todos: ITodo[];
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
    updateTodo: UpdateTodo;
  }

  const TodoItem: React.FC<TodoItemProps> = ({ todos, toggleTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({ id: 0, value: '' });
  
    const editTodo: EditTodo = (newTodo) => {
      updateTodo(edit.id, newTodo);
      setEdit({ id: 0, value: '' });
    };
  
    if (edit.id) {
      return <ToDoForm edit={edit} onSubmit={editTodo} />;
    }
  
    return (
      <>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className={todo.completed ? 'todo-row complete' : 'todo-row'}>
              <div className='pointer' onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </div>
              <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
              </div>
            </div>
          );
        })}
      </>
    );
  };
  
  export default TodoItem;