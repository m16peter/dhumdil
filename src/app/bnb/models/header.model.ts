import * as json from './../../../assets/json/header.json';
const header = (<any>json).data;

export class Header
{
	public loaded: boolean;
	public home: any;
	public links: any;

	constructor()
	{
		try
		{
			this.loaded = true;
			this.home = header.home;
			this.links = header.links;
		}
		catch (e)
		{
			// TODO: handle errors...
			console.log(e);
			this.loaded = false;
			this.home = {};
			this.links = [];
		}
	}
}
