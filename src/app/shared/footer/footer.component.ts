import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.view.html',
  styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
  @Input() footer;
  @Input() browser;

  public isSet(str: string): boolean
  {
    return (str !== '');
  }

  public i18n(val: any, key: string): any
  {
    try
    {
      const KEY = key + "-i18n";
      const VAL = val[KEY][this.browser.lang];
      return (VAL);
    }
    catch (e)
    {
      return (val[key]);
    }
  }
}
