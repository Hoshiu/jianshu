import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class Topic extends PureComponent {
  render() {
    return (
      <div className='border-b border-solid border-gray-200 -ml-4 pt-5 pr-0 pb-2.5 pl-0 overflow-hidden'>
        {
          this.props.list.map((item) => {
            return (
              <div key={item.get('id')} className='float-left h-8 leading-8 ml-4 mb-4 pr-2.5 text-sm rounded' style={{border: '1px solid #dcdcdc', background: '#f7f7f7'}}>
                <img 
                  className='block float-left mr-2.5 w-8 h-8' 
                  src={item.get('imgUrl')} 
                  alt=''
                />
                {item.get('title')}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);