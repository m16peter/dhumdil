export class Bnb
{
	public languages: any;

	constructor(languages: any)
	{
		try
		{
			if (languages.length && languages[0].length)
			{
				this.languages = languages;
			}
			else
			{
				console.log('error', languages);
				this.languages = [];
			}
		}
		catch (e)
		{
			console.log('error', e);
			this.languages = [];
		}
	}
}
