import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'app/home/home.module#HomeModule'
	},
	{
		path: 'about',
		loadChildren: 'app/about/about.module#AboutModule'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		// The option '{ useHash: true }' is useful when combined with backend router (like laravel or github pages)
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})

export class AppRouting {}
