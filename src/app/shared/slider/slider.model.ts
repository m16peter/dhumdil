export class Slider
{
  public firstTime: boolean;
  public isAutoslideOn: boolean;
  public autoSlide: any;
  public active: number;
  public slides: any;
  public loaded: boolean;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.active = 0;
    this.isAutoslideOn = false;
    this.firstTime = true;
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
      if (json.data)
      {
        json.data.forEach((slider) =>
        {
          if (slider.show)
          {
            this.slides.push(slider.slide);
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
