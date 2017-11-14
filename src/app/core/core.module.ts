import { NgModule } from '@angular/core';

// HttpModule is depracated but HttpClientModule is buggy... so replace it once it's fixed
// https://github.com/angular/angular/issues/18680
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
