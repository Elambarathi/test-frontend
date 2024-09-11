import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductAddPage from './ProductAddPage';
import ProductListPage from './ProductListPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-product" component={ProductAddPage} />
        <Route path="/" component={ProductListPage} />
      </Switch>
    </Router>
  );
}

export default App;
