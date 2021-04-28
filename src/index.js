//? 🍿_popscore
//* an app by Jackson Goodman[http://github.com/jacksonrgoodman]

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import {Popscore} from './Popscore';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Popscore />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
