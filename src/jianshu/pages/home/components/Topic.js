import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {TopicWrapper,TopicItem} from '../style';
class Topic extends Component {
  render () {
    const {topicList} = this.props;
    return (
      <TopicWrapper className="clearfix">
        {
        topicList.map((item) => {
          return (
            <TopicItem key={item.get('id')}>{item.get('item')}</TopicItem>
          )
        })
        }
        
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}
export default connect(mapStateToProps,null)(Topic);