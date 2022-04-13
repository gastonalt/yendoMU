import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilBolichePage } from './perfil-boliche.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilBolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilBolichePageRoutingModule {}
