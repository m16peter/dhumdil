import { Component, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { App } from './models/bnb.model';
import { Popup } from './models/popup.model';
import { Slider } from './models/slider.model';
import { Footer } from './models/footer.model';

@Component({
	selector: 'bnb-app',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BNBComponent implements AfterViewInit
{
	public browser: any;
	public app: App;
	public popup: Popup;
	public slider: Slider;
	public footer: Footer;

	@HostListener('window:resize') onResize()
	{
		this.browser.width = window.innerWidth;
		this.browser.height = window.innerHeight;
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		this.browser = {};
		this.app = new App();
		this.slider = new Slider();
	}

	ngAfterViewInit(): void
	{
		this.browser.width = window.innerWidth;
		this.browser.height = window.innerHeight;
		this.cdr.detectChanges();

		setTimeout(() =>
		{
			this.popup = new Popup();
			this.footer = new Footer();
			this.browser.isLoaded = true;
			this.cdr.detectChanges();
		}, 1000);
	}
}
