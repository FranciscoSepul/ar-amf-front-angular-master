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
        { path: 'Accidentes', loadChildren: () => import('./modules/accidentes/accidentes.module').then(m => m.AccidentesModule) },
        { path: 'Actividades', loadChildren: () => import('./modules/actividades/actividades.module').then(m => m.ActividadesModule) },
        { path: 'Notificaciones', loadChildren: () => import('./modules/notificaciones/notificaciones.module').then(m => m.NotificacionesModule) },
        { path: 'Visitas', loadChildren: () => import('./modules/visitas/visitas.module').then(m => m.VisitasModule) },
        { path: 'Usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
        { path: 'Factura', loadChildren: () => import('./modules/factura/factura.module').then(m => m.FacturaModule) },        
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
