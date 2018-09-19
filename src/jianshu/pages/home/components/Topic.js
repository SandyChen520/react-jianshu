import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicItem} from '../style';
class Topic extends PureComponent {
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