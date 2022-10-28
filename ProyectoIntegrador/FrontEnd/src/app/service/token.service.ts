import { Injectable } from '@angular/core';

const T0KEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAuthorities"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(T0KEN_KEY);
    window.sessionStorage.setItem(T0KEN_KEY, token);
  }

  public getToken(): string{
    return sessionStorage.getItem(T0KEN_KEY)!;
  }

  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string{
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities))
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles; 
  }

  public logOut(): void{
    window.sessionStorage.clear();

  }
  

}
