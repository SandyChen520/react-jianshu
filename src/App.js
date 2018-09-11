import React, { Component,Fragment } from 'react';
// import './App.css';
import './csstransitiontest.css';
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show: true,
      list:[]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        {/*<CSSTransition 
          in={this.state.show} 
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
          onEntered={(el) => {el.style.color='blue';}}
        >
          <div>
            hello word
          </div>
        </CSSTransition>
        <div onClick={this.handleClick}>toggle</div>*/}
        <TransitionGroup>
        {
          this.state.list.map((item,index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames='fade'
                unmountOnExit
                appear={true}
                onEntered={(el) => {el.style.color='blue';}}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        <div onClick={this.handleAddItem}>toggle</div>
      </Fragment>
    );
  }
  handleClick(){
    this.setState((prevstate) => ({
      show: !prevstate.show
    }))
  }
  handleAddItem(){
    this.setState((prevstate) => {
      return {
        list: [...prevstate.list,'item']
      }
    })
  }
}

export default App;
