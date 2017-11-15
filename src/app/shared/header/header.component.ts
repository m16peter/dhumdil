import { Component, Input, HostListener } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
  public menuIsActive: boolean;
  public headerIsActive: boolean;

  @Input() header;
  @Input() browser;
  @Input() app;

  @HostListener('window:scroll') onScroll()
  {
    this.handleScroll();
  }

  constructor()
  {
    this.menuIsActive = false;
    this.headerIsActive = false;
  }

  public toggleNavigation(): void
  {
    this.menuIsActive = !this.menuIsActive;
  }

  public handleScroll(): void
  {
    this.headerIsActive = (document.scrollingElement.scrollTop !== 0);
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
