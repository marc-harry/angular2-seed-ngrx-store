import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../IAppStore';

@Injectable()
export class BaseService {
    constructor(public store: Store<IAppStore>, public http: Http) {

    }

    fireGet(baseUrl: string, path: string, queryParams: Array<{key: string, value: string}> = [], subscribe: (value: any) => void) {
        this.getRequest(baseUrl, path, queryParams).subscribe(subscribe);
    }

    public getRequest(baseUrl: string, path: string, queryParams: Array<{key: string, value: string}> = []) {
        let params = new URLSearchParams();
        queryParams.forEach(element => {
            params.set(element.key, element.value);
        });

		let url = `${baseUrl}/${ path }`;
		return this.http.get(url, {search: params})
			.map((res) => res.json());
    }

    public putRequest(baseUrl: string, path: string, body: any, queryParams: Array<{key: string, value: string}> = []) {
        let params = new URLSearchParams();
        queryParams.forEach(element => {
            params.set(element.key, element.value);
        });

		let url = `${baseUrl}/${ path }`;
		return this.http.put(url, body, {search: params})
			.map((res) => res.json());
    }

    public postRequest(baseUrl: string, path: string, body: any, queryParams: Array<{key: string, value: string}> = []) {
        let params = new URLSearchParams();
        queryParams.forEach(element => {
            params.set(element.key, element.value);
        });

		let url = `${baseUrl}/${ path }`;

        return this.http.post(url, body, {search: params})
			.map((res) => res.json());
    }

    public deleteRequest(baseUrl: string, path: string, queryParams: Array<{key: string, value: string}> = []) {
        let params = new URLSearchParams();
        queryParams.forEach(element => {
            params.set(element.key, element.value);
        });

		let url = `${baseUrl}/${ path }`;
        return this.http.delete(url, {search: params})
			.map((res) => res.json());
    }
}