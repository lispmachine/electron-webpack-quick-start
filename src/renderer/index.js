import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles } from 'material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100vh',
    width: '100%',
  },
});

function Test() {
  const classes = useStyles();
  return React.createElement('div', {className: classes.root});
}

ReactDOM.render(React.createElement(Test, null), document.getElementById('app'));
