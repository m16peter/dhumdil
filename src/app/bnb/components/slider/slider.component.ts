import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'bnb-slider',
	templateUrl: './slider.view.html',
	styleUrls: ['./slider.style.scss']
})

export class SliderComponent implements AfterViewInit
{
	public selectedIndexes = [];

	@Input() app;
	@Input() popup;
	@Input() slider;

	ngAfterViewInit(): void
	{
		this.setAutoSlideOn();
	}

	private setAutoSlideOn(): void
	{
		if (this.slider.slides.length > 1)
		{
			this.slider.isAutoSlideOn = true;
			let index: number;

			this.slider['auto-slide'] = setInterval(() =>
			{
				index = this.slider.activeSlide < this.slider.slides.length - 1 ? this.slider.activeSlide + 1 : 0;
				this.selectSlide(index, true);
			}, 5000);
		}
	}

	private setAutoSlideOff(): void
	{
		this.slider.isAutoSlideOn = false;
		clearInterval(this.slider['auto-slide']);
	}

	public selectSlide(index: number, autoSlide = false): void
	{
		if (this.slider.isFirstTime)
		{
			this.slider.isFirstTime = false;
		}

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
		// the auto-slide option turns off
		if (this.slider.isAutoSlideOn && !autoSlide)
		{
			this.setAutoSlideOff();
		}

		// The length of 'selectedIndexes' is always 1,
		// in case the user waited for animatin end.
		// If he didn't waited, those indexes will be
		// pushed in 'selectedIndexes' list,
		// and once the animation ends,
		// this 'interval' will shift the indexes and animate slides,
		// until there is nothing left to do...
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
		return ((index === this.slider.activeSlide) ? 'animate' : 'hide');
	}

	public openPopup(index: number): void
	{
		this.popup.update({
			'title': this.slider.slides[index].txt[this.app.selectedLang].title,
			'lines': this.slider.slides[index].txt[this.app.selectedLang].lines
		});
		this.popup.show();

		if (this.slider.isAutoSlideOn)
		{
			this.setAutoSlideOff();
		}
	}

}
