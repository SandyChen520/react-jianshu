import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './todo_list/todo_list';
// import TodoList from './todo_list_redux/TodoList'; //redux基础知识
import TodoList from './todoListUi_react_redux/TodoList';
// import App from './App';
import {Provider} from 'react-redux';
import store from './todoListUi_react_redux/store/index';
// import registerServiceWorker from './registerServiceWorker';

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
// registerServiceWorker();
