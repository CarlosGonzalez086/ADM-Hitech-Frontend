import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class UserService {
    public url: string;
    public identity: any;
    public token: any;
    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }
    //Realizar el registro en la base de datos
    register(user: any): Observable<any> {
        let json = JSON.stringify(user);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'register', params, { headers: headers });
    }
    //Iniciar sesion en el sitio
    signup(user: any, gettoken: any = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }
        let json = JSON.stringify(user);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'login', params, { headers: headers });
    }
    //Actualizar el usuario
    update(token: any, user: any): Observable<any>{
        let json = JSON.stringify(user);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.put(this.url + 'user/update', params, { headers: headers });
    }
    //Obtener la informacion del usuario
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity') || '{}');
        if (identity && identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    //Obtenemos el token del usuario
    getToken() {
        let token = localStorage.getItem('token');
        if (token && token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }

    getUseremail(email: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'user/' + email, { headers: headers });
    }
    //Eliminamos el usuario de la base datos y del sitio
    delete(token: any, email: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.delete(this.url + 'user/' + email, { headers: headers });
    }

}