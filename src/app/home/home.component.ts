import { Component, HostListener, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.view.html',
  styleUrls: ['home.style.scss']
})

export class HomeComponent implements AfterViewInit
{
  public home: any;

  @HostListener('window:resize') onResize()
  {
    this.handleResize();
  }

  constructor(private cdr: ChangeDetectorRef)
  {
    this.home = {};
  }

  ngAfterViewInit()
  {
    // this.handleResize();
    // this.cdr.detectChanges();
  }


  private handleResize(): void
  {
    // this.app.width = window.innerWidth;
    // this.app.height = window.innerHeight;
    // this.app.rectangleSize = ((((this.app.width / 2) > (this.app.height - 50)) ? (this.app.height - 50) : (this.app.width / 2)) - 100);
    // this.mobileView = (this.app.width <= 600 || this.app.height <= 600);
  }

}
