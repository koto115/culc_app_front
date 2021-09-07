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
  time: number;
  mon_sub: string;
  tue_sub: string;
  wed_sub: string;
  thu_sub: string;
  fri_sub: string;
  sat_sub: string;
}
export interface BEFORE {
  value1: string | null;
}