import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
  public menuIsActive: boolean;

  @Input() header;
  @Input() browser;
  @Input() app;

  constructor()
  {
    this.menuIsActive = false;
  }

  public toggleNavigation(): void
  {
    this.menuIsActive = !this.menuIsActive;
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
