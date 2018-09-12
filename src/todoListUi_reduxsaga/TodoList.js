import React,{Component} from 'react';
import TodoListUI from './todoListUI';


import store from './store/index';
import {getInputChangeAction, getAddItemAction,deleteItemAction,getInitList} from './store/actionCreators';
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDetele = this.handleItemDetele.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        list = {this.state.list}
        handleItemDetele = {this.handleItemDetele}
      />
    )
  }
  componentDidMount(){
    const action = getInitList();
    store.dispatch(action);
    

  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);

  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleBtnClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDetele(index){
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;