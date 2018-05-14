import React, {Component} from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }

    this.addToDo = this.addToDo.bind(this)
    this.toggleToDo = this.toggleToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
  }

  addToDo(item) {
    const todos = [...this.state.todos, {text: item, completed: false}]
    this.setState({todos})
  }

  toggleToDo(index) {
    const todos = this.state.todos
    todos[index].completed = !todos[index].completed
    this.setState({todos})
  }

  removeToDo(index) {
    const todos = this.state.todos.filter((_,i) => i !== index)
    this.setState({todos})
  }


  render() {
    return (
      <div className="app">
        <h1>ToDo</h1>
        <AddToDo addToDo={(item) => this.addToDo(item)}/>
        <ToDoList todos={this.state.todos}
                  toggleToDo={(index) => this.toggleToDo(index)}
                  removeToDo={(index) => this.removeToDo(index)}
        />
      </div>
    );
  }
}

export default App;