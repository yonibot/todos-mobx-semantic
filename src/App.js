import React, {Component} from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
useStrict(true);

class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title, finished=true) {
        this.title = title;
        this.finished = finished;
    }
}

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

@observer
class TodoListView extends Component {
  @action("Adding text to the input field")
  handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.props.todoList.todos.push(new Todo(e.target.value));
      e.target.value = '';
    }
  }

  render() {
      return (
        <div>
        <input onKeyPress={this.handleKeyPress}></input>
          <ul>
              {this.props.todoList.todos.map(todo =>
                  <TodoView todo={todo} key={todo.id} />
              )}
          </ul>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
          <DevTools />
      </div>
    )
  }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

class App extends Component {
  render() {
    return (
      <TodoListView todoList={new TodoList()} />
    )
  }
}

export default App;
