import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import { Props } from '../types';

interface ToDoItemProps extends Props {
    toDo: { id: string; title: string; completed: boolean };
}

export default class ToDoItem extends Component<ToDoItemProps> {
    getStyle = () => {
        return {
            textDecoration: this.props.toDo.completed ? 'line-through' : 'none',
            margin: '5px 5px'
        };
    };

    render() {
        const { id, title } = this.props.toDo;
        return (
            <Card style={this.getStyle() as any}>
                <p>
                    <Checkbox
                        checked={this.props.toDo.completed}
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {title}
                    <DeleteIcon
                        onClick={this.props.deleteToDo.bind(this, id)}
                        className='iconStyle'
                    />
                </p>
            </Card>
        );
    }
}
