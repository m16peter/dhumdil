import { Component, HostListener, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';

import { HttpGetService } from '@app/core/services/http-get.service';
import { AppService } from '@app/core/services/app.service';

import { App } from '@app/core/models/app.model';
import { Slider } from '@app/core/models/slider.model';
import { Header } from '@app/core/models/header.model';
import { Footer } from '@app/core/models/footer.model';
import { Popup } from '@app/core/models/popup.model';

const configJsonUrl = {
	'app': 'assets/app/app.json',
	'slider': 'assets/shared/slider/slider.json',
	'header': 'assets/shared/header/header.json',
	'footer': 'assets/shared/footer/footer.json'
};

@Component({
	selector: 'app-root',
	templateUrl: './app.view.html',
	styleUrls: ['./app.style.scss']
})

export class AppComponent implements OnInit, AfterViewInit
{
	public app: App;
	public slider: Slider;
	public header: Header;
	public footer: Footer;
	public popup: Popup;

	public browser = {
		'loaded': false,
		'width': 0,
		'height': 0,
		'lang': ''
	};

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private cdr: ChangeDetectorRef, private httpGet: HttpGetService, private appService: AppService)
	{
		this.app = new App({});
		this.slider = new Slider({});
		this.header = new Header({});
		this.footer = new Footer({});
		this.popup = new Popup();
	}

	ngOnInit()
	{
		this.initializeApp();
		this.initializeSlider();
		this.initializeHeader();
		this.initializeFooter();
	}

	ngAfterViewInit()
	{
		this.handleResize();
		this.cdr.detectChanges();
	}

	handleResize()
	{
		this.browser.width = window.innerWidth;
		this.browser.height = window.innerHeight;
	}

	private initializeApp(): void
	{
		this.httpGet
			.get(configJsonUrl.app)
			.subscribe(
				json =>
				{
					this.app = new App(json);

					if (this.app.languages.length > 0)
					{
						this.browser.lang = this.appService.getLang(this.app.languages);
						this.browser.loaded = true;
					}
				},
				e =>
				{
					console.log('error', e);
				}
			);
	}

	private initializeSlider(): void
	{
		this.httpGet
			.get(configJsonUrl.slider)
			.subscribe(
				json =>
				{
					this.slider = new Slider(json);
				},
				e =>
				{
					console.log('error', e);
				}
			)
		;
	}

	private initializeHeader(): void
	{
		this.httpGet
			.get(configJsonUrl.header)
			.subscribe(
				json =>
				{
					this.header = new Header(json);
				},
				e =>
				{
					console.log('error', e);
				}
			)
		;
	}

	private initializeFooter(): void
	{
		this.httpGet
			.get(configJsonUrl.footer)
			.subscribe(
				json =>
				{
					this.footer = new Footer(json);
				},
				e =>
				{
					console.log('error', e);
				}
			)
		;
	}

}
