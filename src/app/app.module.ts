import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BNBRoutingModule, BNBComponents, BNBServices }	from './bnb/bnb.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
	declarations: [
		AppComponent,
		BNBComponents
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		BNBRoutingModule,
		HttpClientModule
	],
	providers: [
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: HammerGestureConfig
		},
		BNBServices
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
