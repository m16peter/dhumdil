import { Component, ViewChildren, HostListener, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
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
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		this.browser = {};
		this.app = new App();
		this.popup = new Popup();
		this.slider = new Slider();
		this.footer = new Footer();
	}

	ngAfterViewInit(): void
	{
		this.handleResize();
		this.cdr.detectChanges();
	}

	private handleResize(): void
	{
		this.browser.width = window.innerWidth;
		this.browser.height = window.innerHeight;
	}

	public onSwipeLeft(): void
	{}

	public onSwipeRight(): void
	{}

	public openPopup(ev: any): void
	{
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}
}
