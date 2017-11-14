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

  private handleError(e: any): void
  {
    console.log('error', e);
    this.init();
  }


  public update(popup: any): void
  {
    try
    {
      if (popup.title && popup.lines)
      {
        this.title = popup.title;
        this.lines = popup.lines;
        this.show();
      }
      else
      {
        this.handleError(popup);
      }
    }
    catch (e)
    {
      this.handleError(e);
    }
  }

}
