export class Footer
{
  public loaded: boolean;
  public contact: any;
  public names: any;
  public locations: any;
  public zIndex: number;

  constructor()
  {
    this.init();
    this.zIndex = 0;
  }

  private init(): void
  {
    this.loaded = false;
    this.contact = '';
    this.names = [];
    this.locations = [];
  }

  public initialize(json: any): void
  {
    try
    {
      console.log(json);
      this.names = [];
      this.locations = [];
      this.contact = json.data.contact;

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
