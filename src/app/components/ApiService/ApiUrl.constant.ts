import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast'

export const apiUrl = {
         createAchievement: function (userId) {
           return `/api/user/updateAchievement/${userId}`;
         },
         createuser: function () {
           return `/api/users`;
         },
         getuser: function (userId) {
           return `/api/user/${userId}`;
  },
        login: function (id, password) {
          return `/api/login/${id}/${password}`;
         }
       };
