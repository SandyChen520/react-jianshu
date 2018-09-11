import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
const TodoListUI = (props) => { //无状态组件，性能比较优
  return (
    <div style = {{marginTop: '30px'}}>
      <div>
        <Input
          placeholder='todo:info'
          style={{width: '300px',paddingLeft:'30px'}}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        style={{marginTop: '10px', width:'300px'}}
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleItemDetele(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}
// class TodoListUI extends Component {
//   render(){
//     return (
//       <div style = {{marginTop: '30px'}}>
//         <div>
//           <Input
//             placeholder='todo:info'
//             style={{width: '300px',paddingLeft:'30px'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           style={{marginTop: '10px', width:'300px'}}
//           dataSource={this.props.list}
//           renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDetele(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI;
