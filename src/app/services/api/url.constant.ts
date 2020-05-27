
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
  },
  createGoal(userId) {
    return `/api/goal/${userId}`;
  },
  getGoals(userId) { 
    return `/api/goal/${userId}`;
  }
};
