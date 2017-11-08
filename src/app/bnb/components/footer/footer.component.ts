import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.view.html',
	styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
	@Input() app;
	@Input() footer;

	@Output() openPopupEv = new EventEmitter();

	public openPopup(): void
	{
		this.openPopupEv.emit({
			'title': this.footer.description[this.app.selectedLang].title,
			'lines': this.footer.description[this.app.selectedLang].lines
		});
	}

	public imgSrc(icon: string): string
	{
		return (this.app.pathToImg + icon);
	}

	public isSet(str: string): boolean
	{
		return (str !== '');
	}

}
