import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn  : 'root'
})

export class HttpStorageService {

    constructor(private http : HttpClient) { 

    }

    public getInfo = () => {
        return this.http.get('https://reqres.in/api/users?page=2');
    }

    public takeAuser = (param) => {
        return this.http.get('https://reqres.in/api/users/' + param);
    }

    public updateInfo = (param,info) => {
        return this.http.put('https://reqres.in/api/users/' + param , info);
    }

    public deleteInfo = (id) => {
        return this.http.delete('https://reqres.in/api/users/' + id);
    }

    public addAuser = (user) => {
        return this.http.post('https://reqres.in/api/users' , user);
    }
}
