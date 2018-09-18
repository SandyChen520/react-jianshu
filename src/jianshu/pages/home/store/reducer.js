import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  topicList: [{
    id:1,
    item: '热点'
  },{
    id:2,
    item: '热点'
  }]
})
export default (state = defaultState, action) => {
  switch(action.types) {
    default: return state;
  }
} 