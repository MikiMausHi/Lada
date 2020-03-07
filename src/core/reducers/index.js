import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';
import locale from './locale';
import notification from './notification';

const reducers = {
  session,
  locale,
  notification,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
