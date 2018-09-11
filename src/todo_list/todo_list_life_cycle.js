import React, { Component,Fragment } from 'react';

import TodoItem from './todo_item';
import Test from './test'
import './style.css';
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
  componentWillMount(){ //在组件即将被挂载到页面的时刻自动执行
    console.log('componentWillMount')
  }
  componentDidMount(){ //在组件被挂载到页面之后自动执行
    console.log('componentDidMount')
  }
  shouldComponentUpdate(){ //组件被更新之前，会自动被执行.需要返回一个boolean类型
    console.log('shouldComponentUpdate')
    return true;
  }
  componentWillUpdate(){ //组件被更新之前，会自动被执行,在shouldComponentUpdate之后被执行，返回true会执行，返回false则不执行
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){ //组件更新完成之后，会被执行
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps(){ 
    //当一个组件从父组件接受了参数，只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    //1. 当一个组件从父组件接受了参数
    //2. 如果这个组件第一次存在于父组件中，不会被执行
    //3. 如果这个组件之前已经存在于组件中，会被执行
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount(){ //当这个组件即将被从页面中剔除的时候，会被执行
    console.log('componentWillUnmount')
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          {/*注释*/}
          {
            //注释
          }
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
        {/*dangerouslySetInnerHTML 传递html
        <ul>
          {this.state.list.map((item, index) => {
            return (<li key={index} onClick={this.handleItemDelete.bind(this,index)} dangerouslySetInnerHTML={{__html: item}}></li>)
          })}
        </ul>*/}
      </Fragment>
    );
  }
  goTodoItem(){
    return this.state.list.map((item, index) => {
      {/*return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>*/}
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
    //新写法
    // const value = event.target.value;
    const value = this.input.value; 
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: event.target.value
    // })
  }
  handleBtnClick(){
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    console.log(this.input)
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index){
    //新写法
    this.setState((prevState)=>{
      const list = [...prevState];
      list.splice(index,1);
      return {
        list: list
      }
    });
    // const list = [...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list: list
    // })
  }
}
export default TodoList;