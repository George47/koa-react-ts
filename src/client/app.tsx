import * as React from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { routes } from 'routes';

import Home from './components/home';
import Table from './components/table';

export interface IAppProps {
}

// const pages = {
//   [routes.home.name]: Home,
// };

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/table" component={Table} />
          </Switch>
      </Router>
    );
  }
}
