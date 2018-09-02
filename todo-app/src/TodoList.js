import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

	render() {
		const list = this.props.todoList;
		const todoList = list.map((todo, i) => 
			<li key={'todo_'+i}>
				<Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
			</li>);

		return (<ul>{todoList}</ul>);
	}
}

console.log(TodoList.todos);

