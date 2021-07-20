import React, { PureComponent } from 'react';
import styles from './home.module.css';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend'
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends PureComponent {

  handleScrollTop () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.HomeWrapper}>
        <div className={styles.HomeLeft}>
          <img style={{width: '625px', height: '270px'}} src='https://upload.jianshu.io/admin_banners/web_images/5030/a259100d672eebc1c87d2aca136e748630f6d480.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
          <Topic />
          <List />
        </div>
        <div className={styles.HomeRight}>
          <Recommend />
          <Writer />
        </div>
        { this.props.showScroll ? <div onClick={this.handleScrollTop} className='fixed text-center text-sm' style={{width: '60px', height: '60px', lineHeight: '60px', right: '100px', bottom: '100px', border: '1px solid #ccc'}}>回到顶部</div> : null }
      </div>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();    //绑定事件
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);