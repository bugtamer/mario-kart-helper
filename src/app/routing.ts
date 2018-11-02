import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from 'src/app/components/content/content.component';

import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

// it finishes when makes macth (from concrete to more generic)
const appRoutes: Routes = [
  { path: 'simple', component: ContentComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/simple', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);
