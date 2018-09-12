import {put,takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionType';
import {initListAction} from './actionCreators';
import axios from 'axios';
function* getInitList(){
  try {
    const res = yield axios.get('/getList.json');
    const action = initListAction(res.data.data);
    yield put(action);
  } catch (error) {
    console.log('list.json 请求错误' + error)
  }
  
}
//generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;