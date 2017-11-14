import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.view.html',
  styleUrls: ['./slider.style.scss']
})

export class SliderComponent implements AfterViewInit
{
  public active: number;
  public selectedIndexes: any;
  public firstTime: boolean;
  public isAutoslideOn: boolean;
  public autoSlide: any;

  @Input() slider;
  @Input() browser;
  @Input() popup;

  @Output() openPopupEv = new EventEmitter();

  constructor()
  {
    this.active = 0;
    this.selectedIndexes = [];
    this.firstTime = true;
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
    // workaround for animation for the first time
    this.checkSliderStatus();

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
      }, 300);
    }
  }

  public animateSlide(i: number): string
  {
    if (this.firstTime)
    {
      return ((i === this.active) ? 'animated' : 'hidden');
    }
    else
    {
      return ((i === this.active) ? 'animate' : 'hide');
    }
  }

  public openPopup(i: number): void
  {
    this.openPopupEv.emit();
    this.checkAutoslideStatus();
  }

  private checkAutoslideStatus(): void
  {
    if (this.isAutoslideOn)
    {
      this.setAutoslideOff();
    }
  }

  private checkSliderStatus(): void
  {
    if (this.firstTime)
    {
      this.firstTime = false;
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
}
