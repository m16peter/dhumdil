export class App
{
  public brand: any;
  public languages: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.brand = {};
    this.languages = [];
  }

  public initialize(json: any): void
  {
    console.log(json);
    try
    {
      this.brand = json.data.brand;
      this.languages = json.data.languages;
    }
    catch (e)
    {
      console.log('error:', e);
      this.init();
    }
  }
}
