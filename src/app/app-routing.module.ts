import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path:'',
        redirectTo:  'inicio',
        pathMatch: 'full'
      },
      {
        path: 'historial',
        loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule),
      }
    ]
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
