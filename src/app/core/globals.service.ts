import { Injectable } from '@angular/core';

// GLOBAL VARIABLES
@Injectable()
export class GlobalsService
{
  public app =
  {
    width: 0,
    height: 0,
    featureKey: '',
    languageId: '',
    boxSize: 0,
    cardSize: { w: 0, h: 0 }
  };

  // base routes (read only)
  public routes =
  {
    home: '/',
    videoArchive: '01/',
    photoArchive: '02/'
  };

  // path to jsons (read only)
  public pathTo =
  {
    general: 'assets/app/general.json',
    features: 'assets/app/features.json',
    languages: 'assets/app/languages.json',
    home: 'assets/home/home.json',
    videoArchive: 'assets/video-archive/video-archive.json',
    photoArchive: 'assets/photo-archive/photo-archive.json'
  };

  // browser setup (read only)
  public browserSetup =
  {
    localStorageId: 'app-language',
    pageTitle: 'Angular 5',
    metaDescription: 'Angular - one framework to rule them all!'
  };

  // json data (read only)
  public json =
  {
    general: { loaded: false },
    languages: { loaded: false },
    features: { loaded: false },
    home: { loaded: false },
    videoArchive: { loaded: false },
    photoArchive: { loaded: false }
  };
}
