import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// lazy load all the features
const routes: Routes = [
	{
		path: '',
		loadChildren: 'app/features/home/home.module#HomeModule'
	},
	{
		path: 'about',
		loadChildren: 'app/features/about/about.module#AboutModule'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		// Use the option '{ useHash: true }' when combining with backend router
		// (example: with laravel's router or deployed on gh-pages)
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
