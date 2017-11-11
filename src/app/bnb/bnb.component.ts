import { Component, HostListener, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bnb } from './bnb.model';

@Component({
	selector: 'app-bnb',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BNBComponent implements OnInit, AfterViewInit
{
	public app: any;
	public bnb: Bnb;
	// public popup: Popup;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef, private http: HttpClient)
	{
		this.app = {};
	}

	ngOnInit()
	{
		this.init()
	}

	ngAfterViewInit()
	{
		this.handleResize();
		this.cdr.detectChanges();
	}

	private handleResize(): void
	{
		this.app.width = window.innerWidth;
		this.app.height = window.innerHeight;
	}

	// TODO: try to load 'lang' from local storage...
	private init(): void
	{
		this.app.loaded = false;
		this.app.width = 0;
		this.app.height = 0;

		this.http.get('assets/app/app.json').subscribe(
			data =>
			{
				this.bnb = new Bnb(data);

				if (this.bnb.languages.lenght > 0)
				{
					this.app.lang = this.bnb.languages[0].id;
					this.app.loaded = true;
				}
				
				console.log(this.app);

			},
			err =>
			{
				console.log(err);
				this.app.loaded = false;
			}
		);
	}

}
