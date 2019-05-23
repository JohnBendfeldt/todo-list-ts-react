import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { Props } from '../types';

interface ToDosProps extends Props {
  toDos: { id: string; title: string; completed: boolean }[];
}

export default class ToDos extends Component<ToDosProps> {
  render() {
    return this.props.toDos.map(toDo => (
      <ToDoItem
        key={toDo.id}
        toDo={toDo}
        markComplete={this.props.markComplete}
        deleteToDo={this.props.deleteToDo}
      />
    ));
  }
}
