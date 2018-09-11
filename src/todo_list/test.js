import React,{Component} from 'react';

class Test extends Component {
  render() {
    console.log('props发生变化，render重新执行')
    return <div>{this.props.content}</div>
  }
}

export default Test