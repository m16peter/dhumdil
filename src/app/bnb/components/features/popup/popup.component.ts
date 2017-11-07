import { Component, Input } from '@angular/core';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.view.html',
	styleUrls: ['./popup.style.scss']
})

export class PopupComponent
{
	public animation = '';

	@Input() popup;
	@Input() app;

	public onClose(): void
	{
		this.animation = 'close';
		setTimeout(() =>
		{
			this.popup.isVisible = false;
		}, 300);
	}

	public imgSrc(icon: string): string
	{
		return (this.app.pathToImg + icon);
	}

}
