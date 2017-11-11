import { Component, HostListener, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-bnb',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BnbComponent implements AfterViewInit
{
	public app: any;
	// public bnb: Bnb;
	// public popup: Popup;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		this.app = {};
		// this.bnb = new Bnb();
		// TODO: enable cookies (try to load the lang from cookies...)
		// this.app.lang = this.bnb[0].id;
	}

	ngAfterViewInit(): void
	{
		this.handleResize();
		this.app.loaded = true;
		this.cdr.detectChanges();
	}

	private handleResize(): void
	{
		this.app.width = window.innerWidth;
		this.app.height = window.innerHeight;
	}
}
