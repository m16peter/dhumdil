export class Bnb
{
	public loaded = false;
	public languages = [];

	constructor(languages: any)
	{
		try
		{
			if (languages.length && languages[0].length)
			{
				this.languages = languages;
				this.loaded = true;
			}
		}
		catch (e)
		{
			console.log(e.message);
		}
	}
}
