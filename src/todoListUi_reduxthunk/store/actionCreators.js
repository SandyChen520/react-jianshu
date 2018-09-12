import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_DATA} from './actionType';
import axios from 'axios';
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});
export const deleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});
export const initListAction = (data) => ({
  type: INIT_LIST_DATA,
  data
});
//使用redux-thunk 可以return一个函数，处理异步
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/getList.json').then(res => {
      const data = res.data.data;
      const action = initListAction(data);
      dispatch(action);
    }).catch(err =>{})
  }
}
