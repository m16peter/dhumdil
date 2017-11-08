import { Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.view.html',
	styleUrls: ['./popup.style.scss']
})

export class PopupComponent
{
	public state = '';

	@Input() popup;

	@ViewChild('scrollEl') scrollEl;

	public getState(): string
	{
		if (this.popup.state !== this.state)
		{
			if (this.popup.state === 'visible')
			{
				document.body.style.overflow = 'hidden';
				this.scrollEl.nativeElement.scrollTop = 100;
			}
			else
			{
				document.body.style.overflow = 'auto';
			}
			this.state = this.popup.state;
		}
		return (this.state);
	}

	public hidePopup(): void
	{
		this.popup.hide();
	}

}
