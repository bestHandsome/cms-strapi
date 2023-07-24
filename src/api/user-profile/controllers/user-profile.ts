/**
 * user-profile controller
 */

import { factories } from "@strapi/strapi";
import md5 from "md5";

export default factories.createCoreController(
  "api::user-profile.user-profile",
  ({ strapi }) => ({
    async register(ctx) {
      const UserProfileModel = strapi.db.query(
        "api::user-profile.user-profile"
      );

      const { username, password, nickName, phone, email } = ctx.request.body;
      const user = await UserProfileModel.findOne({
        where: {
          $or: [
            {
              username,
            },
            {
              phone,
            },
            {
              email,
            },
          ],
        },
      });
      // 如果用户已经存在了就提示已经注册
      if (user) {
        return {
          msg: "用户已经注册过了",
          code: 400,
          data: null,
        };
      }
      // 注册
      const result = await UserProfileModel.create({
        select: ["username", "nickName", "phone", "email"],
        data: {
          username,
          password: md5(password),
          nickName,
          phone,
          email,
        },
      });

      return {
        msg: "注册成功",
        data: result,
        code: 200,
      };
    },
  })
);