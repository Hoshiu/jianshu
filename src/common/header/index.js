/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './header.module.css';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
class Header extends  Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length)
    for (let i = (page - 1) * 10;i < page * 10;i++) {
      pageList.push(
        <a key={newList[i]} className={styles.SearchInfoItem}>{newList[i]}</a>
      )
    }
    if (focused || mouseIn) {
      return (
        <div 
          className={styles.SearchInfo} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.SearchInfoTitle}>
            热门搜索
            <span 
              className={styles.SearchInfoSwitch}
              onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className={`${styles.spin} iconfont`}>&#xe69b;</i>
              换一批
            </span>
          </div>
          <div className='overflow-hidden'>
            { pageList }
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
  render () {
    const { focused, list, login,logout, handleInputFocus, handleInputBlur } = this.props;
    return (
      <div className='relative h-14 border-b border-solid border-gray-200' style={{zIndex: '1'}}>
        <Link to='/' className='absolute top-0 left-10 block w-24 h-14 bg-jianshu-logo bg-contain' />
        <div className='h-full w-240 box-border my-0 mx-auto'>
          <div className={`${styles.NavItem} ${styles.active}`}>
            <i className='iconfont mr-2 text-xl inline-block'>&#xe651;</i>
            首页
          </div>
          <div className={`${styles.NavItem}`}>
            <i className='iconfont mr-2 text-xl inline-block'>&#xe600;</i>
            下载App
          </div>
          <div className={`${styles.NavItem}`}>
            <i className='iconfont mr-2 text-2xl inline-block'>&#xe601;</i>
            <span className=''>IT技术</span>
          </div>
          {
            login ? 
              <div  onClick={logout} className='leading-14 py-0 pl-4 text-lg float-right text-gray-400' style={{ cursor: "pointer" }}>退出</div> : 
              <Link to='/login'><div className='leading-14 py-0 pl-4 text-lg float-right text-gray-400'>登录</div></Link>
          }
          <div className='leading-14 py-0 px-4 text-lg float-right text-gray-400'>
            <i className='iconfont text-xl inline-block'>&#xe607;</i>
          </div> 
          <div className='inline-block relative leading-14 my-0'>
            <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide'
              > 
              <input placeholder='搜索' 
                className={
                  focused ? 
                  'placeholder-gray-400::placeholder w-56 h-10 py-0 pr-8 pl-4 ml-6 box-border border-none outline-none rounded-3xl bg-gray-100 text-sm' : 
                  'placeholder-gray-400::placeholder w-44 h-10 py-0 pr-8 pl-4 ml-6 box-border border-none outline-none rounded-3xl bg-gray-100 text-sm'}
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i 
              className={
                this.props.focused ? 
                'bg-gray-500 iconfont text-white absolute right-1 bottom-3 w-8 leading-8 rounded-3xl text-center' : 
                'iconfont text-gray-600 absolute right-1 bottom-3 w-8 leading-8 rounded-3xl text-center'
              }>&#xe602;</i>
              {this.getListArea()}
          </div>
        </div>
        <div className='absolute right-0 top-0 h-16'>
          <Link to='/write'>
            <button className='float-right mt-2 leading-9 rounded-3xl border border-solid border-red-400 mr-12 py-0 px-4 text-sm text-white bg-red-500'>
              <i className='iconfont'>&#xe616;</i>
              写文章
            </button>
          </Link>
          <button className='float-right mt-2 leading-9 rounded-3xl border border-solid border-red-400 mr-6 py-0 px-6 text-sm text-red-400'>注册</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
			dispatch(loginActionCreators.logout())
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);