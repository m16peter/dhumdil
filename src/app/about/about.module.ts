import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AboutRouting, AboutComponents } from './about.routing';

@NgModule({
	imports: [
		// modules
		CommonModule,
		AboutRouting
	],
	declarations: [
		// components
		AboutComponents
	],
	providers: [
		// services
	]
})

export class AboutModule {}
