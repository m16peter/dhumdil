import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
  @Input() header;
  @Input() browser;
  @Input() app;

  public toggleNavigation(): void
  {
    // TODO
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
