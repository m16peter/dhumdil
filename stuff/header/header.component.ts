import { Component, Input, Output, EventEmitter } 	from "@angular/core";
// import { Header } 									from "./header.model";

@Component({
	selector: 'bnb-header',
	templateUrl: './header.view.html',
	styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
	// public header: Header;
	//
	// @Input() app;
	// @Output() toggleNavigation = new EventEmitter();
	//
	// constructor()
	// {
	// 	this.header = new Header();
	// }
	//
	// public imgSrc(icon: string): string
	// {
	// 	return (this.app.path.img + icon);
	// }
	//
	// public toggleNavigationEv(): void
	// {
	// 	this.toggleNavigation.emit();
	// }
}
