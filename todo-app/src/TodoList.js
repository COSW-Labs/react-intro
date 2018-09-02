import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

	render() {
		const list = this.props.items;
		console.log("lista:",list);
		const todoList = list.map((todo) => 
			<li key={todo.id}>
				<Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
			</li>);

		return (<ul>{todoList}</ul>);
	}
}
