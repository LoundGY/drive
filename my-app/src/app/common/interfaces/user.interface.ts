export interface User {
  id: number;
  username: string;
  password?: string;
  email: string;
  post: number;
  token?: string;
}
