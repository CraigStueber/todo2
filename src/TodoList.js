import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos:[]}
    this.create = this.create.bind(this);
  }
  create(newTodo){
      this.setState({
          todos: [...this.state.todos, newTodo]
      })
  }
  render(){
      const todos = this.state.todos.map(todo =>{
        return <Todo key={todo.id} task={todo.task} />  
      })
    return(
      <div>
        <h1>Todo List!</h1>
        <TodoForm createTodo={this.create}/>
        <ul>
            {todos}
        </ul>
        

      </div>
    )
  }
}
export default TodoList;