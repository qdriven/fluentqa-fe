import React, { useEffect, useRef, useState }  from "react";
import { OnSubmit } from "../../todo/types";

interface TodoFormProps {
    onSubmit: OnSubmit;
    edit?: { id: number; value: string };
  }
/**
 * 1. props: onSubmit and edit
 * 2. state, inputRef
 * 3. event handlers
 * @param param0 
 * @returns 
 */
const TodoForm: React.FC<TodoFormProps> = ({onSubmit,edit})=>{

    const [task, setTask] = useState(edit ? edit.value : '');
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current!.focus();
      });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
      };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        if (!task || /^\s*$/.test(task)) return;
        onSubmit({ id: Date.now(), text: task, completed: false });
        setTask('');
      };
    //for component layout
    return (
       <form className="todo-form">
            {edit?(
                <>
                   <input type="text" 
                    placeholder="update your item"
                    value = {task}
                    onChange={handleChange}
                    name='todo-text'
                    ref={inputRef}
                    className ="todo-input edit"
                   />
                   <button
                    onClick={handleSubmit}
                    className='todo-button edit'
                   >update todo</button>
                </>
            ):(
                <>
                  <input type="text" 
                    placeholder="Add a todo"
                    value={task}
                    onChange={handleChange}
                    name='todo-text'
                    className="todo-input add"
                    ref={inputRef}
                  />
                  <button onClick={handleSubmit} 
                       className='todo-button'>Add
                  </button>  
                </>
            )}
       </form>
    )
}  

export default TodoForm