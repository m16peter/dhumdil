import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BNBComponent } from "./bnb.component";
import { EmptyComponent } from './components/content/empty/empty.component';
import { ErrorComponent } from './components/content/error/error.component';
// services
import { HttpService } from "./bnb/services/http.service";

const routes: Routes = [
	{
		path: '',
		component: EmptyComponent,
		pathMatch: 'full'
	},
	{
		path: '**',
		component: ErrorComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class BNBRoutingModule {}

export const BNBComponents = [
	BNBComponent,
	EmptyComponent,
	ErrorComponent
];

export const BNBService = [
	HttpService
];
