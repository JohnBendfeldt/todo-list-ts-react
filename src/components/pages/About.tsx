import React from 'react';
import { Card } from '@material-ui/core';

export default function About() {
    return (
        <React.Fragment>
            <Card style={{ padding: '10px 15px', margin: '5px 5px' }}>
                <h1>About</h1>
                <p>
                    This is the To Do List App v1.0.0. Is is built using React
                    with TypeScript.
                </p>
            </Card>
        </React.Fragment>
    );
}
