import Service from '@ember/service';

export interface IAuthService {
  storeToken(token: string): void;
  getToken(): string | null;
  clearToken(): void;
}

export default class AuthService extends Service implements IAuthService {
  storeToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  clearToken() {
    localStorage.removeItem('jwtToken');
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:auth')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('auth') declare altName: AuthService;`.
declare module '@ember/service' {
  interface Registry {
    auth: AuthService;
  }
}
