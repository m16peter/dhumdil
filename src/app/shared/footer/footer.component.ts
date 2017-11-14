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
}
