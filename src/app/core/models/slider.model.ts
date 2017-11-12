export class Slider
{
	public firstTime: boolean;
	public active: number;
	public slides: any;
	public loaded: boolean;

	constructor(json: any)
	{
		try
		{
			if (json.data)
			{
				this.init(json.data);
			}
			else
			{
				this.reset(json);
			}
		}
		catch (e)
		{
			this.reset(e);
		}
	}

	private init(slider: any): void
	{
		this.active = 0;
		this.loaded = true;
		this.firstTime = true;
		slider.forEach((slide) =>
		{
			this.slides.push(slide);
		});
	}

	private reset(e: any): void
	{
		console.log('error', e);
		this.active = -1;
		this.slides = [];
		this.loaded = false;
	}

}
