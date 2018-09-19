import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
  RecomentWrapper
} from '../style';
class Recomment extends PureComponent {
  render () {
    const {list} = this.props;
    return (
      <div>
        {
          list.map((item) => (
            <RecomentWrapper imgUrl='http://180.167.110.236:8088/stars-web/static/img/banner.f972ee0.png' key={item.get('id')}>{item.get('item')}</RecomentWrapper>
          ))
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommend'])
})
export default connect(mapStateToProps, null)(Recomment);