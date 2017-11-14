export class Footer
{
  public loaded: boolean;
  public names: any;
  public locations: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.loaded = false;
    this.names = [];
    this.locations = [];
  }

  private reset(e: any): void
  {
    console.log('error', e);
    this.init();
  }

  public initialize(json: any): void
  {
    try
    {
      if (json.data.names && json.data.locations)
      {
        this.loaded = true;
        this.names = [];
        this.locations = [];

        json.data.names.forEach((name) =>
        {
          this.names.push(name);
        });
        json.data.locations.forEach((location) =>
        {
          this.locations.push(location);
        });
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

}
