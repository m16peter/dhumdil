import * as json from './../../../assets/data/footer/footer.json';
const footer = (<any>json).data;

export class Footer
{
	public loaded: boolean;
	public website: any;
	public names: any;
	public locations: any;

	constructor()
	{
		try
		{
			this.loaded = true;
			this.website = footer.website;
			this.names = footer.names;
			this.locations = footer.locations;
		}
		catch (e)
		{
			// TODO: handle errors...
			console.log(e);
			this.loaded = false;
			this.website = {};
			this.names = [];
			this.locations = [];
		}
	}
}
