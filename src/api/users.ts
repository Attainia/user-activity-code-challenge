import axios from "axios";

interface RawUserData {
  id: number;
  username: string;
  last_login: string;
  login_count: number;
  project_count: number;
}

export class User {
  id: number;
  username: string;
  lastLogin: string;
  loginCount: number;
  projectCount: number;

  constructor(raw: RawUserData) {
    this.id = raw.id;
    this.username = raw.username;
    this.lastLogin = raw.last_login;
    this.loginCount = raw.login_count;
    this.projectCount = raw.project_count;
  }
}

export default {
  async get(): Promise<User[]> {
    const { data } = await axios.get("http://localhost:3000/users");
    return data.map((user: RawUserData) => new User(user));
  }
};
