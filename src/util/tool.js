import axios from 'axios';

export const post = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(params.url, params.data, {
        withCredentials: true,
      })
      .then((res) => {
        res = res.data;
        if (typeof res == 'string') {
          res = JSON.parse(res);
        }
        resolve(res);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};

/**
 * 将登录信息保存在本地
 */
export const storeUser = (user) => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {}
};

export const clearUser = () => {
  try {
    localStorage.removeItem('user');
  } catch (error) {}
};

/**
 * 从本地缓存中获取登录信息
 */
export const getUser = () => {
  let user = null;
  try {
    const value = localStorage.getItem('user');
    if (typeof value === 'string') {
      user = JSON.parse(value);
    }
  } catch (error) {
    user = null;
  }
  return user;
};
