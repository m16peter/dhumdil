export class Footer
{
  public loaded: boolean;
  public contact: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.loaded = false;
    this.contact = {};
  }

  public initialize(json: any): void
  {
    try
    {
      console.log(json);
      this.contact = json.data.contact;
      this.loaded = true;
    }
    catch (e)
    {
      console.log('error', e);
      this.init();
    }
  }
}
