import { Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.view.html',
	styleUrls: ['./popup.style.scss']
})

export class PopupComponent
{
	@Input() popup;

	@ViewChild('scrollEl') scrollEl;

	public getState(): string
	{
		if (this.popup.state === 'visible')
		{
			document.body.style.overflow = 'hidden';
			this.scrollEl.nativeElement.scrollTop = 100;
			return 'visible';
		}
		else if (this.popup.state === 'hidden')
		{
			document.body.style.overflow = 'auto';
			return 'hidden';
		}
		else
		{
			return '';
		}
	}

	public hidePopup(): void
	{
		this.popup.hide();
	}

}
