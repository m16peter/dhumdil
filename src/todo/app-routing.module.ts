import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// lazy load all the 'features'
const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/bajas/bajas.module#BajasModule'
  },
  {
    path: '01/:url',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    // Use the option '{ useHash: true }' when combining with backend router
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
