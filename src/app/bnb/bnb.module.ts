import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// npm
// import {} 					from '@angular-pipes';

// components
import { BNBComponent } 		from "./bnb.component";
import { SliderComponent } 		from "./components/slider/slider.component";
import { PopupComponent } 		from "./components/features/popup/popup.component";
import { EmptyComponent } 		from './components/content/empty/empty.component';
import { ErrorComponent } 		from './components/content/error/error.component';

// services
import { ScrollService } 		from "./services/scroll.service";
import { HttpService } 			from "./services/http.service";

// pipes
import { SafeUrlPipe } 			from "./pipes/safe-url.pipe";

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
	EmptyComponent,
	ErrorComponent
];

export const BNBServices = [
	ScrollService,
	HttpService
];

export const BNBPipes = [
	SafeUrlPipe
];

export const BNBDirectives = [

];
