import React from 'react';
import '../styles/index.scss';

export default class App extends React.PureComponent {
    componentDidMount() {
        console.log('hit');
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}