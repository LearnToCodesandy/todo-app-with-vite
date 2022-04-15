import React, { useEffect, useState } from 'react'
import TodoItem from './comps/TodoItem';
import './App.css';

const App = () => {
    const [todos,setTodos] = useState([]);
    const [todo,setTodo] = useState('');

    useEffect(()=>{
        const todoInstance = localStorage.getItem('todos');
        if(todoInstance){
            setTodos(JSON.parse(todoInstance));
        }else{
            console.log('hello!!!');
        }
    },[])

    // handlers
    const handleForm = (e)=>{
        e.preventDefault();
        const latestTodos = [{todo,state:false},...todos]
        localStorage.setItem('todos',JSON.stringify(latestTodos));
        setTodos(latestTodos);
        setTodo('');
    }

    const deleteTodoHandler = (index)=>{
        const filteredTodos = todos.filter((todo,ind)=>{
            if(ind !== index) return todo;
        });
        localStorage.setItem('todos',JSON.stringify(filteredTodos))
        setTodos(filteredTodos);
    };

    const handleTodoState = (ind)=>{
        const filteredTodos = todos.filter((todo,index)=>{
            if(index === ind){
                todo.state = !todo.state;
            }
            return todo;
        })
        localStorage.setItem('todos',JSON.stringify(filteredTodos))
        setTodos(filteredTodos);
    }

  return (
    <div>
        <form className="todoform" onSubmit={handleForm}>
            <input type="text" placeholder='add new todo...' value={todo} onChange={e=>setTodo(e.target.value)}/>
            <input type="submit" value="Add todo"/>
        </form>
        <div className="todolist">
            {
                todos.length !== 0 ? todos.map((todo,index)=>(<TodoItem todo={todo} index={index} deleteTodoHandler={deleteTodoHandler} handleTodoState={handleTodoState}/>)) : <p>No todos</p>
            }
        </div>
    </div>
  )
}

export default App;