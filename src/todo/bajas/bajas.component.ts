import { Component } from '@angular/core';
import { MetaService } from '@app/core/services/meta.service';

@Component({
	selector: 'app-bajas',
	templateUrl: 'bajas.view.html',
  styleUrls: ['bajas.style.scss']
})

export class BajasComponent
{
  constructor(private meta: MetaService)
  {
    this.meta.update('Bajas', 'Bajas description...');
  }
}
