import * as json from './../../../assets/json/footer.json';
const footer = (<any>json).data;

export class Footer
{
	public isLoaded: boolean;
	public website: any;
	public names: any;
	public locations: any;

	constructor()
	{
		try
		{
			this.website = footer.website;
			this.names = footer.names;
			this.locations = footer.locations;
			this.isLoaded = true;
		}
		catch (e)
		{
			this.website = {};
			this.names = [];
			this.locations = [];
			this.isLoaded = false;
		}
	}
}
