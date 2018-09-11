import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/index';
import {getInputChangeAction, getAddItemAction,deleteItemAction} from './store/actionCreators';
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
      <div style = {{marginTop: '30px'}}>
        <div>
          <Input
            placeholder='todo:info'
            style={{width: '300px',paddingLeft:'30px'}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          style={{marginTop: '10px', width:'300px'}}
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.handleItemDetele.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
    )
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