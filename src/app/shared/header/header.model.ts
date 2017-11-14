export class Header
{
  public loaded: boolean;
  public links: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.loaded = false;
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
      if (json.data.links)
      {
        this.loaded = true;
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
