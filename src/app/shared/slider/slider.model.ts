export class Slider
{
  public loaded: boolean;
  public slides: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.slides = [];
    this.loaded = false;
  }

  public initialize(json: any): void
  {
    console.log(json);
    try
    {
      json.data.slides.forEach((item) =>
      {
        if (item.show)
        {
          this.slides.push(item.slide);
        }
      });
      this.loaded = true;
    }
    catch (e)
    {
      console.log('error', e);
      this.init();
    }
  }
}
