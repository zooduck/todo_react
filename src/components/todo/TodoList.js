import React from 'react'
import {TodoItem} from './TodoItem' 

export const TodoList = (props) => {
	return (
		<div className="Todo-List" style={{display:'inline-block', textAlign: 'left'}}>
          <ul>
            {props.todos.map(todo => <TodoItem handleToggle={props.handleToggle} handleRemove={props.handleRemove} key={todo.id} {...todo} />)}           
          </ul>
        </div>
    )
}

TodoList.propTypes = {
	todos: React.PropTypes.array.isRequired
}