import React, {PureComponent} from 'react';
import List from './components/List';
import Recomment from './components/Recomment';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
class Home extends PureComponent {
  
  render () {
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft>
          <div className="banner-img">
            <img src="http://180.167.110.236:8088/stars-web/static/img/banner.f972ee0.png"/>
          </div>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recomment></Recomment>
          <Writer></Writer>
        </HomeRight>
        <BackTop onClick={this.handleBackTop}>Top</BackTop>
      </HomeWrapper>
    )
  }
  handleBackTop () {
    window.scrollTo(0,0)
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getList())
  }
})
export default connect(null, mapDispatchToProps)(Home);