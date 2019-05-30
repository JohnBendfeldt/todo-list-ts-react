import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import SimpleStorage from 'react-simple-storage';
import ToDos from './components/ToDos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from 'components/pages/About';
import './App.css';

export default class App extends Component {
    state: { toDos: { id: string; title: string; completed: boolean }[] } = {
        toDos: [
            {
                id: '1',
                title: 'Add something you need to do',
                completed: false
            }
        ]
    };

    firstToDoAdded: boolean = false;

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

    addToDo = async (title: string) => {
        if (title !== '') {
            const newTodo = {
                id: uuid.v4(),
                title,
                completed: false
            };
            await this.setState({
                toDos: [...this.state.toDos, newTodo]
            });
            if (!this.firstToDoAdded) {
                this.firstToDoAdded = true;
                this.markComplete('1');
            }
        }
    };

    render() {
        return (
            <Router>
                <div>
                    <SimpleStorage parent={this} />
                    <Header />
                    <div style={{ padding: '5px 24px' }}>
                        <Route
                            exact
                            path='/'
                            render={props => (
                                <React.Fragment>
                                    <AddToDo addToDo={this.addToDo} />
                                    <ToDos
                                        toDos={this.state.toDos}
                                        markComplete={this.markComplete}
                                        deleteToDo={this.deleteToDo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path='/about' component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}
