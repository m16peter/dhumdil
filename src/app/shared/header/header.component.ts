import { Component, Input } from "@angular/core";
import { I18nService } from '@app/core/services/i18n.service';
import { ScrollService } from '@app/core/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.style.scss']
})

export class HeaderComponent
{
  public isActive: boolean;

  @Input() header;
  @Input() browser;
  @Input() app;

  constructor(private i18nService: I18nService, private scrollService: ScrollService)
  {
    this.isActive = false;
  }

  public toggleNavigation(): void
  {
    this.isActive ? this.closeNavigation() : this.openNavigation();
  }

  public headerState(): string
  {
    if (this.isActive)
    {
      return ('header_active');
    }
    else
    {
      return ('');
    }
  }

  public scrollTo(position: number): void
  {
    this.scrollService.scrollTo(position);
    this.closeNavigation();
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.browser.lang);
  }

  public openNavigation(): void
  {
    this.isActive = true;
    document.body.style.overflow = 'hidden';
  }

  public closeNavigation(): void
  {
    this.isActive = false;
    document.body.style.overflow = 'auto';
  }
}
