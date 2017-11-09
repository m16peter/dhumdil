import { Component, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { App } from './models/app.model';
import { Popup } from './models/popup.model';
import { Slider } from './models/slider.model';
import { Footer } from './models/footer.model';
import { Header } from './models/header.model';

@Component({
	selector: 'bnb-app',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BNBComponent implements AfterViewInit
{
	public bnb: any;
	public app: App;
	public popup: Popup;
	public slider: Slider;
	public footer: Footer;
	public header: Header;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		this.bnb = {};
		this.app = new App();
		this.bnb.lang = this.app[0].id;	// TODO: enable cookies for lang...
		this.slider = new Slider();
	}

	ngAfterViewInit(): void
	{
		this.handleResize();
		this.cdr.detectChanges();

		// focus on loading the slider,
		// animate it's entrance for '1000' ms
		// load the rest of the page after this...
		setTimeout(() =>
		{
			this.popup = new Popup();
			this.footer = new Footer();
			this.header = new Header();
			this.bnb.loaded = true;
			this.cdr.detectChanges();
		}, 1000);
	}

	private handleResize(): void
	{
		this.bnb.width = window.innerWidth;
		this.bnb.height = window.innerHeight;
	}

}
