import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { PopupComponent } from './popup/popup.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SliderComponent,
		HeaderComponent,
		NavigationComponent,
		PopupComponent,
		FooterComponent
	],
	exports: [
		CommonModule,
		SliderComponent,
		HeaderComponent,
		PopupComponent,
		FooterComponent
	]
})

export class SharedModule {}
