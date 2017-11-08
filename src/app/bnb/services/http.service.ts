import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService
{

	constructor (private http: HttpClient)
	{}

	public get(link: string): any
	{
		return this.http.get<any>(link).map(res => res || {} );
	}

	public post(link: string, data: any): any
	{
		return new Promise((resolve) => {
			this.http
				.post<any>(link, data, {headers: new HttpHeaders().set('Authorization', 'XSRF-TOKEN'),})
				.map(res => res || {})
				.subscribe(res => { resolve(res); });
		});
	}
}
