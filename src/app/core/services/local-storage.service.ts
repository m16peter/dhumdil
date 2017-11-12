import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService
{

	public getItem(key: string): any
	{
		return JSON.parse(localStorage.getItem(key));
	}

	public setItem(key: string, value: any): void
	{
		localStorage.setItem(key, JSON.stringify(value));
	}

}
