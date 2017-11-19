import { Component, Input, HostListener } from '@angular/core';
import { I18nService } from '@app/core/services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.view.html',
  styleUrls: ['./footer.style.scss']
})

export class FooterComponent
{
  public zIndex: number;

  @Input() footer;
  @Input() app;

  @HostListener('window:scroll') onScroll()
  {
    this.handleScroll();
  }

  constructor(private i18nService: I18nService)
  {
    this.zIndex = 0;
  }

  private handleScroll(): void
  {
    if (window.scrollY >= (this.app.height - 50))
    {
      this.zIndex = 100;
    }
    else
    {
      this.zIndex = 0;
    }
  }

  public i18n(obj: any, key: string): any
  {
    return this.i18nService.i18n(obj, key, this.app.lang);
  }
}
