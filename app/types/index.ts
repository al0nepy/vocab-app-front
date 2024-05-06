export enum Language {
  EN = 'en',
  UA = 'ua',
  SP = 'sp',
}

export interface User {
  username: string;
  password: string;
  email: string;
  language: Language;
}

export interface UserLoginData {
  password: string;
  email: string;
}
