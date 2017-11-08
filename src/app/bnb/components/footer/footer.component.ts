import { Component, Input } from "@angular/core";

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.view.html',
	styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
	@Input() app;
	@Input() footer;

	public isSet(str: string): boolean
	{
		return (str !== '');
	}
}
