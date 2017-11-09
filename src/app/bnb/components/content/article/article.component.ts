import { Component, ViewChildren, HostListener, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';

@Component({
	selector: 'bnb-app',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BNBComponent implements AfterViewInit
{
	public app: App;
	public bnb: any;
	// public popup: Popup;

	@ViewChildren('breakPoints') breakPoints;

	@ViewChild('scrollTracker') scrollTracker;

	@HostListener('window:scroll') onScroll()
	{
		this.handleScroll();
	}

	ngAfterViewInit(): void
	{
		this.handleScroll();
		this.cdr.detectChanges();
	}

	public isActiveSection(i: number): string
	{
		return (this.main.scrollSection.activeSection === i) ? 'section_active' : '';
	}

	public scrollToSection(sectionIndex): void
	{
		this.scrollTo(this.main.scrollSection.breakPoints[sectionIndex]);
	}

	private handleResize(): void
	{
		this.bnb.width = window.innerWidth;
		this.bnb.height = window.innerHeight;

		/*
		if (this.breakPoints._results.length >= 2)
		{
			if (this.bnb.width <= 1024)
			{
				const offset = (this.breakPoints._results[0].nativeElement.offsetTop + this.scrollTracker.nativeElement.clientHeight - 100);
				const firstEl = this.scrollTracker.nativeElement.clientHeight + 50;
				this.initScrollSections(offset, firstEl);
			}
			else if (this.bnb.width > 600)
			{
				const offset = -(this.breakPoints._results[0].nativeElement.offsetTop + 50);
				this.initScrollSections(offset);
			}
		}
		*/
	}


		private initScrollSections(offset: number, firstEl: number = 0): void
		{
			this.main.scrollSection.breakPoints = [];
			const n = this.breakPoints._results.length;
			this.main.scrollSection.breakPoints.push(firstEl);

			for (let i = 1; i < n; i++)
			{
				this.main.scrollSection.breakPoints.push(this.breakPoints._results[i].nativeElement.offsetTop + offset);
			}
		}


}
