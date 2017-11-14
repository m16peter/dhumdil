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
  {}

}
