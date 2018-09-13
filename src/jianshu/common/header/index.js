import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';
const Header = (props) => {
  return (
    <HeaderWrapper >
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem  className='left'>首页</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus = {props.handleInputFocus}
              onBlur = {props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span>搜索</span>
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
const mapStateToProps =(state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}
const mapDispatchToProps =(dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
