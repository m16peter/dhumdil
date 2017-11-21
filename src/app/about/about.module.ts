import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AboutRouting, AboutComponents } from './about.routing';

@NgModule({
	imports: [
		CommonModule,
		AboutRouting
	],
	declarations: [
		AboutComponents
	]
})

export class AboutModule {}
