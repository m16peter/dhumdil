import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { BNBModule } from './bnb/bnb.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRouting,
		BNBModule
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
