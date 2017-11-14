export class Header
{
  public loaded: boolean;
  public home: any;
  public links: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.loaded = false;
    this.home = {};
    this.links = [];
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
      if (json.data && json.data.home && json.data.links)
      {
        this.loaded = true;
        this.home = json.data.home;
        this.links = json.data.links;
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
