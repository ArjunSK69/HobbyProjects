import { Component } from "react";
import "./TodoApp.css";
export class TodoApp extends Component {
  state = {
    input: "",
    items: []
  };

  //Arrow function
  handleChange = (event) => {
    if(event.target.value !== ""){
      this.setState({
        input: event.target.value
      })
    }
  };

  storeItem = (event) => {
    event.preventDefault()
    const {input} = this.state;
    if(input !== ""){
      this.setState({
        items: [...this.state.items, input],
        input: ""
      })
    }
  }

  deleteItem = key => {
    const allItems = this.state.items
    allItems.splice(key, 1)
    this.setState({
      items: allItems
    })
  }

  modifyItem = key => {
    let alldata = this.state.items
    let newData = prompt("Edit", alldata[key])
    if (newData != null){
      alldata[key] = newData
    }
    this.setState({
      items: alldata
    })
  }

  todoItemStatus = key => {
    
  }


  render() {
    const {input, items} = this.state;
    
    return (
      <div className="todo-bg-container d-flex flex-row justify-content-center pt-5">
        <div className="">
          <form className="todo-box mb-4" onSubmit={this.storeItem}>
            <h1 className="todo-heading">Todo App</h1>
            <input type="text" value={input} onChange ={this.handleChange} name="" id="" className="form-control" />
            <input type="submit" value="Add" className="btn btn-primary mt-3" />
          </form>
          <ul className="">
            {items.map((data, index) => (
              <li key={index} className="todo-list  p-2 d-flex flex-row justify-content-between mb-2">
                <div className="d-flex flex-row">
                  <input type="checkbox" name={`todoCheckbox${index}`} id={`todoCheckbox${index}`} className="" onChange={()=>this.todoItemStatus(index)}/>
                  <label htmlFor={`todoCheckbox${index}`} className="todo-label">{data}</label>
                </div>
                <div className="">
                  <i className="fa-solid fa-pen-to-square" onClick={()=>this.modifyItem(index)}></i>
                  <i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
