import * as React from 'react';
import { render } from 'react-dom';
import Coffee from './coffee';

function App() {
  return <Coffee/>;
}

render(<App/>, document.getElementById('app'));
