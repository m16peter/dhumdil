export class Popup
{
	public state = '';
	public title = '';
	public lines = [];

	public update(data: any): void
	{
		this.title = data.title;
		this.lines = data.lines;
	}

	public show(): void
	{
		this.state = 'visible';
	}

	public hide(): void
	{
		this.state = 'hidden';
	}

}
