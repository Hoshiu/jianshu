import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators }  from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
      {
        list.map((item, index) => (
          <Link key={index} to={'/detail/' + item.get('id')}>
            <div className='py-5 px-0 border-b border-solid border-gray-200 overflow-hidden'>
              <img 
                className='rounded-lg'
                style={{display: 'block', width: '125px', height: '100px', float: 'right'}}
                src={item.get('imgUrl')}
                alt=''
              />
              <div className='float-left' style={{width: '500px', }}>
                <h3 className='text-lg leading-7 font-bold'>{item.get('title')}</h3>
                <p className='text-sm leading-6' style={{color: '#999'}}>{item.get('desc')}</p>
              </div>
            </div>
          </Link>
        ))
      }
      <div onClick={() => getMoreList(page)} className='w-full h-10 leading-10 text-center rounded-2xl' style={{background: '#a5a5a5', color: '#fff'}}>更多文字</div>
    </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);