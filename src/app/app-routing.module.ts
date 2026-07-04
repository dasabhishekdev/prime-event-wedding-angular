import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'best-event-organizer',
        pathMatch: 'full',
      },
      {
        path: 'best-event-organizer',
        component: HomePageComponent,
      },
      {
        path: 'default',
        loadChildren: () =>
          import('./pages/page-components/page-components.module').then(
            (m) => m.PageComponentsModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'client-review/:name',
    loadChildren: () =>
      import('./client-review-form/client-review.module').then((m) => m.ClientReviewModule),
  },
  {
    path: 'client-review',
    loadChildren: () =>
      import('./client-review-form/client-review.module').then((m) => m.ClientReviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
