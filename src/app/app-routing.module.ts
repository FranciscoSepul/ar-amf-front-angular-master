import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MaintenanceComponent } from './shared/components/maintenance/maintenance.component';
import {UsuariosComponent} from './modules/usuarios/usuarios.component';
import {CompanyComponent} from './modules/company/company.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

        { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
        { path: 'abm', loadChildren: () => import('./modules/abm/abm.module').then(m => m.AbmModule) },
        { path: 'Usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule) },
        { path: 'Company', loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule) },
    ]
  },

  // Not lazy-loaded routes
  { path: 'maintenance', component: MaintenanceComponent },
  //{ path: 'Usuarios', component: UsuariosComponent }

  // Not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
