import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { HttpGetService } from '@app/core/services/http-get.service';
import { I18nService } from '@app/core/services/i18n.service';
import { LangService } from '@app/core/services/lang.service';
import { MetaService } from '@app/core/services/meta.service';

const config =
{
  'json': 'assets/about/about.json'
};

@Component({
	selector: 'app-about',
	template:
  `
    <div *ngIf="loaded">
      <h1>{{ i18n(about, 'title') }}</h1>
    </div>
  `
})

export class AboutComponent implements OnInit
{
  public loaded: boolean;
  public app: any;
  public about: any;
  private subscription: Subscription;

  constructor(
    private httpGet: HttpGetService,
    private i18nService: I18nService,
    private langService: LangService,
    private meta: MetaService,
    private route: ActivatedRoute
  )
  {
    this.loaded = false;
    this.meta.update('About', 'Random list...');
    this.subscription = this.langService.appUpdated$.subscribe(app => this.app = app);
  }

  ngOnInit()
  {
    this.route.params.forEach((params: Params) =>
    {
      this.loaded = false;

      const url = params['url'];
      console.log(url);

      // update active lang
      this.langService.verifyLanguage();

      // if url lang is other than active lang, change active lang...
      const lang = this.langService.detectedUrlLangChange(url, 'about', this.app);

      if (lang !== this.app.lang)
      {
        this.langService.changeLanguage(lang);
      }

      this.initializeAbout();
   });
  }

  private initializeAbout(): void
  {
    this.httpGet
      .get(config.json)
      .subscribe(
        json =>
        {
          // for the sake of simplicity, wrap in try catch this: this.about = new About(json);
          this.about = json.data.about;
          this.loaded = true;
        },
        e =>
        {
          console.log("Ooops, something went wrong!");
        }
      );
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.app.lang);
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
