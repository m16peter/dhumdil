import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';



import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
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
