import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

interface AddToDoProps {
    addToDo: (title: string) => void;
}

export default class AddToDo extends Component<AddToDoProps> {
    state = {
        title: ''
    };

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Card style={{ margin: '5px 5px' }}>
                <form onSubmit={this.onSubmit} style={{ margin: '7px 12px' }}>
                    <TextField
                        id='add-to-do'
                        label='Add To Do Items'
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                        style={{ minWidth: '194.4px' }}
                    />
                    <Fab
                        color='secondary'
                        aria-label='Add'
                        onClick={this.onSubmit}
                        style={{ marginLeft: '10px' }}
                    >
                        <AddIcon />
                    </Fab>
                </form>
            </Card>
        );
    }
}
