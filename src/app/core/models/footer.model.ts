export class Footer
{
	public loaded: boolean;
	public contact: any;
	public names: any;
	public locations: any;

	constructor(footer: any)
	{
		try
		{
			if (footer.contact && footer.names.length && footer.locations.length)
			{
				this.loaded = true;
				this.contact = footer.contact;
				this.names = footer.names;
				this.locations = footer.locations;
			}
			else
			{
				this.reset(footer);
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
		this.contact = {};
		this.names = [];
		this.locations = [];
	}

}
