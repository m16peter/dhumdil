import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BajasComponent } from './bajas.component';

const routes: Routes = [
	{
		path: '',
		component: BajasComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class BajasRouting {}
