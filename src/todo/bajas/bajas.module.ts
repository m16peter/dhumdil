import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BajasComponent } from './bajas.component';

import { BajasRouting } from './bajas.routing';

@NgModule({
	imports: [
		// modules
		CommonModule,
		BajasRouting
	],
	declarations: [
		// components
		BajasComponent
	],
	providers: [
		// services
	]
})

export class BajasModule {}
