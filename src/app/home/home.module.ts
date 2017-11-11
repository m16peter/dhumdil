import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRouting } from './home.routing';

@NgModule({
	imports: [
		// modules
		CommonModule,
		HomeRouting
	],
	declarations: [
		// components
		HomeComponent
	],
	providers: [
		// services
	]
})

export class HomeModule {}
