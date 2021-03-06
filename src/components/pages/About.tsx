import React from 'react';
import { Card } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

export default function About() {
    return (
        <React.Fragment>
            <Card style={{ padding: '10px 15px', margin: '5px 5px' }}>
                <h1>About</h1>
                <p>
                    This is the To Do List App v1.0.0.
                    <br />
                    It is built using React with TypeScript.
                    <br />
                    Your to do list items are stored in local storage thanks to{' '}
                    <a
                        href='https://www.npmjs.com/package/react-simple-storage'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='React Simple Storage Page'
                    >
                        React Simple Storage
                        <LaunchIcon className='launchIcon' />
                    </a>
                    .
                    <br />
                    The source code can be found{' '}
                    <a
                        href='https://github.com/JohnBendfeldt/todo-list-ts-react'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='App Github Page'
                    >
                        here
                        <LaunchIcon className='launchIcon' />
                    </a>
                    .
                </p>
            </Card>
        </React.Fragment>
    );
}
