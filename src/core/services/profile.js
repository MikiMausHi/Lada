import request from './request';

/** Get profile */
const getProfile = () => request({ method: 'get', url: '/profile' });

/** Update profile */
const update = data => request({ method: 'post', url: '/profile', data });

/** Update Avatar */
const updateAvatar = data => request({ method: 'post', url: '/profile/avatar', data, 'content-type': 'multipart/form-data' });

/** Delete avatar */
const deleteAvatar = () => request({ method: 'delete', url: '/profile/avatar' });

export default {
  getProfile,
  deleteAvatar,
  updateAvatar,
  update,
};
