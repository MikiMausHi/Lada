import { push } from 'connected-react-router';
import ProfileServices from '../services/profile';

export const types = {
  AUTH_SELF_REQUEST: 'AUTH_SELF_REQUEST',
  AUTH_SELF_FAILURE: 'AUTH_SELF_FAILURE',
  AUTH_SELF_SUCCESS: 'AUTH_SELF_SUCCESS',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
};

export const getSelf = (source = '') => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({ type: types.AUTH_SELF_REQUEST });
    ProfileServices.getProfile()
      .then((response) => {
        dispatch({ type: types.AUTH_SELF_SUCCESS, payload: { data: response.user } });
        if (response.user.type === 'teacher') dispatch(push('/my/teacher1'));
        else if (response.user.type === 'student') dispatch(push('/my/student1'));
      })
      .catch((error) => {
        localStorage.removeItem('token');
        dispatch({ type: types.AUTH_SELF_FAILURE, payload: { error } });
      });
  }
};

export const loginSuccess = ({ token, source = '' }) => (dispatch) => {
  localStorage.setItem('token', token);
  dispatch(getSelf(source));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: types.AUTH_LOGOUT });
  dispatch(push('/'));
};

export const updateSelf = (cb = null) => (dispatch) => {
  ProfileServices.getProfile()
    .then((response) => {
      dispatch({ type: types.AUTH_SELF_SUCCESS, payload: { data: response } });
      if (cb) cb();
    })
    .catch((error) => {
      localStorage.removeItem('token');
      dispatch({ type: types.AUTH_SELF_FAILURE, payload: { error } });
    });
};
