import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
 
import { FilmsPageModule } from '../films/films.module';
import { FilmDetailsPageModule } from '../film-details/film-details.module';
import { PeoplePageModule } from '../people/people.module';
import { PlanetsPageModule } from '../planets/planets.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => FilmsPageModule
          },
          {
            path: ':id',
            loadChildren: () => FilmDetailsPageModule
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () => PeoplePageModule
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () => PlanetsPageModule
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}