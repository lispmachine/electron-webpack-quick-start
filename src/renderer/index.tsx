import * as React from 'react';
import { render } from 'react-dom';
import Product from './product';

function App() {
  return <Product/>;
}

render(<App/>, document.getElementById('app'));
