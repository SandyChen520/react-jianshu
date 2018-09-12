import React,{Component} from 'react';
import {connect} from 'react-redux';
const TodoList = (props) => {
  const {inputValue,list,inputValueChange,handleBtnClick,handleDelete} = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputValueChange}/>
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index) => {
            return (<li key={index} onClick={() => {handleDelete(index)}}>{item}</li>)
          })
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//store.dispatch 挂载到props
const mapDispatchToProps = (dispatch) => {
  return {
    inputValueChange (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_todo_list'
      }
      dispatch(action)
    },
    handleDelete(index){
      console.log(index)
      const action = {
        type: 'delete_todo_item',
        index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);