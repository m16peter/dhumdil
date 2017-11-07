import * as json from './../../../assets/json/app.json';
const app = (<any>json).data;

export class App
{
	public pathToImg: string;
	public languages: any;
	public selectedLang: string;

	constructor()
	{
		try
		{
			this.pathToImg = app['path-to-img'];
			this.languages = app['languages'];
			this.selectedLang = app['languages'][0];
		}
		catch (e)
		{
			console.log(e);
			this.pathToImg = '';
			this.languages = [];
			this.selectedLang = '';
		}
	}
}
