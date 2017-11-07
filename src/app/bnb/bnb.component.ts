import { Component, ViewChildren, HostListener, AfterViewInit, ChangeDetectorRef, ViewChild  } from "@angular/core";

// import * as json from './assets/data/test.json';
// const word = (<any>json).data;

@Component({
	selector: 'bnb-app',
	templateUrl: './bnb.view.html',
	styleUrls: ['./bnb.style.scss']
})

export class BNBComponent implements AfterViewInit
{
	public main: any;

	@ViewChildren('breakPoints') breakPoints;

	@ViewChild('scrollTracker') scrollTracker;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	@HostListener('window:scroll') onScroll()
	{
		this.handleScroll();
	}

	constructor(private cdr: ChangeDetectorRef)
	{
		this.main =
		{
			'browser':
			{
				'width': 0,
				'height': 0
			},
			'sideNav':
			{
				'isVisible': -1
			},
			'scrollSection':
			{
				'activeSection': -1,
				'breakPoints': []
			}
		};
	}

	ngAfterViewInit(): void
	{
		this.handleResize();
		this.handleScroll();
		this.cdr.detectChanges();
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

	private handleScroll(): void
	{
		if (this.main.scrollSection.breakPoints.length !== 0 && this.main.width > 600)
		{
			const n = this.main.scrollSection.breakPoints.length;

			for (let i = 0; i < n; i++)
			{
				if (window.pageYOffset >= this.main.scrollSection.breakPoints[i])
				{
					this.main.scrollSection.activeSection = i;
				}
				else
				{
					break;
				}
			}
		}
	}

	private handleResize(): void
	{
		this.main.width = window.innerWidth;
		this.main.height = window.innerHeight;

		if (this.breakPoints._results.length >= 2)
		{
			if (this.main.width <= 1024)
			{
				const offset = (this.breakPoints._results[0].nativeElement.offsetTop + this.scrollTracker.nativeElement.clientHeight - 100);
				const firstEl = this.scrollTracker.nativeElement.clientHeight + 50;
				this.initScrollSections(offset, firstEl);
			}
			else if (this.main.width > 600)
			{
				const offset = -(this.breakPoints._results[0].nativeElement.offsetTop + 50);
				this.initScrollSections(offset);
			}
		}
	}

	public toggleSideNav(): void
	{
		if (this.main.sideNav.isVisible === 1)
		{
			this.main.sideNav.isVisible = 0;
		}
		else
		{
			this.main.sideNav.isVisible = 1;
		}
	}

	public sideNavStatus(): string
	{
		return (this.main.sideNav.isVisible === -1 ? '' : (this.main.sideNav.isVisible === 1) ? 'sidenav-active' : 'sidenav-inactive');
	}

	public swipe(ev: any): void
	{
		this.main.sideNav.isVisible = ev;
	}

	public scrollToSection(sectionIndex): void
	{
		this.scrollTo(this.main.scrollSection.breakPoints[sectionIndex]);
	}

	public isActiveSection(i: number): string
	{
		return (this.main.scrollSection.activeSection === i) ? 'section_active' : '';
	}

	private scrollTo(position: number): void
	{
		let now = window.pageYOffset;

		if (position < now)
		{
			const interval = setInterval(() =>
			{
				const diff = (now - position) / 2;
				now -= (diff > 1 ? diff : 1);

				if (position < now)
				{
					window.scrollTo(0, now);
				}
				else
				{
					window.scrollTo(0, position);
					clearInterval(interval);
				}
			}, 20);
		}
		else if (position > now)
		{
			const interval = setInterval(() =>
			{
				const diff = (position - now) / 2;
				now += (diff > 1 ? diff : 1);

				if (position > now)
				{
					window.scrollTo(0, now);
				}
				else
				{
					window.scrollTo(0, position);
					clearInterval(interval);
				}
			}, 20);
		}
	}




	public openPopup(ev: any): void
	{
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}

	private onResize(): void
	{
		this.app['browser'].w = this.bnb.nativeElement.offsetParent.clientWidth;
		this.app['browser'].h = this.bnb.nativeElement.offsetParent.clientHeight - 50;
		this.app['album'].size = min(this.app['browser'].h - 100, this.app['browser'].w / 2);

		if (!this.loading)
		{
			this.app['header'].isFull = (this.app['browser'].w <= ((this.app['header'].length * 250) + 200));

			if (this.app['header'].isFull)
			{
				this.headerComponent.resetAnimation();
				this.headerComponent.closeMenu();
			}
		}

		function min(x, y)
		{
			if (x < y) {
				return (x);
			}
			return (y);
		}
	}

}
