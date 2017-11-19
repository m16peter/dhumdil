import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';

import { HttpGetService } from '@app/core/services/http-get.service';
import { AppService } from '@app/core/services/app.service';
import { I18nService } from '@app/core/services/i18n.service';
import { ScrollService } from '@app/core/services/scroll.service';

import { App } from '@app/app.model';

const config = {
  'json': 'assets/app.json'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.style.scss']
})

export class AppComponent implements OnInit
{
  public app = new App();

  @ViewChild('scrollEl') scrollEl;

  constructor(
    private cdr: ChangeDetectorRef,
    private httpGet: HttpGetService,
    private appService: AppService,
    private i18nService: I18nService,
    private scrollService: ScrollService
  ) {}

  ngOnInit()
  {
    this.initializeApp();
  }

  private initializeApp(): void
  {
    this.httpGet
      .get(config.json)
      .subscribe(
        json =>
        {
          try
          {
            this.app.initialize(json);
            this.app.lang = this.appService.getLang(this.app.languages);

            if (this.app.lang === '')
            {
              this.handleError('Error loading the language!', this.app);
            }
            else
            {
              this.app.loaded = true;
              this.cdr.detectChanges();
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

  public handleError(msg: string, obj: any): void
  {
    console.log(msg, obj);
    // alert("Ooops, something went wrong!");
  }

  public toggleNavigation(): void
  {
    this.app.navigation.isActive ? this.closeNavigation() : this.openNavigation();
  }

  public navigationState(): string
  {
    if (this.app.navigation.isActive)
    {
      return ('app__navigation_active');
    }
    else
    {
      return ('');
    }
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.app.lang);
  }

  public openNavigation(): void
  {
    this.app.navigation.isActive = true;
  }

  public closeNavigation(): void
  {
    this.app.navigation.isActive = false;
  }

  public selectLink(): void
  {
    this.closeNavigation();
    this.scrollService.scrollTo(this.scrollEl, 0);
  }
}
