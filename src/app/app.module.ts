import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		AppRouting
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: []
})

export class AppModule {}
