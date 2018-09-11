import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState){ 
    //性能优化
    //避免无作用的render,因为当父组件的render函数执行时，子组件的render都将被重新运行
    if(nextProps.content != this.props.content) {
      return true;
    }
    return false; 
  }
  render(){
    const { content, test } = this.props;
    console.log('child render')
    return (
      <li 
        onClick={this.handleClick}>
          {test} - {content}
      </li>
    )
  }
  handleClick(){
    const { deteItem, index } = this.props;
    deteItem(index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deteItem: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem;