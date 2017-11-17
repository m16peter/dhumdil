import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ScrollService
{
  constructor(public ngZone: NgZone)
  {}

  private scrollUp(position: number, now: number): void
  {
    now -= Math.ceil((now - position) / 10 + 10);

    if (position < now)
    {
      window.scrollTo(0, now);
      requestAnimationFrame(() => this.scrollUp(position, now));
    }
    else
    {
      window.scrollTo(0, position);
    }
  }

  private scrollDown(position: number, now: number)
  {
    now += Math.ceil((position - now) / 10 + 10);

    if (position > now)
    {
      window.scrollTo(0, now);
      requestAnimationFrame(() => this.scrollDown(position, now));
    }
    else
    {
      window.scrollTo(0, position);
    }
  }

  public scrollTo(position: number): void
	{
    this.ngZone.runOutsideAngular(() =>
    {
  		let now = window.scrollY;

  		if (position < now)
  		{
        requestAnimationFrame(() => this.scrollUp(position, now));
        // const interval = setInterval(() =>
  			// {
  			// 	const diff = (now - position) / 2;
  			// 	now -= (diff > 1 ? diff : 1);
        //
  			// 	if (position < now)
  			// 	{
        //     window.scrollTo(0, now);
  			// 	}
  			// 	else
  			// 	{
        //     window.scrollTo(0, position);
  			// 		clearInterval(interval);
  			// 	}
  			// }, 10);
      }
      else if (position > now)
      {
        requestAnimationFrame(() => this.scrollDown(position, now));
        // const interval = setInterval(() =>
  			// {
  			// 	const diff = (position - now) / 2;
  			// 	now += (diff > 1 ? diff : 1);
        //
  			// 	if (position > now)
  			// 	{
        //     window.scrollTo(0, now);
  			// 	}
  			// 	else
  			// 	{
        //     window.scrollTo(0, position);
  			// 		clearInterval(interval);
  			// 	}
  			// }, 10);
      }
    });
	}
}
