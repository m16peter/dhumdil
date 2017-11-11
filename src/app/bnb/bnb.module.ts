import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { BNBComponent } from './bnb.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

// services
import { HttpService } from './services/http.service';
import { ScrollService } from './services/scroll.service'

@NgModule({
	imports: [
		// modules
		CommonModule
	],
	declarations: [
		// components
		BNBComponent,
		SliderComponent,
		HeaderComponent,
		NavigationComponent,
		FooterComponent
	],
	providers: [
		// services
		HttpService,
		ScrollService
	]
})

export class BNBModule {}
