import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {CheeseList} from './components/cheese-list';

const cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(
 <CheeseList cheeses={cheeses} />,
  document.getElementById('root')
);
