export class App
{
  public languages: any;
  public icon: string;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
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
      if (json.data.languages && json.data.icon)
      {
        this.languages = [];

        json.data.languages.forEach((lang) =>
        {
          this.languages.push({
            'id': lang.id,
            'title': lang.title,
            'icon': lang.icon
          });
        });
        this.icon = json.data.icon;
      }
      else
      {
        this.handleError("Undefined 'languages' or 'icon'");
      }
    }
    catch (e)
    {
      this.handleError(e.message);
    }
  }
}
