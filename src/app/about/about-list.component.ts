import { Component } from '@angular/core';

@Component({
	selector: 'app-about-list',
	template: `
	<h1>List</h1>
	<nav>
		<a routerLink="1024" routerLinkActive="active">Item 1</a>
		<a routerLink="2048" routerLinkActive="active">Item 2</a>
		<a routerLink="4096" routerLinkActive="active">Item 3</a>
	</nav>
  <router-outlet></router-outlet>
  `
})

export class AboutListComponent {}
