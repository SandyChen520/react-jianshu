import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});
export const setSearchList = (list) => ({
  type: actionTypes.ADD_SEARCH_LIST,
  list: fromJS(list)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json').then(res => {
      const data = res.data.data;
      console.log(res.data.data,res.data)
      dispatch(setSearchList(data))
    }).catch(err =>{})
  }
}