import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'f',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'evento',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'editar-perfil',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'reservas-activas',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/reservas-activas/reservas-activas.module').then( m => m.ReservasActivasPageModule)
  },
  {
    path: 'todos-boliches',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/todos-boliches/todos-boliches.module').then( m => m.TodosBolichesPageModule)
  },
  {
    path: 'perfil-boliche',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/perfil-boliche/perfil-boliche.module').then( m => m.PerfilBolichePageModule)
  },
  {
    path: 'confirmar-reserva',
    canActivate: [AuthGuard],
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
