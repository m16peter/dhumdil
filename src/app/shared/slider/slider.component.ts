import { Component, Input, AfterViewInit } from '@angular/core';
import { I18nService } from '@app/core/services/i18n.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.view.html',
  styleUrls: ['./slider.style.scss']
})

export class SliderComponent implements AfterViewInit
{
  public firstTime: boolean;
  public active: number;
  public selectedIndexes: any;
  public isAutoslideOn: boolean;
  public autoSlide: any;

  @Input() slider;
  @Input() browser;
  @Input() popup;

  constructor(private i18nService: I18nService)
  {
    this.firstTime = true;
    this.active = 0;
    this.selectedIndexes = [];
    this.isAutoslideOn = false;
  }

  ngAfterViewInit()
  {
    this.setAutoslideOn();
  }

  public setAutoslideOn(): void
  {
    if (this.canSlide())
    {
      this.isAutoslideOn = true;

      this.autoSlide = setInterval(() =>
      {
        this.active++;
        this.selectSlide((this.active < this.slider.slides.length ? this.active : 0), true);
      }, 5000);
    }
  }

  private setAutoslideOff(): void
  {
    this.isAutoslideOn = false;
    clearInterval(this.autoSlide);
  }

  public selectSlide(index: number, autoslide = false): void
  {
    this.firstTime = false;

    // TODO: make a fn for this
    // If the animation isn't over when user changes the slide,
    // push this 'event' into 'selectedIndexes'
    // and execute once the animation is over...
    // If the user selects the same slides, ignore them...
    if (this.selectedIndexes.length > 0)
    {
      if (this.selectedIndexes[this.selectedIndexes.length - 1] !== index)
      {
        this.selectedIndexes.push(index);
      }
    }
    else
    {
      this.selectedIndexes.push(index);
    }

    // On user's interaction with slider,
    // the autoslide option turns off
    if (!autoslide)
    {
      this.checkAutoslideStatus();
    }

    // TODO: make a fn for this, eventually refactor...
    // The length of 'selectedIndexes' is always 1, in case the user waited for animatin end.
    // If he didn't waited, those indexes will be pushed in 'selectedIndexes' list,
    // and once the animation ends the indexes will shifted until the list is empty...
    if (this.selectedIndexes.length === 1)
    {
      index = this.selectedIndexes[0];

      if (this.active !== index)
      {
        this.active = index;
      }

      const interval = setInterval(() =>
      {
        this.selectedIndexes.shift();

        if (this.selectedIndexes.length > 0)
        {
          index = this.selectedIndexes[0];

          if (this.active !== index)
          {
            this.active = index;
          }
        }
        else
        {
          clearInterval(interval);
        }
      }, 600);
    }
  }

  public animateSlide(i: number): string
  {
    if (this.firstTime)
    {
      return ((i === this.active) ? '' : 'hidden');
    }
    return ((i === this.active) ? 'animate' : 'hide');
  }

  public openPopup(title, lines): void
  {
    this.popup.update({
      'title': title,
      'lines': lines
    });

    this.checkAutoslideStatus();
  }

  private checkAutoslideStatus(): void
  {
    if (this.isAutoslideOn)
    {
      this.setAutoslideOff();
    }
  }

  public canSlide(): boolean
  {
    return (this.slider.slides.length > 1);
  }

  public isActive(i: number): string
  {
    return ((i === this.active) ? 'active' : '');
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.browser.lang);
  }
}
