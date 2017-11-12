export class Popup
{
	public state: string;
	public title: string;
	public lines: any;

	constructor()
	{
		this.init();
	}

	public update(popup: any): void
	{
		try
		{
			if (popup.title.length && popup.lines[0].length)
			{
				this.show();
				this.title = popup.title;
				this.lines = popup.lines;
			}
			else
			{
				this.reset(popup);
			}
		}
		catch (e)
		{
			this.reset(e);
		}
	}

	private init(): void
	{
		this.state = '';
		this.title = '';
		this.lines = [];
	}

	public show(): void
	{
		this.state = 'visible';
	}

	public hide(): void
	{
		this.state = 'hidden';
	}

	private reset(e: any): void
	{
		console.log('error', e);
		this.init();
	}

}
