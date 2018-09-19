import * as actionTypes from './actionTypes';
import axios from 'axios';
const setList = (data) =>({
  type: actionTypes.SET_LIST_DATA,
  data
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(setList(res.data.data))
    })
  }
};
