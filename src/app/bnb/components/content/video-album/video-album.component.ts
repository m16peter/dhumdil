import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-video-album',
	templateUrl: './video-album.html',
	styleUrls: ['./video-album.scss']
})

export class VideoAlbumComponent {

	public album: any;

	@Input() app;
	@Input() videoAlbum;

	@Output() play = new EventEmitter();
	@Output() pause = new EventEmitter();
	@Output() scroll = new EventEmitter();
	@Output() selectID = new EventEmitter();

	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Video Album');
		meta.addTags([{
			name: 'description',
			content: 'The requested resource could not be found.'
		}]);
		this.album = {
			'selected': -1,
			'focused': 0,
			'isLocked': false,
		};
	}

	public getStyle(index: number): string
	{
		let style = (this.isSelected(index)) ? 'selected ' : '';

		if (this.isFocused(index))
		{
			style += 'focused';
		}
		else if (this.isFocused(index + 1))
		{
			style += 'focus-previous';
		}
		else if (this.isFocused(index - 1))
		{
			style += 'focus-next';
		}
		else if (this.isFocused(index + 2))
		{
			style += 'unfocus-previous';
		}
		else if (this.isFocused(index - 2))
		{
			style += 'unfocus-next';
		}
		return style;
	}

	public select(index: number): void
	{
		console.log('selected', index);
		this.album['selected'] = index;
		this.scroll.emit();
	}

	public focus(index: number): void
	{
		if (!this.isFocused(index))
		{
			console.log('focused', index);
			this.album['selected'] = -1;
			this.album['focused'] = index;
			this.scroll.emit();
		}
		else
		{
			this.select(index);
		}
	}

	public selectYT(index): void
	{
		this.selectID.emit(index);
	}

	public playYT(): void
	{
		this.play.emit();
	}

	public pauseYT(): void
	{
		this.pause.emit();
	}

	public isFocused(index: number): boolean
	{
		return (index === this.album['focused']);
	}

	public isSelected(index: number): boolean
	{
		return (index === this.album['selected']);
	}

	public isState(state: string, id: string): boolean
	{
		if (this.app['player'].id === id)
		{
			switch (state)
			{
				case 'unselected':
				{
					return (this.app['player'].state === 0);
				}
				case 'playing':
				{
					return (this.app['player'].state === 1);
				}
				case 'paused':
				{
					return (this.app['player'].state >= 2);
				}
				case 'loading':
				{
					return (this.app['player'].state < 0);
				}
				default: return (false);
			}
		}
		else {
			switch (state)
			{
				case 'unselected':
				{
					return (true);
				}
				default: return (false);
			}
		}
	}

	public focusAlbum(index: number, timeout = false): void
	{
		if (timeout || !this.album.isLocked)
		{
			this.album['selected'] = -1;
			this.album.isLocked = true;

			if (this.album['focused'] > index)
			{
				this.focus(this.album['focused'] - 1);

				setTimeout(() => {
					this.focusAlbum(index, true);
				}, 100);
			}
			else if (this.album['focused'] < index)
			{
				this.focus(this.album['focused'] + 1);

				setTimeout(() => {
					this.focusAlbum(index, true);
				}, 100);
			}
			else
			{
				this.album.isLocked = false;
			}
		}
	}

	public src(icon: string): string
	{
		return (this.app['path'].app + icon);
	}

	/* main.ts


	public onSelectID(id: string): void
	{
		console.log('selected id', id);
		this.youtubePlayer.selectID(id)
	}

	public playYT(): void
	{
		this.youtubePlayer.play();
	}

	public closeYT(): void
	{
		this.youtubePlayer.close();
	}

	public pauseYT(): void
	{
		this.youtubePlayer.pause();
	}

	public toggleYT(): void
	{
		if (this.app['player'].isVisible)
		{
			if (this.bnb.nativeElement.scrollTop === this.app['browser'].h)
			{
				this.app['player'].isVisible = false;
			}
		}
		else
		{
			this.app['player'].isVisible = true;
		}
		this.scrollTo('content');
	}


	*/

}
