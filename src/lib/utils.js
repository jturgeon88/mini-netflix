import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

const RouterComponent = ({ children }) => (
  <Router>
    <div>{children}</div>
  </Router>
);

export default RouterComponent;
