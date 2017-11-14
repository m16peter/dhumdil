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

  private handleError(e: any): void
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
        this.links = [];
        json.data.links.forEach((item) =>
        {
          if (item.show)
          {
            this.links.push(item.link);
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
