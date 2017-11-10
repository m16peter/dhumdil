import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>Root</h1>
	<nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
	<router-outlet></router-outlet>`
})

export class AppComponent {}
