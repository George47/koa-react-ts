import * as React from 'react';
import '../styles/index.scss';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
