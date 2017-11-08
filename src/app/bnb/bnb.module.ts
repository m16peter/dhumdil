import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BNBComponent } 		from "./bnb.component";
import { SliderComponent } 		from "./components/slider/slider.component";
import { FooterComponent } 		from './components/footer/footer.component';
import { EmptyComponent } 		from './components/content/empty/empty.component';
import { ErrorComponent } 		from './components/content/error/error.component';

// TODO: implement fetures module for npm, pipes, directives and modules, services, and other feature components
import { PopupComponent } 		from "./components/features/popup/popup.component";
// import { ScrollService } 		from "./services/scroll.service";
// import { HttpService } 			from "./services/http.service";


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
	imports: [
		RouterModule.forRoot( routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})

export class BNBRoutingModule {}

export const BNBComponents = [
	BNBComponent,
	PopupComponent,
	SliderComponent,
	FooterComponent,
	EmptyComponent,
	ErrorComponent
];

export const BNBServices = [];

export const BNBPipes = [];

export const BNBDirectives = [];
