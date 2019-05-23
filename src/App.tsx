import React, { Component } from 'react';
import uuid from 'uuid';
import SimpleStorage from 'react-simple-storage';
import ToDos from './components/ToDos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import './App.css';

export default class App extends Component {
  state: { toDos: { id: string; title: string; completed: boolean }[] } = {
    toDos: []
  };

  markComplete = (id: string) => {
    this.setState({
      toDos: this.state.toDos.map(toDo => {
        if (toDo.id === id) {
          toDo.completed = !toDo.completed;
        }
        return toDo;
      })
    });
  };

  deleteToDo = (id: string) => {
    this.setState({
      toDos: [...this.state.toDos.filter(toDo => toDo.id !== id)]
    });
  };

  addToDo = (title: string) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <Header />
        <AddToDo addToDo={this.addToDo} />
        <ToDos
          toDos={this.state.toDos}
          markComplete={this.markComplete}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}
