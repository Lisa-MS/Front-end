import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddTodo from './Todo/AddTodo';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();