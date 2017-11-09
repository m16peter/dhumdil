import * as json from './../../../assets/data/app/app.json';
const app = (<any>json).data;

export class App
{
	public loaded: boolean;
	public languages: any;

	constructor()
	{
		try
		{
			this.loaded = true;
			this.languages = app.languages;
		}
		catch (e)
		{
			// TODO: handle errors...
			console.log(e);
			this.loaded = false;
			this.languages = [];
		}
	}
}
