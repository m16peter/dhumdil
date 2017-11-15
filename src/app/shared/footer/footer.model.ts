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

  public initialize(json: any): void
  {
    console.log(json);
    try
    {
      this.names = [];
      this.locations = [];

      json.data.names.forEach((item) =>
      {
        if (item.show)
        {
          this.names.push(item.name);
        }
      });
      json.data.locations.forEach((item) =>
      {
        if (item.show)
        {
          this.locations.push(item.location);
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
