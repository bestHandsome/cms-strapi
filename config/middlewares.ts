/*
 * @Author: xingjin
 * @Date: 2023-07-24 16:57:51
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-01 11:13:39
 * @Description: 请填写简介
 */
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ["*"],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
];
