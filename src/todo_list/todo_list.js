import React, { Component,Fragment } from 'react';

import TodoItem from './todo_item';
import Test from './test'
import './style.css';
import axios from 'axios';
//Fragment  占位符
class TodoList extends Component {
  //当组件的state或props发生改变时，render函数会重新执行
  //当父组件的render函数执行时，子组件的render都将被重新运行
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  componentDidMount(){ //ajax请求放在这里
    //setState写成方法形式，是为了提升性能
    axios.get('/api').then(res =>{
      this.setState(() => {
        return {
          list: [...res.data]
        }
      })
    }).catch(err =>{
      alert('err')
    })
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          <input
            className='inp'
            ref={(inpt) => {this.input = inpt}}
            value= {this.state.inputValue}
            onChange={this.handleInputChange} />
            <button onClick={this.handleBtnClick}>提交</button></div>
        <ul>
          {this.goTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    );
  }
  goTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item}
          index={index}
          deteItem={this.handleItemDelete}
        ></TodoItem>
      )
    })
  }
  handleInputChange(event){
    const value = this.input.value; 
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick(){
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    console.log(this.input)
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list = [...prevState];
      list.splice(index,1);
      return {
        list: list
      }
    });
  }
}
export default TodoList;