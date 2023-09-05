import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MaintenanceComponent } from './shared/components/maintenance/maintenance.component';
import { LoginCComponent } from './modules/login-mod/login-c/login-c.component';
import {UsuariosComponent} from './modules/usuarios/usuarios.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

        { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
        { path: 'abm', loadChildren: () => import('./modules/abm/abm.module').then(m => m.AbmModule) },
        { path: 'Usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule) },
    ]
  },

  // Not lazy-loaded routes
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'login', component: LoginCComponent },

  // Not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
