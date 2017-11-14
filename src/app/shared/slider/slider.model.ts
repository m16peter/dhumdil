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

  private handleError(e: any): void
  {
    console.log('error', e);
    this.init();
  }

  public initialize(json: any): void
  {
    try
    {
      if (json.data.slides)
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
      else
      {
        this.handleError(json);
      }
    }
    catch (e)
    {
      this.handleError(e);
    }
  }
}
