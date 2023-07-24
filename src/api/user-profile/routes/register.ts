/*
 * @Author: xingjin
 * @Date: 2023-07-21 10:04:28
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 10:04:29
 * @Description: 注册
 */
export default {
  routes: [
    {
      method: 'POST',
      path: '/user-reg',
      handler: 'user-profile.register',
    },
  ]
}