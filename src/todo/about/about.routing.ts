import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
// import { AboutItemComponent } from './about-item.component';

const routes: Routes = [
	{
		path: '',
		component: AboutComponent
		// children: [
		// 	{
		// 		path: ':item',
		// 		component: AboutItemComponent
		// 	}
		// ]
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

export class AboutRouting {}

export const AboutComponents = [
	AboutComponent
	// AboutItemComponent
];
