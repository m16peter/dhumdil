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

  public initialize(json: any): void
  {
    console.log(json);
    try
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
    catch (e)
    {
      console.log('error', e);
      this.init();
    }
  }
}
