import * as React from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Table from './components/table';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/table" component={Table} />
          <Route path="/" render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    );
  }
}

// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class app extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(app)
