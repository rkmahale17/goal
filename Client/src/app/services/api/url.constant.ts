
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
  getSingleGoal(userId, goalId) {
    return `/api/goal/${userId}/${goalId}`;
  },
  getGoals(userId) { 
    return `/api/goal/${userId}`;
  },
  getPhase(userId, phaseId) { 
    return `/api/phase/${userId}/${phaseId}`;
  },
  createPhase(userId, phaseId) {
    return `/api/phase/${userId}/${phaseId}`;
  },
  updateGoal(userId, goalId) {
    return `/api/goal/${userId}/${goalId}`;
  }
};
