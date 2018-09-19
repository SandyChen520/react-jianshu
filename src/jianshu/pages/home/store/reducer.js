import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommend: []
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_LIST_DATA:
      return  state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommend: fromJS(action.data.recommend)
      })
    default: return state;
  }
} 