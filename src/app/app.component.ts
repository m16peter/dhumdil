import { Component, ChangeDetectorRef, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';

import { HttpGetService } from '@app/core/services/http-get.service';
import { AppService } from '@app/core/services/app.service';

import { App } from '@app/app.model';
import { Slider } from '@app/shared/slider/slider.model';
import { Header } from '@app/shared/header/header.model';
import { Footer } from '@app/shared/footer/footer.model';
import { Popup } from '@app/shared/popup/popup.model';

import { SliderComponent } from '@app/shared/slider/slider.component';

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

  public browser: any;

  @ViewChild(SliderComponent) sliderComponent;

  @HostListener('window:resize') onResize()
  {
    this.handleResize();
  }

  constructor(private cdr: ChangeDetectorRef, private httpGet: HttpGetService, private appService: AppService)
  {
    this.browser =
    {
      'loaded': false,
      'width': 0,
      'height': 0,
      'lang': ''
    };
    this.app = new App();
    this.slider = new Slider();
    this.header = new Header();
    this.footer = new Footer();
    this.popup = new Popup();
  }

  ngOnInit()
  {
    this.initializeApp();
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
          this.app.initialize(json);

          if (this.app.languages.length > 0)
          {
            this.browser.lang = this.appService.getLang(this.app.languages);
            this.initializeSlider();
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
          this.slider.initialize(json);

          if (this.slider.slides.length > 0)
          {
            this.sliderComponent.setAutoslideOn();
          }
          else
          {
            this.sliderComponent.hide();
          }
          this.initializeHeader();
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
          this.header.initialize(json);
          this.initializeFooter();
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
          this.footer.initialize(json);
          this.browser.loaded = true;
        },
        e =>
        {
          console.log('error', e);
        }
      )
    ;
  }

}
