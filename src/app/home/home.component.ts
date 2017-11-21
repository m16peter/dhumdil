import { Component } from '@angular/core';
import { MetaService } from '@app/core/services/meta.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.view.html',
  styleUrls: ['home.style.scss']
})

export class HomeComponent
{
  constructor(private meta: MetaService)
  {
    this.meta.update('Home', 'Home description');
  }
}
