export class Popup
{
	public state: string;
	public title: string;
	public lines: any;

	constructor()
	{
		this.state = '';
		this.title = '';
		this.lines = [];
	}

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
