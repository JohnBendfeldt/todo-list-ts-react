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

    handleEnterKeyPress = (onClick: any) => ({ key }: { key: any }) => {
        if (key === 'Enter') {
            onClick();
        }
    };

    render() {
        const { id, title, completed } = this.props.toDo;
        const { markComplete, deleteToDo } = this.props;
        return (
            <Card style={this.getStyle() as any}>
                <p>
                    <Checkbox
                        checked={completed}
                        onChange={markComplete.bind(this, id)}
                        onKeyPress={this.handleEnterKeyPress(
                            markComplete.bind(this, id)
                        )}
                    />
                    {title}
                    <DeleteIcon
                        onClick={deleteToDo.bind(this, id)}
                        onKeyPress={this.handleEnterKeyPress(
                            deleteToDo.bind(this, id)
                        )}
                        className='iconStyle'
                        tabIndex={0}
                    />
                </p>
            </Card>
        );
    }
}
