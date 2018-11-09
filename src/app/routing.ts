import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuilderSimpleComponent } from 'src/app/components/builders/builder-simple/builder-simple.component';
import { BuilderAdvancedComponent } from 'src/app/components/builders/builder-advanced/builder-advanced.component';

import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

// The router selects the route with a first match wins strategy.
// first match wins strategy: https://angular.io/guide/router#example-config
// Wildcard routes are the least specific routes in the route configuration.
// Be sure it is the last route in the configuration.
const appRoutes: Routes = [
  { path: 'simple', component: BuilderSimpleComponent, pathMatch: 'full' },
  { path: 'advanced', component: BuilderAdvancedComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/advanced', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);
