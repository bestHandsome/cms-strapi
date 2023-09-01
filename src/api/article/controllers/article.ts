/*
 * @Author: xingjin
 * @Date: 2023-07-24 16:57:51
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 09:59:07
 * @Description: 请填写简介
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', (strapi) => ({
  // async search(ctx) {
  //   const ArticleModel = strapi.db.query(
  //     "api::user-profile.user-profile"
  //   );
  //   const { title, type } = ctx.request.body;
  //   const user = await ArticleModel.find({
  //     where: {
  //       $or: [
  //         {
  //           title,
  //         },
  //         {
  //           type,
  //         }
  //       ],
  //     },
  //   });
  // }
}));
