import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;    //调试工具
const store = createStore(reducer, composeEnhancers(    //创建store
  applyMiddleware(thunk)    //使用thunk中间件
));

export default store;