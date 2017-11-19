export class Header
{
  public loaded: boolean;
  public news: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.news = [];
    this.loaded = false;
  }

  public initialize(json: any): void
  {
    try
    {
      console.log(json);
      json.data.news.forEach((item) =>
      {
        if (item.show)
        {
          this.news.push(item.slide);
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
