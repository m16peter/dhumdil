export class Popup
{
  public state: string;
  public title: string;
  public lines: any;

  constructor()
  {
    this.init();
  }

  private init(): void
  {
    this.state = '';
    this.title = '';
    this.lines = [];
  }

  public show(): void
  {
    this.state = 'visible';
  }

  public hide(): void
  {
    this.state = 'hidden';
  }

  public update(popup: any): void
  {
    console.log(popup);
    try
    {
      this.title = popup.title;
      this.lines = popup.lines;
      this.show();
    }
    catch (e)
    {
      console.log('error', e);
      this.init();
    }
  }
}
