import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductAddPage from './ProductAddPage';
import ProductListPage from './ProductListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-product" component={ProductAddPage} />
        <Route path="/" component={ProductListPage} />
      </Routes>
    </Router>
  );
}

export default App;
