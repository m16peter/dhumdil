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

      json.data.names.forEach((name) =>
      {
        this.names.push(name);
      });
      json.data.locations.forEach((location) =>
      {
        this.locations.push(location);
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
