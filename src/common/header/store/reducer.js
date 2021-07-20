import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({   //将JS对象转换成immutable对象
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  tatalPage: 1
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS : return state.set('focused', true);
    case constants.SEARCH_BLUR : return state.set('focused', false);
    case constants.CHANGE_LIST : return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
    case constants.MOUSE_ENTER : return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE : return state.set('mouseIn', false);
    case constants.CHANGE_PAGE : return state.set('page', action.page)
    default: return state;
  }
}