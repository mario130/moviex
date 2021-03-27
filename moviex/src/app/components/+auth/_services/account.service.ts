import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    
    //public token = JSON.parse(localStorage.getItem('user')).token;
    
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    

    //http://localhost:8000/api/users/authenticate
    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/api/users/authenticate`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/home']);
    } 

    //http://localhost:8000/api/users/register
    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/users/register`, user);
    }

    //http://localhost:8000/api/users
    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    // }

    // New getAll 
    getAllUsers() {
        let token = 'anthing';
        let userData = JSON.parse(localStorage.getItem('user'));
        if(userData){
            token = userData.token;
        }
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
       //return this.http.get(this.url, { headers: headers })
       return this.http.get(`${environment.apiUrl}/api/users`, { headers: headers });
      }

    //http://localhost:8000/api/users/id
    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/api/users/${id}`);
    }

     //http://localhost:8000/api/users/id
     getByUsername(username: string) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        return this.http.get<User>(`${environment.apiUrl}/api/users/getusername/${username}`);
    }

    //http://localhost:8000/api/users/update/id
    delete(id) {
        let token = 'anthing';
        let userData = JSON.parse(localStorage.getItem('user'));
        if(userData){
            token = userData.token;
        }

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
       //return this.http.get(this.url, { headers: headers })
       return this.http.delete(`${environment.apiUrl}/api/users/${id}`, { headers: headers }).pipe(map(x => {
            if (id == this.userValue.id) {
                this.logout();
            }
            console.log('before return');
            return x;
       }
      ))}
    update(id, params) {
        let token = 'anthing';
        let userData = JSON.parse(localStorage.getItem('user'));
        if(userData){
            token = userData.token;
        }

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })

        return this.http.put(`${environment.apiUrl}/api/users/${id}`,params, { headers: headers }).pipe(map(x => {
            if (id == this.userValue.id) {
                const user = { ...this.userValue, ...params };
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
            }
                return x; }
              ))}
              


           
    }

    
    
export * from './account.service';