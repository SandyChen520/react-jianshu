import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
// import TodoList from './todo_list/todo_list';
// import TodoList from './todo_list_redux/TodoList'; //redux基础知识
// import TodoList from './todoListUi_react_redux/TodoList';
// import App from './App';
import JianShuApp from './jianshu/App.js';
// import {Provider} from 'react-redux';
// import store from './todoListUi_react_redux/store/index';
// import registerServiceWorker from './registerServiceWorker';

// const App = (
//   <Provider store={store}>
//     <JianShuApp />
//   </Provider>
// )
ReactDOM.render(<JianShuApp />, document.getElementById('root'));
// registerServiceWorker();
