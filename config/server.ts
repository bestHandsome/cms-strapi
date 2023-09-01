/*
 * @Author: xingjin
 * @Date: 2023-07-24 16:57:51
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-08-19 23:16:53
 * @Description: 请填写简介
 */
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  }
});
