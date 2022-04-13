import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosBolichesPage } from './todos-boliches.page';

const routes: Routes = [
  {
    path: '',
    component: TodosBolichesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosBolichesPageRoutingModule {}
