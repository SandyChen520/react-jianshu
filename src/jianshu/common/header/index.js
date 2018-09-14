import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component{
  getListArea () {
    if(this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              this.props.list.map((item,index) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </div>
        </SearchInfo>
      )
    }
  }
  render(){
    return (
      <HeaderWrapper >
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem  className='left'>首页</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus = {this.props.handleInputFocus}
                onBlur = {this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span>搜索</span>
            {this.getListArea()}
          </SearchWrapper>
          <NavItem  className='right'>首页</NavItem>
          <NavItem  className='right'>首页</NavItem>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='write'>写文字</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps =(state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps =(dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
