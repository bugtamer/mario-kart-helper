import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleComponent } from 'src/app/components/kart-builders/simple/simple.component';

import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

// The router selects the route with a first match wins strategy.
// first match wins strategy: https://angular.io/guide/router#example-config
// Wildcard routes are the least specific routes in the route configuration.
// Be sure it is the last route in the configuration.
const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/simple', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);
