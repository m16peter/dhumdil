import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	template: `
	<h1>About</h1>
	<nav>
      <a routerLink="/about" routerLinkActive="active">List</a>
    </nav>
	<router-outlet></router-outlet>`
})

export class AboutComponent {}
