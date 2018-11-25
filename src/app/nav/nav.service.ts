import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Observable} from 'rxjs';
@Injectable()
export class NavService {

    private userListUrl : string = "http://localhost:8090/api/userList";
    private registerUrl : string = "http://localhost:8090/api/register";
    private loginUrl : string = "http://localhost:8090/api/login";

    constructor(private http : Http) {}

    getInfo() {
        return [
            {
                "id": 1,
                "firstName": "Shahzad",
                "lastName": "Hussain",
                "email": "shahzad@gmail.com"
            }, {
                "id": 2,
                "firstName": "Gaurav",
                "lastName": "Bhoparia",
                "email": "gaurav@gmail.com"
            }, {
                "id": 3,
                "firstName": "Ram",
                "lastName": "Nath",
                "email": "ram@gmail.com"
            }, {
                "id": 2,
                "firstName": "Neha",
                "lastName": "Khanna",
                "email": "neha@gmail.com"
            }
        ]
    }

    getInfos() : Observable < any > {
        return this
            .http
            .get(this.userListUrl)
            .map((response : Response) => response.json())
            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    }

    register(body : Object) : Observable < any > {
        let bodyString = JSON.stringify(body);
        console.log(bodyString);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this
            .http
            .post(this.registerUrl, body, options)
            .map((res : Response) => res.json());        
    }

    login(body : Object) : Observable < any > {
        let bodyString = JSON.stringify(body);
        console.log(bodyString);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this
            .http
            .post(this.loginUrl, body, options)
            .map((res : Response) => res.json());

    }
}
