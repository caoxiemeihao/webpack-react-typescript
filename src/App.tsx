import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/layouts/Layout/Layout";

import './assets/css/minireset.css';
import './assets/css/normalize.css';
import './App.less';

class App extends Component {
  render() {
    return <Layout />
  }
}

(ReactDOM.render || ReactDOM.hydrate)(
  <App />,
  document.getElementById('app'),
);
