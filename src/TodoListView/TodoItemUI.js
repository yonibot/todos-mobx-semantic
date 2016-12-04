import React, {Component} from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';

const Styles = {
  trashBin: {
    paddingLeft: '15px'
  },
  item: {
    paddingLeft: '7px'
  }
}

@observer 
class TodoItemUI extends Component {

  handleToggleCompleted = () => {
    let { todo } = this.props;
    this.props.toggleCompleted(todo);
  }

  handleDeleteTodo = () => {
    let { todo } = this.props;
    this.props.deleteTodo(todo);
  }  

  render() {
    let { todo } = this.props;
    return (
      <div>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.handleToggleCompleted } />
        <span 
          className={ todo.completed ? 'completedItem' : 'validItem'}
          style={ Styles.item }>
          { todo.title }
        </span>
        <Icon
          style={ Styles.trashBin }
          name='trash outline'
          onClick={ this.handleDeleteTodo } />
      </div>
    )
  }
}
TodoItemUI.propTypes = {
  todo: React.PropTypes.object.isRequired,
  toggleCompleted: React.PropTypes.func.isRequired,
  deleteTodo: React.PropTypes.func.isRequired
}

export { TodoItemUI as default };