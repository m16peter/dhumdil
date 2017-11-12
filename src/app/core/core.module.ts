import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HttpGetService } from './services/http-get.service';
import { MetaService } from './services/meta.service';
import { LocalStorageService } from './services/local-storage.service';

import { AppService } from './services/app.service';

@NgModule({
	imports: [
		HttpModule
	],
	providers: [
		HttpGetService,
		MetaService,
		LocalStorageService,
		AppService
	],
	declarations: []
})

export class CoreModule {}
