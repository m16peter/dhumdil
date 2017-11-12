export class Header
{
	public loaded: boolean;
	public home: any;
	public links: any;

	constructor(header: any)
	{
		try
		{
			if (header && header.home && header.links)
			{
				this.loaded = true;
				this.home = header.home;
				this.links = header.links;
			}
			else
			{
				this.reset(header);
			}
		}
		catch (e)
		{
			this.reset(e);
		}
	}

	private reset(e: any): void
	{
		console.log('error', e);
		this.loaded = false;
		this.home = {};
		this.links = [];
	}

}
