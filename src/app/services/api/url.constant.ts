import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

export const apiUrl = {
  createAchievement(userId) {
    return `/api/user/updateAchievement/${userId}`;
  },
  registerUser() {
    return `/api/user/register`;
  },
  getuser(userId) {
    return `/api/user/${userId}`;
  },
  login() {
    return `/api/user/login`;
  }
};
