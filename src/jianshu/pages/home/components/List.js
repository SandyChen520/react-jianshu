import React, {PureComponent} from 'react';
import {actionCreators} from '../store';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  ListItem,
  LoadMore
} from '../style';
class List extends PureComponent {
  render () {
    const {list, getMoreList} = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <Link to='/detail'>
                <ListItem key={item.get('id')}>
                  <h2>{item.get('title')}</h2>
                  <div>{item.get('item')}</div>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreList}>更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
const mapDispatchToProps = (dispatch) =>({
  getMoreList(){
    dispatch(actionCreators.getList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);