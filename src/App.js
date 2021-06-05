import './App.css';
import React,{ useState,useEffect } from 'react';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import {AddTodo} from './myComponents/AddTodo';
import {About} from './myComponents/About';
import {Todos} from './myComponents/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  

  const onDelete = (todo)=>{
    console.log('i am on delete of todo',todo);
    // deleting this way in react doesnt workbox, you need to use useState
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos))
  }

const addTodo=(title,descp)=>{
  console.log('i am adding this todo',title,descp);
  let sno;
  if(todos.length===0){
    sno=1;

  }
  else{
   sno=todos[todos.length-1].sno+1;}
  const myTodo={
    sno:sno,
    title:title,
    desc:descp
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
 
}

  const [todos, setTodos]=useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  

  return (
    <>
    <Router>
      <Header title="My To-dos List " searchBar={true}/>
  <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
           <Route exact path="/about" >
            <About />
          </Route>
        </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
