export class App
{
  public languages: any;

  constructor()
  {
    this.init();
  }

  public initialize(json: any): void
  {
    try
    {
      if (json.data.languages)
      {
        this.languages = [];
        json.data.languages.forEach((lang) =>
        {
          this.languages.push(lang);
        });
      }
      else
      {
        this.reset(json.data.languages);
      }
    }
    catch (e)
    {
      this.reset(e.message);
    }
  }

  private init(): void
  {
    this.languages = [];
  }

  private reset(e: any): void
  {
    console.log('error:', e);
    this.init();
  }

}
