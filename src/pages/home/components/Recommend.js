import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div className='my-8 mx-0' style={{width: '280px'}}>
        {
          list.map((item) => {
            return <img key={item.get('id')} src={item.get('imgUrl')} style={{width: '280px', height: '50px', backgroundSize: 'contain'}} alt='' />
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);