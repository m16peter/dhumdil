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
  public browser: any;
  public app: App;
  public slider: Slider;
  public header: Header;
  public footer: Footer;
  public popup: Popup;

  @ViewChild(SliderComponent) sliderComponent;

  @HostListener('window:resize') onResize()
  {
    this.handleResize();
  }

  @HostListener('window:scroll') onScroll()
  {
    this.handleScroll();
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

  private handleResize(): void
  {
    this.browser.width = window.innerWidth;
    this.browser.height = window.innerHeight;
  }

  private handleScroll(): void
  {
    if (window.scrollY >= (window.innerHeight - 50))
    {
      this.footer.zIndex = 100;
    }
    else
    {
      this.footer.zIndex = 0;
    }
  }

  private initializeApp(): void
  {
    this.httpGet
      .get(configJsonUrl.app)
      .subscribe(
        json =>
        {
          try
          {
            this.app.initialize(json);

            if (this.app.languages.length > 0)
            {
              this.browser.lang = this.appService.getLang(this.app.languages);
              window.document.documentElement.lang = this.browser.lang;
              this.initializeSlider();
            }
            else
            {
              this.handleError('Languages not loaded', this.app);
            }
          }
          catch (e)
          {
            this.handleError(e.message, this.app);
          }
        },
        e =>
        {
          this.handleError(e.message, e);
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
          try
          {
            this.slider.initialize(json);
            this.cdr.detectChanges();
            document.body.removeChild(document.getElementById('loader')); // page content loaded, remove the loader...
            this.sliderComponent.setAutoslideOn();

            if (this.slider.loaded)
            {
              this.initializeHeader();
            }
            else
            {
              this.handleError('Slider not loaded', this.slider);
            }
          }
          catch (e)
          {
            this.handleError(e.message, this.slider);
          }
        },
        e =>
        {
          this.handleError(e.message, e);
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
          try
          {
            this.header.initialize(json);

            if (this.header.loaded)
            {
              this.initializeFooter();
            }
            else
            {
              this.handleError('Header not loaded', this.header);
            }
          }
          catch (e)
          {
            this.handleError(e.message, this.header);
          }
        },
        e =>
        {
          this.handleError(e.message, e);
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
          try
          {
            this.footer.initialize(json);

            if (this.footer.loaded)
            {
              this.browser.loaded = true;
            }
            else
            {
              this.handleError('Footer not loaded', this.footer);
            }
          }
          catch (e)
          {
            this.handleError(e.message, this.footer);
          }
        },
        e =>
        {
          this.handleError(e.message, e);
        }
      )
    ;
  }

  public handleError(msg: string, obj: any): void
  {
    console.log(msg, obj);
    // TODO: notify the user: "Ooops, something went wrong!"
  }
}
