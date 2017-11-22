// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
//
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import { switchMap } from 'rxjs/operators';
//
// @Component({
// 	selector: 'app-about-item',
// 	template:
//   `
//     <div *ngIf="id$ | async as id">
//       <h2>{{ id }}</h2>
//     </div>
//   `
// })
//
// export class AboutItemComponent implements OnInit
// {
//   public id$: Observable<number>;
//   private subscription: Subscription;
//
//   constructor(
//     private route: ActivatedRoute,
//     private paramsService: ParamsService
//   ) {}
//
//   ngOnInit()
//   {
//     this.id$ = this.route.params.pipe(switchMap((params: Params) =>
//     {
//       return this.paramsService.getParams(+params.get('id'));
//     }));
//   }
//
//   ngOnDestroy()
//   {
//     this.subscription.unsubscribe();
//   }
// }
