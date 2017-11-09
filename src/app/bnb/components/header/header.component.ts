import { Component, Input } from "@angular/core";

@Component({
	selector: 'bnb-header',
	templateUrl: './header.view.html',
	styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
	@Input() app;
	@Input() header;

	public toggleNavigation(): void
	{
		// TODO
	}

}
