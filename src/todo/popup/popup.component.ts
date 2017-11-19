import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.view.html',
  styleUrls: ['./popup.style.scss']
})

// TODO: refactor!! (make an instance for each popup view...)
export class PopupComponent
{
  public state = '';

  @Input() popup;
  @Input() browser;

  @ViewChild('scrollContainer') scrollContainer;

  public getPopupState(): string
  {
    // workaround for zone.js...
    if (this.popup.state !== this.state)
    {
      if (this.popup.state === 'visible')
      {
        document.body.style.overflow = 'hidden';
        this.scrollContainer.nativeElement.scrollTop = 100;
      }
      else
      {
        document.body.style.overflow = 'auto';
      }
      this.state = this.popup.state;
    }
    return (this.state);
  }

  public hidePopup(): void
  {
    this.popup.hide();
  }
}
