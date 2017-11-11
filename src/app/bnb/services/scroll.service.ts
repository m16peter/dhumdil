import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService
{
	public toPosition(y: number): void
	{
		let now = window.pageYOffset;

		if (y < now)
		{
			const interval = setInterval(() =>
			{
				const diff = (now - y) / 2;
				now -= (diff > 1 ? diff : 1);

				if (y < now)
				{
					window.scrollTo(0, now);
				}
				else
				{
					window.scrollTo(0, y);
					clearInterval(interval);
				}
			}, 20);
		}
		else if (y > now)
		{
			const interval = setInterval(() =>
			{
				const diff = (y - now) / 2;
				now += (diff > 1 ? diff : 1);

				if (y > now)
				{
					window.scrollTo(0, now);
				}
				else
				{
					window.scrollTo(0, y);
					clearInterval(interval);
				}
			}, 20);
		}
	}
}
