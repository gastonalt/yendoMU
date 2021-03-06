import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'f',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./pages/evento/evento.module').then( m => m.EventoPageModule)
  },  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'reservas-activas',
    loadChildren: () => import('./pages/reservas-activas/reservas-activas.module').then( m => m.ReservasActivasPageModule)
  },
  {
    path: 'todos-boliches',
    loadChildren: () => import('./pages/todos-boliches/todos-boliches.module').then( m => m.TodosBolichesPageModule)
  },
  {
    path: 'perfil-boliche',
    loadChildren: () => import('./pages/perfil-boliche/perfil-boliche.module').then( m => m.PerfilBolichePageModule)
  },
  {
    path: 'confirmar-reserva',
    loadChildren: () => import('./pages/confirmar-reserva/confirmar-reserva.module').then( m => m.ConfirmarReservaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
