import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './todo_list/todo_list';
// import TodoList from './todo_list_redux/TodoList'; //redux基础知识
import TodoList from './todoListUi/TodoList';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
