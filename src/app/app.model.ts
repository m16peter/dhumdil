export class App
{
  public app: any;
  public languages: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.app = {};
    this.languages = [];
  }

  private handleError(e: any): void
  {
    console.log('error:', e);
    this.init();
  }

  public initialize(json: any): void
  {
    console.log(json);
    try
    {
      if (json.data.app && json.data.languages)
      {
        this.app = json.data.app;
        this.languages = json.data.languages;
      }
      else
      {
        this.handleError("Undefined 'app' or 'languages'");
      }
    }
    catch (e)
    {
      this.handleError(e.message);
    }
  }
}
