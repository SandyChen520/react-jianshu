import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    const {focused, list, page,totalPage, mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage} = this.props;
    const jsList = list.toJS(); //将imitable类型转化为普通js;
    const pageList = [];
    if(jsList.length){
      for(let i = (page - 1) * 10; i< page * 10; i++) {
        if(jsList[i]) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
      }
    }
    
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}><i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe65f;</i> 换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <div className="clearfix">
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render(){
    const {focused, list,handleInputFocus,handleInputBlur} = this.props;
    return (
      <HeaderWrapper >
        <Link to='/'>
        <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem  className='left'>首页</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus = {() => handleInputFocus(list)}
                onBlur = {handleInputBlur}
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
const mapDispatchToProps =(dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage (page, totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      
      if(page >= totalPage) {
        dispatch(actionCreators.changePage(1));
      } else {
        dispatch(actionCreators.changePage(page +1));
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
