import {Injectable} from "@angular/core";

@Injectable()
export class DemoAuth
{
  private loggedIn = false;
    constructor(){}


    public login()
    {
      this.loggedIn = true;
    }

    public auth()
    {
      return this.loggedIn
    }

    public logout()
    {
      this.loggedIn = false;
    }
}

// // user.service.ts
// import { Http, Headers } from '@angular/http';
//
// @Injectable()
// export class UserService {
//   private loggedIn = false;
//
//   constructor(private http: Http) {
//     this.loggedIn = !!localStorage.getItem('auth_token');
//   }
//
//   login(email, password) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//
//     return this.http
//       .post(
//         '/login',
//         JSON.stringify({ email, password }),
//         { headers }
//       )
//       .map(res => res.json())
//       .map((res) => {
//         if (res.success) {
//           localStorage.setItem('auth_token', res.auth_token);
//           this.loggedIn = true;
//         }
//
//         return res.success;
//       });
//   }
//
//   logout() {
//     localStorage.removeItem('auth_token');
//     this.loggedIn = false;
//   }
//
//   isLoggedIn() {
//     return this.loggedIn;
//   }
// }
