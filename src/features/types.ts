export interface PROPS_AUTHEN {
  username: string;
  password: string;
}
export interface USER_STATE {
  username: string;
  password: string;
  isLoginView: boolean;
}
export interface SCHEDULE {
  id: number;
  nickName: string;
  subs: string[];
}
export interface NEW_SCHEDULE {
  nickName: string;
  subs: string[];
}
export interface BEFORE {
  value1: string | null;
}
export interface PROPS_LOGIN {
  username: string;
  password: string;
}