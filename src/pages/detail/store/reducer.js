import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({   //将JS对象转换成immutable对象
  title: '',
  content: ''
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL :
      return state.merge({
        title: action.title,
        content: action.content
      })
    default: return state;
  }
}