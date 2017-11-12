import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.view.html',
	styleUrls: ['./slider.style.scss']
})

export class SliderComponent implements AfterViewInit
{
	public selectedIndexes = [];

	@Input() browser;
	@Input() popup;
	@Input() slider;

	ngAfterViewInit()
	{
		this.setAutoslideOn();
	}

	private setAutoslideOn(): void
	{
		if (this.slider.slides.length > 1)
		{
			this.slider.isAutoslideOn = true;

			this.slider['auto-slide'] = setInterval(() =>
			{
				this.slider.activeSlide++;
				this.selectSlide((this.slider.activeSlide < this.slider.slides.length ? this.slider.activeSlide : 0), true);
			}, 5000);
		}
	}

	private setAutoslideOff(): void
	{
		this.slider.isAutoslideOn = false;
		clearInterval(this.slider['auto-slide']);
	}

	public selectSlide(index: number, autoslide = false): void
	{
		// TODO: make a fn for this
		// workaround for animation for the first time
		if (this.slider.isFirstTime)
		{
			this.slider.isFirstTime = false;
		}

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

		// TODO: make a fn for this
		// On user's interaction with slider,
		// the autoslide option turns off
		if (this.slider.isAutoslideOn && !autoslide)
		{
			this.setAutoslideOff();
		}

		// TODO: make a fn for this
		// The length of 'selectedIndexes' is always 1, in case the user waited for animatin end.
		// If he didn't waited, those indexes will be pushed in 'selectedIndexes' list,
		// and once the animation ends the indexes will shifted until the list is empty...
		if (this.selectedIndexes.length === 1)
		{
			index = this.selectedIndexes[0];

			if (this.slider.activeSlide !== index)
			{
				this.slider.activeSlide = index;
			}

			const interval = setInterval(() =>
			{
				this.selectedIndexes.shift();

				if (this.selectedIndexes.length > 0)
				{
					index = this.selectedIndexes[0];

					if (this.slider.activeSlide !== index)
					{
						this.slider.activeSlide = index;
					}
				}
				else
				{
					clearInterval(interval);
				}
			}, 300);
		}
	}

	public animateIfActive(index: number): string
	{
		if (this.slider.isFirstTime)
		{
			return ((index === this.slider.activeSlide) ? 'animated' : 'hidden');
		}
		else
		{
			return ((index === this.slider.activeSlide) ? 'animate' : 'hide');
		}
	}

	public openPopup(index: number): void
	{
		this.popup.update({
			'title': this.slider.slides[index].txt[this.browser.lang].title,
			'lines': this.slider.slides[index].txt[this.browser.lang].lines
		});
		this.popup.show();

		// TODO: make a fn for this
		if (this.slider.isAutoslideOn)
		{
			this.setAutoslideOff();
		}
	}
}
