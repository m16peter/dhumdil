import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeRouting, HomeComponents } from './home.routing';

@NgModule({
	imports: [
		// modules
		CommonModule,
		HomeRouting
	],
	declarations: [
		// components
		HomeComponents
	],
	providers: [
		// services
	]
})

export class HomeModule {}
