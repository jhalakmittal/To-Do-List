import React from 'react';
import {useState} from 'react';

export const AddTodo = ({addTodo}) => {
     const [title,setTitle]=useState("");
     const [descp, setDescp] = useState("");


    const submit=(e)=>{
        e.preventDefault();
        if(!title || !descp){
            alert("Title or description cannot be blank")
        }
        else{
        addTodo(title,descp);
        setTitle("");
        setDescp("");
        }
    }

    return (
        <div className="container my-3">
        <h3>Add a to-do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="descp" className="form-label">Description</label>
                    <input type="text" value={descp} onChange={(e)=>{setDescp(e.target.value)}} className="form-control" id="descp" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
            </form>
        </div>
    )
}
