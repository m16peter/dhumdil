import { Component, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { I18nService } from '@app/core/services/i18n.service';

const sliderConfig = {
  'autoslide-interval': 3000
};

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent implements AfterViewInit
{
  public slider: any;

  @Input() header;
  @Input() app;

  constructor(private cdr: ChangeDetectorRef, private i18nService: I18nService)
  {
    this.slider =
    {
      'active': -1,
      'isAutoslideOn': false,
      'autoSlide': {},
      'len': 0
    };
  }

  ngAfterViewInit()
  {
    this.setAutoslideOn();
    this.cdr.detectChanges();
  }

  public slideState(i: number): string
  {
    if (i === this.slider.active)
    {
      return ('slide_active');
    }
    else if (i === (this.slider.active - 1))
    {
      return ('slide_previous');
    }
    else if (i === (this.slider.active + 1))
    {
      return ('slide_active_second');
    }
    else if (i === (this.slider.active + 2))
    {
      return ('slide_active_third');
    }
    else
    {
      return ('slide_inactive');
    }
  }

  public setAutoslideOn(): void
  {
    this.slider.active = 0;
    this.slider.len = this.header.news.length;

    if (this.header.news.length > 1)
    {
      this.slider.isAutoslideOn = true;

      this.slider.autoSlide = setInterval(() =>
      {
        this.slider.active++;
        this.checkAutoslideStatus();
      },
      sliderConfig['autoslide-interval']);
    }
  }

  private checkAutoslideStatus(): void
  {
    if (this.slider.active >= this.slider.len)
    {
      this.setAutoslideOff();
    }
  }

  private setAutoslideOff(): void
  {
    this.slider.isAutoslideOn = false;
    clearInterval(this.slider.autoSlide);
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.app.lang);
  }
}
