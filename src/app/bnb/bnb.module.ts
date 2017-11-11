import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { PopupComponent } from './components/popup/popup.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	imports: [
		// modules
		CommonModule
	],
	declarations: [
		// components
		SliderComponent,
		HeaderComponent,
		NavigationComponent,
		PopupComponent,
		FooterComponent
	],
	providers: [
		// services
	],
	exports: [
		BNBComponent,
		PopupComponent
	]
})

export class BNBModule {}
