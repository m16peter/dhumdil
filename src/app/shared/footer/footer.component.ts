import { Component, Input } from '@angular/core';
import { I18nService } from '@app/core/services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.view.html',
  styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
  @Input() footer;
  @Input() browser;

  constructor(private i18nService: I18nService)
  {}

  public isSet(str: string): boolean
  {
    return (str !== '');
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.browser.lang);
  }
}
