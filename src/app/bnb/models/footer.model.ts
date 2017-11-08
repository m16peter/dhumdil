import * as json from './../../../assets/json/footer.json';
const footer = (<any>json).data;

export class Footer
{
	public isLoaded: boolean;
	public title: any;
	public names: any;
	public locations: any;
	public description: any;

	constructor()
	{
		try
		{
			this.title = footer.title;
			this.names = footer.names;
			this.locations = footer.locations;
			this.description = footer.description;
			this.isLoaded = true;
		}
		catch (e)
		{
			this.title = {};
			this.names = [];
			this.locations = [];
			this.description = {};
			this.isLoaded = false;
		}
	}
}
