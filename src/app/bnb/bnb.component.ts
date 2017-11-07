import { Component, ViewChildren, HostListener, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { App } from './models/bnb.model';
import { Popup } from './models/popup.model';
import { Slider } from './models/slider.model';

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

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		console.log('constructor()');
		this.browser = {};
		this.app = new App();
		this.popup = new Popup();
		this.slider = new Slider();
	}

	ngAfterViewInit(): void
	{
		console.log('ngAfterViewInit()');
		this.handleResize();
		this.cdr.detectChanges();
	}

	private handleResize(): void
	{
		console.log('handleResize()');
		this.browser.width = window.innerWidth;
		this.browser.height = window.innerHeight;
	}

	// TODO:
	public onSwipeLeft(): void
	{
		console.log('onSwipeLeft()');
	}

	// TODO:
	public onSwipeRight(): void
	{
		console.log('onSwipeRight()');
	}

	public openPopup(ev: any): void
	{
		console.log('openPopup()');
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}
}
