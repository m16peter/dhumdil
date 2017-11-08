import { Component, Input } from "@angular/core";

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.view.html',
	styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
	@Input() app;
	@Input() popup;
	@Input() footer;

	public imgSrc(icon: string): string
	{
		return (this.app.pathToImg + icon);
	}

	public isSet(str: string): boolean
	{
		return (str !== '');
	}

	public openPopup(data: any): void
	{
		this.popup.update({
			'title': data.title,
			'lines': data.lines
		});
		this.popup.show();
	}

}
