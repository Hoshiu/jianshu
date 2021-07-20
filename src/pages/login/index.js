import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
		if (!loginStatus) {
      return (
        <div className='absolute left-0 right-0 bottom-0 top-14 bg-gray-200 z-0'>
          <div style={{width: '400px', height: '200px', margin: '80px auto', paddingTop: '20px', background: '#fff', boxShadow: '0 0 8px rgba(0,0,0,.1)'}}>
            <input placeholder='账号' ref={(input) => {this.account = input}} className='mx-auto my-2 block border' style={{width: '200px', height: '30px', lineHeight: '30px', padding: '0 10px', color: '#777'}} />
            <input  type='password' placeholder='密码' ref={(input) => {this.password = input}} className='mx-auto my-2 block border' style={{width: '200px', height: '30px', lineHeight: '30px', padding: '0 10px', color: '#777'}} />
            <button onClick={() => this.props.login(this.account, this.password)} className='block' style={{width: '220px', height: '30px', lineHeight: '30px', color: '#fff', background: '#3194d0', borderRadius: '15px', margin: '10px auto', textAlign: 'center'}}>登录</button>
          </div>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);