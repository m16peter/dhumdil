/*
import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService
{
	public scrollTo(position: number): void
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
}
*/
