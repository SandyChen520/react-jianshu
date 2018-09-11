const defaultState = {
  inputValue: '',
  list: []
};
//reducer 可以接受state,但是不能修改state,所以需要深拷贝一个newState
//reducer必须是纯函数（纯函数指给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。）
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  if(action.type === 'init_list_data') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}