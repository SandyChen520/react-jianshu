import React, {Component} from 'react';
import List from './components/List';
import Recomment from './components/Recomment';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
class Home extends Component {
  render () {
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft>
          <div className="banner-img">
            <img src="http://180.167.110.236:8088/stars-web/static/img/banner.f972ee0.png"/>
          </div>
          <Topic></Topic>
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;