import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.view.html',
  styleUrls: ['./slider.style.scss']
})

export class SliderComponent
{
  public sliderStatus: string;
  public selectedIndexes: any;

  @Input() slider;
  @Input() browser;
  @Input() popup;

  constructor()
  {
    this.selectedIndexes = [];
    this.sliderStatus = 'active';
  }

  public setAutoslideOn(): void
  {
    if (this.canSlide())
    {
      this.slider.isAutoslideOn = true;

      this.slider.autoSlide = setInterval(() =>
      {
        this.slider.active++;
        this.selectSlide((this.slider.active < this.slider.slides.length ? this.slider.active : 0), true);
      }, 5000);
    }
  }

  private setAutoslideOff(): void
  {
    this.slider.isAutoslideOn = false;
    clearInterval(this.slider.autoSlide);
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

    // TODO: make a fn for this
    // The length of 'selectedIndexes' is always 1, in case the user waited for animatin end.
    // If he didn't waited, those indexes will be pushed in 'selectedIndexes' list,
    // and once the animation ends the indexes will shifted until the list is empty...
    if (this.selectedIndexes.length === 1)
    {
      index = this.selectedIndexes[0];

      if (this.slider.active !== index)
      {
        this.slider.active = index;
      }

      const interval = setInterval(() =>
      {
        this.selectedIndexes.shift();

        if (this.selectedIndexes.length > 0)
        {
          index = this.selectedIndexes[0];

          if (this.slider.active !== index)
          {
            this.slider.active = index;
          }
        }
        else
        {
          clearInterval(interval);
        }
      }, 300);
    }
  }

  public animateIfActive(i: number): string
  {
    if (this.slider.firstTime)
    {
      return ((i === this.slider.active) ? 'animated' : 'hidden');
    }
    else
    {
      return ((i === this.slider.active) ? 'animate' : 'hide');
    }
  }

  public openPopup(i: number): void
  {
    this.popup.update({
      'title': this.slider.slides[i][this.browser.lang].title,
      'lines': this.slider.slides[i][this.browser.lang].lines
    });
    this.checkAutoslideStatus();
  }

  private checkAutoslideStatus(): void
  {
    if (this.slider.isAutoslideOn)
    {
      this.setAutoslideOff();
    }
  }

  private checkSliderStatus(): void
  {
    if (this.slider.firstTime)
    {
      this.slider.firstTime = false;
    }
  }

  public canSlide(): boolean
  {
    return (this.slider.slides.length > 1);
  }

  public isActive(i: number): string
  {
    return ((i === this.slider.active) ? 'active' : '');
  }

  public getStyle(): string
  {
    return ('color-' + this.slider.active % 6);
  }

  public hide(): void
  {
    this.sliderStatus = 'inactive';
  }

}
