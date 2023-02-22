import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { DesignSystemsLandingComponent } from './design-systems-landing/design-systems-landing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'design-systems-landing', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'design-systems-landing', component: DesignSystemsLandingComponent, data: { text: 'DesignSystemsLanding' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
