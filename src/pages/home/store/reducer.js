import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({   //将JS对象转换成immutable对象
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA: 
      return state.merge({
        'topList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
      });
    case constants.ADD_ARTICLE_LIST: 
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      });
    case constants.TOGGLE_SCROLL_TOP: 
      return state.set('showScroll', action.flag);
    default: return state;
  }
}