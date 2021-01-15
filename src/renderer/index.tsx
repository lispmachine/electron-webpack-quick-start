import * as React from 'react';
import { render } from 'react-dom';
import SampleCard from './card';

function App() {
  return <SampleCard/>;
}

render(<App/>, document.getElementById('app'));
