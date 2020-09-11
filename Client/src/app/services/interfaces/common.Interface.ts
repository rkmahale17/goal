
export interface userResponse {
  achievement: Array<any>;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: number;
  created_date: Date;
}

export interface IToken {
  token: string;
  userId: string;
}
