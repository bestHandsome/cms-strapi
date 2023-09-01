/*
 * @Author: xingjin
 * @Date: 2023-07-31 10:30:59
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 10:31:00
 * @Description: 请填写简介
 */
export default {
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
}